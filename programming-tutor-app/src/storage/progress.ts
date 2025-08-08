import AsyncStorage from '@react-native-async-storage/async-storage';
import { ProgressState, SupportedLanguage } from '../types';

const STORAGE_KEY = 'progress_state_v1';

const emptyProgress = (): ProgressState => ({
  completedLessons: {
    Dart: new Set<string>(),
    Python: new Set<string>(),
    JavaScript: new Set<string>()
  },
  quizScores: {
    Dart: {},
    Python: {},
    JavaScript: {}
  }
});

function serialize(state: ProgressState) {
  return JSON.stringify({
    ...state,
    completedLessons: {
      Dart: Array.from(state.completedLessons.Dart),
      Python: Array.from(state.completedLessons.Python),
      JavaScript: Array.from(state.completedLessons.JavaScript)
    }
  });
}

function deserialize(json: string | null): ProgressState {
  if (!json) return emptyProgress();
  const raw = JSON.parse(json);
  return {
    completedLessons: {
      Dart: new Set<string>(raw.completedLessons?.Dart ?? []),
      Python: new Set<string>(raw.completedLessons?.Python ?? []),
      JavaScript: new Set<string>(raw.completedLessons?.JavaScript ?? [])
    },
    quizScores: raw.quizScores ?? { Dart: {}, Python: {}, JavaScript: {} }
  } as ProgressState;
}

export async function getProgress(): Promise<ProgressState> {
  const saved = await AsyncStorage.getItem(STORAGE_KEY);
  return deserialize(saved);
}

export async function markLessonCompleted(language: SupportedLanguage, lessonId: string) {
  const state = await getProgress();
  state.completedLessons[language].add(lessonId);
  await AsyncStorage.setItem(STORAGE_KEY, serialize(state));
}

export async function saveQuizScore(language: SupportedLanguage, lessonId: string, percent: number) {
  const state = await getProgress();
  state.quizScores[language][lessonId] = percent;
  await AsyncStorage.setItem(STORAGE_KEY, serialize(state));
}