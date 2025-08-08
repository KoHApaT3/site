import React, { useMemo, useState } from 'react';
import { View, Text, Pressable, StyleSheet, FlatList, Alert } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
import { courses } from '../data/courses';
import { saveQuizScore } from '../storage/progress';

 type Props = NativeStackScreenProps<RootStackParamList, 'Quiz'>;

export default function QuizScreen({ route, navigation }: Props) {
  const { language, lessonId } = route.params;
  const course = useMemo(() => courses.find((c) => c.language === language)!, [language]);
  const questions = useMemo(() => course.quizzes[lessonId] ?? [], [course, lessonId]);
  const [answers, setAnswers] = useState<Record<string, number>>({});

  const scorePercent = useMemo(() => {
    if (questions.length === 0) return 0;
    let correct = 0;
    for (const q of questions) {
      if (answers[q.id] === q.correctIndex) correct += 1;
    }
    return Math.round((correct / questions.length) * 100);
  }, [answers, questions]);

  const submit = async () => {
    await saveQuizScore(language, lessonId, scorePercent);
    Alert.alert('Результат', `Вы набрали ${scorePercent}%`, [
      { text: 'OK', onPress: () => navigation.goBack() }
    ]);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={questions}
        keyExtractor={(q) => q.id}
        renderItem={({ item: q }) => (
          <View style={styles.card}>
            <Text style={styles.question}>{q.question}</Text>
            {q.choices.map((c, idx) => {
              const selected = answers[q.id] === idx;
              return (
                <Pressable
                  key={idx}
                  onPress={() => setAnswers((a) => ({ ...a, [q.id]: idx }))}
                  style={[styles.choice, selected && styles.choiceSelected]}
                >
                  <Text style={styles.choiceText}>{c}</Text>
                </Pressable>
              );
            })}
            {q.explanation ? <Text style={styles.explanation}>{q.explanation}</Text> : null}
          </View>
        )}
        ListEmptyComponent={<Text style={{ padding: 16 }}>Для этого урока пока нет вопросов.</Text>}
      />
      <Pressable style={styles.submit} onPress={submit}>
        <Text style={styles.submitText}>Отправить ({scorePercent}%)</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  card: { backgroundColor: '#162447', margin: 12, padding: 16, borderRadius: 12 },
  question: { color: 'white', fontSize: 16, fontWeight: '700', marginBottom: 8 },
  choice: { backgroundColor: '#1B1B2F', padding: 10, borderRadius: 8, marginTop: 8 },
  choiceSelected: { backgroundColor: '#1F4068' },
  choiceText: { color: 'white' },
  explanation: { color: '#D1D1D1', marginTop: 8 },
  submit: { backgroundColor: '#1F4068', padding: 16, alignItems: 'center' },
  submitText: { color: 'white', fontWeight: '700' }
});