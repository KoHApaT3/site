export type SupportedLanguage =
  | 'Dart'
  | 'Python'
  | 'JavaScript'
  | 'TypeScript'
  | 'Java'
  | 'C#'
  | 'Go'
  | 'Rust'
  | 'Kotlin'
  | 'Swift'
  | 'C++'
  | 'PHP'
  | 'Ruby'
  | 'Scala'
  | 'C'
  | 'Haskell'
  | 'Elixir'
  | 'SQL'
  | 'R'
  | 'Bash'
  | 'MATLAB';

export interface LessonContent {
  id: string;
  title: string;
  theory: string;
  codeExample: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  choices: string[];
  correctIndex: number;
  explanation?: string;
}

export interface CourseData {
  language: SupportedLanguage;
  lessons: LessonContent[];
  quizzes: Record<string, QuizQuestion[]>; // by lesson id
}

export interface ProgressState {
  completedLessons: Record<SupportedLanguage, Set<string>>;
  quizScores: Record<SupportedLanguage, Record<string, number>>; // lessonId -> percent
}