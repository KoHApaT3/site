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

export type Difficulty = 'Intro' | 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';

export interface LessonContent {
  id: string;
  title: string;
  theory: string;
  codeExample: string;
  difficulty?: Difficulty;
  topics?: string[]; // e.g., ['DB', 'DB:Joins']
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
  practiceResults?: Record<SupportedLanguage, Record<string, { lastOk: boolean; attempts: number }>>;
}

export interface PracticeTask {
  id: string;
  title: string;
  prompt: string;
  starter?: string;
  language: SupportedLanguage;
  lessonId: string;
  check: (input: string) => { ok: boolean; feedback: string };
}