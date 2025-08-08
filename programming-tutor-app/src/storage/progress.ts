import AsyncStorage from '@react-native-async-storage/async-storage';
import { ProgressState, SupportedLanguage } from '../types';
import { courses } from '../data/courses';

const STORAGE_KEY = 'progress_state_v1';

const getLanguages = (): SupportedLanguage[] => courses.map((c) => c.language);

const emptyProgress = (): ProgressState => {
  const languages = getLanguages();
  const completedLessons = languages.reduce((acc, lang) => {
    acc[lang] = new Set<string>();
    return acc;
  }, {} as Record<SupportedLanguage, Set<string>>);
  const quizScores = languages.reduce((acc, lang) => {
    acc[lang] = {};
    return acc;
  }, {} as Record<SupportedLanguage, Record<string, number>>);
  return { completedLessons, quizScores };
};

function serialize(state: ProgressState) {
  const languages = getLanguages();
  const completedLessons = Object.fromEntries(
    languages.map((lang) => [lang, Array.from(state.completedLessons[lang] ?? new Set<string>())])
  ) as Record<SupportedLanguage, string[]>;
  return JSON.stringify({ ...state, completedLessons });
}

function deserialize(json: string | null): ProgressState {
  const languages = getLanguages();
  if (!json) return emptyProgress();
  const raw = JSON.parse(json);
  const completedLessons = languages.reduce((acc, lang) => {
    acc[lang] = new Set<string>(raw.completedLessons?.[lang] ?? []);
    return acc;
  }, {} as Record<SupportedLanguage, Set<string>>);
  const quizScores = languages.reduce((acc, lang) => {
    acc[lang] = raw.quizScores?.[lang] ?? {};
    return acc;
  }, {} as Record<SupportedLanguage, Record<string, number>>);
  return { completedLessons, quizScores } as ProgressState;
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