import { CourseData } from '../types';

export const courses: CourseData[] = [
  {
    language: 'Dart',
    lessons: [
      {
        id: 'dart-1',
        title: 'Введение в Dart',
        theory:
          'Dart — язык от Google, используемый для Flutter. Имеет строгую типизацию и современный синтаксис.',
        codeExample: `void main() {\n  var name = 'World';\n  print('Hello, $name');\n}`
      },
      {
        id: 'dart-2',
        title: 'Переменные и типы',
        theory: 'var, final, const; типы: int, double, String, bool, List, Map.',
        codeExample: `int a = 10;\ndouble b = 3.14;\nString s = 'Dart';\nbool ok = true;`
      }
    ],
    quizzes: {
      'dart-1': [
        {
          id: 'q1',
          question: 'Для чего чаще всего используется Dart?',
          choices: ['Web серверы', 'Flutter-приложения', 'Системное программирование'],
          correctIndex: 1,
          explanation: 'Dart — основной язык для Flutter.'
        }
      ],
      'dart-2': [
        {
          id: 'q2',
          question: 'Какая конструкция объявляет неизменяемую переменную?',
          choices: ['var', 'final', 'dynamic'],
          correctIndex: 1,
          explanation: 'final — значение присваивается один раз.'
        }
      ]
    }
  },
  {
    language: 'Python',
    lessons: [
      {
        id: 'py-1',
        title: 'Введение в Python',
        theory: 'Python — интерпретируемый язык с лаконичным синтаксисом.',
        codeExample: `name = 'World'\nprint(f'Hello, {name}')`
      },
      {
        id: 'py-2',
        title: 'Списки и словари',
        theory: 'list и dict — базовые структуры данных.',
        codeExample: `nums = [1, 2, 3]\nuser = {'name': 'Alice', 'age': 30}`
      }
    ],
    quizzes: {
      'py-1': [
        {
          id: 'q1',
          question: 'Как вывести строку на экран в Python?',
          choices: ['echo("text")', 'console.log("text")', 'print("text")'],
          correctIndex: 2
        }
      ],
      'py-2': [
        {
          id: 'q2',
          question: 'Какой тип представляет словарь?',
          choices: ['list', 'dict', 'set'],
          correctIndex: 1
        }
      ]
    }
  },
  {
    language: 'JavaScript',
    lessons: [
      {
        id: 'js-1',
        title: 'Введение в JavaScript',
        theory: 'JavaScript — язык для веба и не только (Node.js).',
        codeExample: `const name = 'World';\nconsole.log(` + "'Hello, ' + name" + `);`
      },
      {
        id: 'js-2',
        title: 'Переменные: var/let/const',
        theory: 'let/const — современные способы объявления.',
        codeExample: `let x = 1;\nconst y = 2;\nvar z = 3;`
      }
    ],
    quizzes: {
      'js-1': [
        {
          id: 'q1',
          question: 'Где выполняется JavaScript?',
          choices: ['Только в браузере', 'Только на сервере', 'И в браузере, и на сервере'],
          correctIndex: 2
        }
      ],
      'js-2': [
        {
          id: 'q2',
          question: 'Как объявить константу?',
          choices: ['var', 'let', 'const'],
          correctIndex: 2
        }
      ]
    }
  }
];