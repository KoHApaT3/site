import React from 'react';
import { View, Text, FlatList, Pressable, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
import { courses } from '../data/courses';

type Props = NativeStackScreenProps<RootStackParamList, 'Course'>;

export default function CourseScreen({ route, navigation }: Props) {
  const course = courses.find((c) => c.language === route.params.language)!;

  return (
    <View style={styles.container}>
      <FlatList
        data={course.lessons}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.lessonCard}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.theory} numberOfLines={3}>{item.theory}</Text>
            <View style={styles.row}>
              <Pressable
                style={[styles.btn, styles.primary]}
                onPress={() => navigation.navigate('Lesson', { language: course.language, lessonId: item.id })}
              >
                <Text style={styles.btnText}>Читать</Text>
              </Pressable>
              <Pressable
                style={[styles.btn, styles.secondary]}
                onPress={() => navigation.navigate('Quiz', { language: course.language, lessonId: item.id })}
              >
                <Text style={styles.btnText}>Квиз</Text>
              </Pressable>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  lessonCard: {
    padding: 16,
    borderRadius: 12,
    backgroundColor: '#162447',
    marginBottom: 12
  },
  title: { color: 'white', fontSize: 18, fontWeight: '700', marginBottom: 6 },
  theory: { color: 'white', opacity: 0.9, marginBottom: 12 },
  row: { flexDirection: 'row', gap: 12 },
  btn: { paddingVertical: 10, paddingHorizontal: 14, borderRadius: 8 },
  primary: { backgroundColor: '#1F4068' },
  secondary: { backgroundColor: '#1B1B2F' },
  btnText: { color: 'white', fontWeight: '600' }
});