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
  const practiceResults = languages.reduce((acc, lang) => {
    acc[lang] = {};
    return acc;
  }, {} as Record<SupportedLanguage, Record<string, { lastOk: boolean; attempts: number }>>);
  return { completedLessons, quizScores, practiceResults };
};

function serialize(state: ProgressState) {
  const languages = getLanguages();
  const completedLessons = Object.fromEntries(
    languages.map((lang) => [lang, Array.from(state.completedLessons[lang] ?? new Set<string>())])
  ) as Record<SupportedLanguage, string[]>;
  const practiceResults = Object.fromEntries(
    languages.map((lang) => [lang, state.practiceResults?.[lang] ?? {}])
  ) as Record<SupportedLanguage, Record<string, { lastOk: boolean; attempts: number }>>;
  return JSON.stringify({ ...state, completedLessons, practiceResults });
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
  const practiceResults = languages.reduce((acc, lang) => {
    acc[lang] = raw.practiceResults?.[lang] ?? {};
    return acc;
  }, {} as Record<SupportedLanguage, Record<string, { lastOk: boolean; attempts: number }>>);
  return { completedLessons, quizScores, practiceResults } as ProgressState;
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

export async function savePracticeResult(language: SupportedLanguage, lessonId: string, ok: boolean) {
  const state = await getProgress();
  const currentLangMap = (state.practiceResults && state.practiceResults[language]) || {};
  const entry = currentLangMap[lessonId] ?? { lastOk: false, attempts: 0 };
  const updated = { lastOk: ok, attempts: entry.attempts + 1 };
  const newPracticeResults = {
    ...(state.practiceResults ?? {}),
    [language]: { ...currentLangMap, [lessonId]: updated }
  } as Record<SupportedLanguage, Record<string, { lastOk: boolean; attempts: number }>>;
  state.practiceResults = newPracticeResults;
  await AsyncStorage.setItem(STORAGE_KEY, serialize(state));
}