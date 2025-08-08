import React, { useMemo, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Pressable, Alert, ScrollView } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
import { findPracticeTask } from '../data/practice';

 type Props = NativeStackScreenProps<RootStackParamList, 'Practice'>;

export default function PracticeScreen({ route }: Props) {
  const { language, lessonId } = route.params;
  const task = useMemo(() => findPracticeTask(language, lessonId), [language, lessonId]);
  const [code, setCode] = useState(task?.starter ?? '');

  const run = () => {
    if (!task) return;
    const res = task.check(code);
    if (res.ok) Alert.alert('Успех', res.feedback);
    else Alert.alert('Почти', res.feedback);
  };

  if (!task) {
    return (
      <View style={styles.container}> 
        <Text style={styles.title}>Практическое задание недоступно для этого урока.</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ padding: 16 }}>
      <Text style={styles.title}>{task.title}</Text>
      <Text style={styles.prompt}>{task.prompt}</Text>
      <TextInput
        style={styles.editor}
        multiline
        value={code}
        onChangeText={setCode}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Pressable style={styles.btn} onPress={run}>
        <Text style={styles.btnText}>Проверить</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  title: { fontSize: 20, fontWeight: '700', marginBottom: 8 },
  prompt: { fontSize: 16, marginBottom: 12 },
  editor: {
    minHeight: 180,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#333',
    padding: 12,
    fontFamily: 'monospace',
    backgroundColor: '#0b1221',
    color: '#E5E5E5',
    marginBottom: 12
  },
  btn: { backgroundColor: '#1F4068', padding: 14, borderRadius: 8, alignItems: 'center' },
  btnText: { color: 'white', fontWeight: '700' }
});