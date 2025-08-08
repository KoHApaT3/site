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
  },
  {
    language: 'TypeScript',
    lessons: [
      {
        id: 'ts-1',
        title: 'Введение в TypeScript',
        theory: 'TypeScript — надстройка над JavaScript с типами.',
        codeExample: `function greet(name: string): string {\n  return 'Hello, ' + name;\n}`
      },
      {
        id: 'ts-2',
        title: 'Интерфейсы и типы',
        theory: 'Интерфейсы описывают форму объектов, типы — объединяют и составляют формы.',
        codeExample: `interface User { name: string; age: number }\nconst u: User = { name: 'Ann', age: 25 };`
      }
    ],
    quizzes: {
      'ts-1': [
        { id: 'q1', question: 'Что добавляет TypeScript?', choices: ['Классы', 'Типы', 'Модули'], correctIndex: 1 }
      ],
      'ts-2': [
        { id: 'q2', question: 'Что описывает интерфейс?', choices: ['Поведение', 'Форму объекта', 'Память'], correctIndex: 1 }
      ]
    }
  },
  {
    language: 'Java',
    lessons: [
      { id: 'java-1', title: 'Введение в Java', theory: 'Java — язык с JVM и строгой типизацией.', codeExample: `class Main {\n  public static void main(String[] args) {\n    System.out.println("Hello, World");\n  }\n}` },
      { id: 'java-2', title: 'Классы и объекты', theory: 'ООП — основа Java.', codeExample: `class User { String name; int age; }` }
    ],
    quizzes: {
      'java-1': [{ id: 'q1', question: 'Где выполняется Java-код?', choices: ['JVM', 'Браузер', 'GPU'], correctIndex: 0 }],
      'java-2': [{ id: 'q2', question: 'Что такое объект?', choices: ['Переменная', 'Экземпляр класса', 'Пакет'], correctIndex: 1 }]
    }
  },
  {
    language: 'C#',
    lessons: [
      { id: 'cs-1', title: 'Введение в C#', theory: 'C# — язык платформы .NET.', codeExample: `using System;\nclass Program { static void Main(){ Console.WriteLine("Hello"); } }` },
      { id: 'cs-2', title: 'Типы и свойства', theory: 'Классы, структуры, свойства.', codeExample: `class User { public string Name { get; set; } }` }
    ],
    quizzes: {
      'cs-1': [{ id: 'q1', question: 'На какой платформе C#?', choices: ['.NET', 'JVM', 'V8'], correctIndex: 0 }],
      'cs-2': [{ id: 'q2', question: 'Что такое свойство?', choices: ['Метод', 'Поле с аксессорами', 'Событие'], correctIndex: 1 }]
    }
  },
  {
    language: 'Go',
    lessons: [
      { id: 'go-1', title: 'Введение в Go', theory: 'Go — компилируемый язык от Google.', codeExample: `package main\nimport "fmt"\nfunc main(){ fmt.Println("Hello") }` },
      { id: 'go-2', title: 'Горутины', theory: 'Лёгкие потоки исполнения.', codeExample: `go func(){ fmt.Println("hi") }()` }
    ],
    quizzes: {
      'go-1': [{ id: 'q1', question: 'Какой тип языка Go?', choices: ['Интерпретируемый', 'Компилируемый', 'Скриптовый'], correctIndex: 1 }],
      'go-2': [{ id: 'q2', question: 'Что такое горутина?', choices: ['Процесс', 'Лёгкая нить', 'Система сборки'], correctIndex: 1 }]
    }
  },
  {
    language: 'Rust',
    lessons: [
      { id: 'rs-1', title: 'Введение в Rust', theory: 'Rust — безопасный и быстрый язык.', codeExample: `fn main(){ println!("Hello"); }` },
      { id: 'rs-2', title: 'Владение и заимствование', theory: 'Модель памяти через владение.', codeExample: `let s = String::from("hi"); let r = &s;` }
    ],
    quizzes: {
      'rs-1': [{ id: 'q1', question: 'За счёт чего Rust безопасен?', choices: ['GC', 'Владение', 'JIT'], correctIndex: 1 }],
      'rs-2': [{ id: 'q2', question: 'Что такое заимствование?', choices: ['Копия', 'Ссылка без владения', 'Передача владения'], correctIndex: 1 }]
    }
  },
  {
    language: 'Kotlin',
    lessons: [
      { id: 'kt-1', title: 'Введение в Kotlin', theory: 'Современный язык для JVM и Android.', codeExample: `fun main(){ println("Hello") }` },
      { id: 'kt-2', title: 'Null-безопасность', theory: 'Оператор ? и !!.', codeExample: `val name: String? = null\nprintln(name?.length)` }
    ],
    quizzes: {
      'kt-1': [{ id: 'q1', question: 'Где работает Kotlin?', choices: ['Только JVM', 'JVM, JS, Native', 'Только Android'], correctIndex: 1 }],
      'kt-2': [{ id: 'q2', question: 'Зачем ? у типа?', choices: ['Массив', 'Nullable', 'Generics'], correctIndex: 1 }]
    }
  },
  {
    language: 'Swift',
    lessons: [
      { id: 'sw-1', title: 'Введение в Swift', theory: 'Язык Apple для iOS/macOS.', codeExample: `print("Hello")` },
      { id: 'sw-2', title: 'Опционалы', theory: 'Опциональные типы и unwrap.', codeExample: `var name: String? = nil\nprint(name ?? "Unknown")` }
    ],
    quizzes: {
      'sw-1': [{ id: 'q1', question: 'Где используется Swift?', choices: ['Android', 'iOS/macOS', 'Web'], correctIndex: 1 }],
      'sw-2': [{ id: 'q2', question: 'Что такое Optional?', choices: ['Массив', 'Тип, который может быть nil', 'Перечисление'], correctIndex: 1 }]
    }
  },
  {
    language: 'C++',
    lessons: [
      { id: 'cpp-1', title: 'Введение в C++', theory: 'Язык общего назначения с высокой производительностью.', codeExample: `#include <iostream>\nint main(){ std::cout << "Hello"; }` },
      { id: 'cpp-2', title: 'RAII и память', theory: 'Управление ресурсами через объекты.', codeExample: `std::string s = "hi"; // освобождение при выходе из области` }
    ],
    quizzes: {
      'cpp-1': [{ id: 'q1', question: 'Чем известен C++?', choices: ['Медлительность', 'Высокая производительность', 'Только web'], correctIndex: 1 }],
      'cpp-2': [{ id: 'q2', question: 'Что такое RAII?', choices: ['GC', 'Идиома управления ресурсами', 'Шаблоны'], correctIndex: 1 }]
    }
  }
];