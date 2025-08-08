import React, { useEffect, useMemo, useState } from 'react';
import { View, Text, ScrollView, StyleSheet, Pressable } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
import { courses } from '../data/courses';
import { markLessonCompleted } from '../storage/progress';

 type Props = NativeStackScreenProps<RootStackParamList, 'Lesson'>;

export default function LessonScreen({ route, navigation }: Props) {
  const { language, lessonId } = route.params;
  const course = useMemo(() => courses.find((c) => c.language === language)!, [language]);
  const lesson = useMemo(() => course.lessons.find((l) => l.id === lessonId)!, [course, lessonId]);
  const [done, setDone] = useState(false);

  useEffect(() => {
    navigation.setOptions({ title: lesson.title });
  }, [navigation, lesson.title]);

  const complete = async () => {
    await markLessonCompleted(language, lessonId);
    setDone(true);
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ padding: 16 }}>
      <Text style={styles.title}>{lesson.title}</Text>
      <Text style={styles.theory}>{lesson.theory}</Text>
      <View style={styles.codeBox}>
        <Text style={styles.code}>{lesson.codeExample}</Text>
      </View>
      <Pressable style={[styles.btn, done ? styles.done : styles.primary]} onPress={complete} disabled={done}>
        <Text style={styles.btnText}>{done ? 'Урок завершён' : 'Отметить как пройдено'}</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  title: { fontSize: 22, fontWeight: '700', marginBottom: 12 },
  theory: { fontSize: 16, lineHeight: 22, marginBottom: 16 },
  codeBox: { backgroundColor: '#0b1221', borderRadius: 8, padding: 12, marginBottom: 16 },
  code: { color: '#9CDCFE', fontFamily: 'monospace' },
  btn: { padding: 14, borderRadius: 8, alignItems: 'center' },
  primary: { backgroundColor: '#1F4068' },
  done: { backgroundColor: '#2D6A4F' },
  btnText: { color: 'white', fontWeight: '600' }
});