import { Difficulty } from '../types';

export function getLessonDifficultyById(lessonId: string): Difficulty {
  if (lessonId.endsWith('-1')) return 'Beginner';
  if (lessonId.endsWith('-db')) return 'Intermediate';
  if (lessonId.endsWith('-2')) return 'Intermediate';
  if (lessonId.endsWith('-3')) return 'Advanced';
  return 'Beginner';
}