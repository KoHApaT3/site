import { SupportedLanguage } from '../types';

export interface RoadmapSection {
  id: string;
  title: string;
  lessonIds: string[];
}

export type Roadmap = Record<SupportedLanguage, RoadmapSection[]>;

export const roadmaps: Roadmap = {
  Dart: [
    { id: 'base', title: 'Основы', lessonIds: ['dart-1', 'dart-2'] },
    { id: 'db', title: 'Базы данных', lessonIds: ['dart-db'] }
  ],
  Python: [
    { id: 'base', title: 'Основы', lessonIds: ['py-1', 'py-2'] },
    { id: 'db', title: 'Базы данных', lessonIds: ['py-db'] }
  ],
  JavaScript: [
    { id: 'base', title: 'Основы', lessonIds: ['js-1', 'js-2'] },
    { id: 'db', title: 'Базы данных', lessonIds: ['js-db'] }
  ],
  TypeScript: [
    { id: 'base', title: 'Основы', lessonIds: ['ts-1', 'ts-2'] },
    { id: 'db', title: 'Базы данных', lessonIds: ['ts-db'] }
  ],
  Java: [
    { id: 'base', title: 'Основы', lessonIds: ['java-1', 'java-2'] },
    { id: 'db', title: 'Базы данных', lessonIds: ['java-db'] }
  ],
  'C#': [
    { id: 'base', title: 'Основы', lessonIds: ['cs-1', 'cs-2'] },
    { id: 'db', title: 'Базы данных', lessonIds: ['cs-db'] }
  ],
  Go: [
    { id: 'base', title: 'Основы', lessonIds: ['go-1', 'go-2'] },
    { id: 'db', title: 'Базы данных', lessonIds: ['go-db'] }
  ],
  Rust: [
    { id: 'base', title: 'Основы', lessonIds: ['rs-1', 'rs-2'] },
    { id: 'db', title: 'Базы данных', lessonIds: ['rs-db'] }
  ],
  Kotlin: [
    { id: 'base', title: 'Основы', lessonIds: ['kt-1', 'kt-2'] },
    { id: 'db', title: 'Базы данных', lessonIds: ['kt-db'] }
  ],
  Swift: [
    { id: 'base', title: 'Основы', lessonIds: ['sw-1', 'sw-2'] },
    { id: 'db', title: 'Базы данных', lessonIds: ['sw-db'] }
  ],
  'C++': [
    { id: 'base', title: 'Основы', lessonIds: ['cpp-1', 'cpp-2'] },
    { id: 'db', title: 'Базы данных', lessonIds: ['cpp-db'] }
  ],
  PHP: [
    { id: 'base', title: 'Основы', lessonIds: ['php-1', 'php-2'] },
    { id: 'db', title: 'Базы данных', lessonIds: ['php-db'] }
  ],
  Ruby: [
    { id: 'base', title: 'Основы', lessonIds: ['rb-1', 'rb-2'] },
    { id: 'db', title: 'Базы данных', lessonIds: ['rb-db'] }
  ],
  Scala: [
    { id: 'base', title: 'Основы', lessonIds: ['sc-1', 'sc-2'] },
    { id: 'db', title: 'Базы данных', lessonIds: ['sc-db'] }
  ],
  C: [
    { id: 'base', title: 'Основы', lessonIds: ['c-1', 'c-2'] },
    { id: 'db', title: 'Базы данных', lessonIds: ['c-db'] }
  ],
  Haskell: [
    { id: 'base', title: 'Основы', lessonIds: ['hs-1', 'hs-2'] },
    { id: 'db', title: 'Базы данных', lessonIds: ['hs-db'] }
  ],
  Elixir: [
    { id: 'base', title: 'Основы', lessonIds: ['ex-1', 'ex-2'] },
    { id: 'db', title: 'Базы данных', lessonIds: ['ex-db'] }
  ],
  SQL: [
    { id: 'base', title: 'Основы SQL', lessonIds: ['sql-1', 'sql-2', 'sql-3'] }
  ],
  R: [
    { id: 'base', title: 'Основы', lessonIds: ['r-1', 'r-2'] },
    { id: 'db', title: 'Базы данных', lessonIds: ['r-db'] }
  ],
  Bash: [
    { id: 'base', title: 'Основы', lessonIds: ['sh-1', 'sh-2'] },
    { id: 'db', title: 'Базы данных', lessonIds: ['sh-db'] }
  ],
  MATLAB: [
    { id: 'base', title: 'Основы', lessonIds: ['m-1', 'm-2'] },
    { id: 'db', title: 'Базы данных', lessonIds: ['m-db'] }
  ],
};