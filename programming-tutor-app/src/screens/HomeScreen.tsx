import React, { useEffect, useState } from 'react';
import { View, Text, Pressable, StyleSheet, FlatList } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
import { courses } from '../data/courses';
import { getProgress } from '../storage/progress';
import { SupportedLanguage } from '../types';
import { computeDbProgressByLanguage } from '../utils/topicProgress';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function HomeScreen({ navigation }: Props) {
  const [progressText, setProgressText] = useState<Record<SupportedLanguage, string>>({} as any);
  const [dbProgressText, setDbProgressText] = useState<Record<SupportedLanguage, string>>({} as any);

  useEffect(() => {
    const load = async () => {
      const p = await getProgress();
      const result = courses.reduce((acc, course) => {
        const done = p.completedLessons[course.language].size;
        const total = course.lessons.length || 1;
        acc[course.language] = `${Math.round((done / total) * 100)}%`;
        return acc;
      }, {} as Record<SupportedLanguage, string>);
      setProgressText(result);

      const db = computeDbProgressByLanguage(p, courses);
      const dbText = Object.fromEntries(Object.entries(db).map(([k, v]) => [k, `${v}%`])) as Record<SupportedLanguage, string>;
      setDbProgressText(dbText);
    };
    const unsubscribe = navigation.addListener('focus', load);
    load();
    return unsubscribe;
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Выберите язык</Text>
      <FlatList
        data={courses}
        keyExtractor={(item) => item.language}
        renderItem={({ item }) => (
          <Pressable
            style={styles.card}
            onPress={() => navigation.navigate('Course', { language: item.language })}
          >
            <Text style={styles.cardTitle}>{item.language}</Text>
            <Text style={styles.cardSubtitle}>Прогресс: {progressText[item.language] ?? '0%'} | БД: {dbProgressText[item.language] ?? '0%'}</Text>
          </Pressable>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, gap: 12 },
  title: { fontSize: 22, fontWeight: '700', marginBottom: 8 },
  card: {
    padding: 16,
    borderRadius: 12,
    backgroundColor: '#1F4068',
    marginBottom: 12
  },
  cardTitle: { color: 'white', fontSize: 18, fontWeight: '700' },
  cardSubtitle: { color: 'white', marginTop: 6, opacity: 0.9 }
});