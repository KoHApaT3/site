import { Difficulty } from '../types';

export function getLessonDifficultyById(lessonId: string): Difficulty {
  if (/(^|-)intro($|-)/.test(lessonId) || lessonId.endsWith('-1')) return 'Intro';
  if (lessonId.endsWith('-db') || lessonId.endsWith('-2')) return 'Intermediate';
  if (lessonId.endsWith('-3')) return 'Advanced';
  if (/advanced|expert/.test(lessonId)) return 'Expert';
  return 'Beginner';
}