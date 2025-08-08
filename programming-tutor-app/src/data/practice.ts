import { PracticeTask } from '../types';

export const practiceTasks: PracticeTask[] = [
  {
    id: 'py-hello',
    title: 'Привет, мир!',
    prompt: 'Напишите программу, которая выводит строку Hello, World',
    starter: "# Ваш код ниже\n",
    language: 'Python',
    lessonId: 'py-1',
    check: (input) => {
      const normalized = input.replace(/\s+/g, '').toLowerCase();
      const ok = normalized.includes('print("hello,world")') || normalized.includes("print('hello,world')");
      return { ok, feedback: ok ? 'Отлично!' : 'Ожидается вывод через print("Hello, World")' };
    }
  },
  {
    id: 'js-hello',
    title: 'Привет, мир!',
    prompt: 'Напишите программу, которая выводит Hello, World в консоль',
    starter: '// Ваш код ниже\n',
    language: 'JavaScript',
    lessonId: 'js-1',
    check: (input) => {
      const n = input.replace(/\s+/g, '').toLowerCase();
      const ok = n.includes("console.log('hello,world')") || n.includes('console.log("hello,world")');
      return { ok, feedback: ok ? 'Отлично!' : 'Ожидается console.log("Hello, World")' };
    }
  },
  {
    id: 'sql-filter',
    title: 'Фильтрация пользователей 18+',
    prompt: 'Напишите SELECT, который выбирает колонки name, age из таблицы users только для age >= 18',
    starter: 'SELECT name, age FROM users WHERE ',
    language: 'SQL',
    lessonId: 'sql-1',
    check: (input) => {
      const n = input.replace(/\s+/g, '').toLowerCase();
      const ok = n.startsWith('select') && n.includes('fromusers') && n.includes('name,age'.replace(',', '')) && (n.includes('age>=18') || n.includes('age>17'));
      return { ok, feedback: ok ? 'Верно!' : 'Убедитесь, что указали SELECT name, age FROM users WHERE age >= 18' };
    }
  },
  {
    id: 'ts-interface',
    title: 'Интерфейс User',
    prompt: 'Опишите интерфейс User с полями name:string и age:number',
    starter: '// interface User { ... }\n',
    language: 'TypeScript',
    lessonId: 'ts-2',
    check: (input) => {
      const n = input.replace(/\s+/g, '').toLowerCase();
      const ok = n.includes('interfaceuser{') && n.includes('name:string') && n.includes('age:number');
      return { ok, feedback: ok ? 'Правильно.' : 'Добавьте interface User { name: string; age: number }' };
    }
  }
];

export function findPracticeTask(language: string, lessonId: string): PracticeTask | undefined {
  return practiceTasks.find((t) => t.language === language && t.lessonId === lessonId);
}