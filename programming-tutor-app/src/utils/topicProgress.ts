import { CourseData, ProgressState, SupportedLanguage } from '../types';
import { lessonIdToTopics } from '../data/topics';

export function computeDbProgressByLanguage(
  progress: ProgressState,
  courses: CourseData[]
): Record<SupportedLanguage, number> {
  const result = {} as Record<SupportedLanguage, number>;

  for (const course of courses) {
    const dbLessons = course.lessons.filter((l) => {
      const topics = l.topics ?? lessonIdToTopics[l.id] ?? [];
      return topics.some((t) => t.startsWith('DB'));
    });
    const total = dbLessons.length || 0;
    if (total === 0) {
      result[course.language] = 0;
      continue;
    }
    const completed = dbLessons.filter((l) => progress.completedLessons[course.language].has(l.id))
      .length;
    result[course.language] = Math.round((completed / total) * 100);
  }

  return result;
}