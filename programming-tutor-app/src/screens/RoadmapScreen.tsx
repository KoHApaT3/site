import React, { useMemo } from 'react';
import { View, Text, StyleSheet, FlatList, Pressable } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
import { roadmaps } from '../data/roadmaps';
import { courses } from '../data/courses';

 type Props = NativeStackScreenProps<RootStackParamList, 'Roadmap'>;

export default function RoadmapScreen({ route, navigation }: Props) {
  const { language } = route.params;
  const sections = roadmaps[language] ?? [];
  const course = useMemo(() => courses.find((c) => c.language === language)!, [language]);
  const lessonById = useMemo(() => Object.fromEntries(course.lessons.map((l) => [l.id, l])), [course]);

  return (
    <FlatList
      style={styles.container}
      data={sections}
      keyExtractor={(s) => s.id}
      renderItem={({ item: s }) => (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{s.title}</Text>
          {s.lessonIds.map((lid) => {
            const l = lessonById[lid];
            if (!l) return null;
            return (
              <View key={lid} style={styles.lessonRow}>
                <Text style={styles.lessonTitle}>{l.title}</Text>
                <View style={styles.row}>
                  <Pressable style={[styles.btn, styles.primary]} onPress={() => navigation.navigate('Lesson', { language, lessonId: lid })}>
                    <Text style={styles.btnText}>Урок</Text>
                  </Pressable>
                  <Pressable style={[styles.btn, styles.secondary]} onPress={() => navigation.navigate('Quiz', { language, lessonId: lid })}>
                    <Text style={styles.btnText}>Квиз</Text>
                  </Pressable>
                  <Pressable style={[styles.btn, styles.secondary]} onPress={() => navigation.navigate('Practice', { language, lessonId: lid })}>
                    <Text style={styles.btnText}>Практика</Text>
                  </Pressable>
                </View>
              </View>
            );
          })}
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  section: { marginBottom: 20 },
  sectionTitle: { fontSize: 18, fontWeight: '700', marginBottom: 8 },
  lessonRow: { padding: 12, backgroundColor: '#162447', borderRadius: 10, marginBottom: 10 },
  lessonTitle: { color: 'white', marginBottom: 8 },
  row: { flexDirection: 'row', gap: 8 },
  btn: { paddingVertical: 8, paddingHorizontal: 12, borderRadius: 8 },
  primary: { backgroundColor: '#1F4068' },
  secondary: { backgroundColor: '#1B1B2F' },
  btnText: { color: 'white', fontWeight: '600' }
});