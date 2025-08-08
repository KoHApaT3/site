import { CourseData } from '../types';

export const courses: CourseData[] = [
  // ===== Existing and expanded courses =====
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
      },
      {
        id: 'dart-db',
        title: 'Работа с базой данных (SQLite, Flutter)',
        theory: 'Во Flutter часто используют SQLite через пакет sqflite для локального хранения данных.',
        codeExample: `// pubspec.yaml: sqflite, path\n// Пример: создание таблицы и вставка\nfinal db = await openDatabase(path, version: 1, onCreate: (db, v) async {\n  await db.execute('CREATE TABLE notes(id INTEGER PRIMARY KEY, text TEXT)');\n});\nawait db.insert('notes', {'text': 'Привет'});`
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
      ],
      'dart-db': [
        {
          id: 'q3',
          question: 'Какой пакет используют для SQLite во Flutter?',
          choices: ['http', 'sqflite', 'dio'],
          correctIndex: 1
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
      },
      {
        id: 'py-db',
        title: 'Работа с базой данных (sqlite3)',
        theory: 'Модуль sqlite3 входит в стандартную библиотеку и удобен для локальных БД.',
        codeExample: `import sqlite3\ncon = sqlite3.connect('app.db')\ncur = con.cursor()\ncur.execute('CREATE TABLE IF NOT EXISTS users(id INTEGER PRIMARY KEY, name TEXT)')\ncur.execute('INSERT INTO users(name) VALUES (?)', ('Alice',))\ncon.commit()`
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
      ],
      'py-db': [
        {
          id: 'q3',
          question: 'Какой модуль в стандартной библиотеке Python для SQLite?',
          choices: ['psycopg2', 'sqlite3', 'mysqlclient'],
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
        codeExample: `const name = 'World';\nconsole.log('Hello, ' + name);`
      },
      {
        id: 'js-2',
        title: 'Переменные: var/let/const',
        theory: 'let/const — современные способы объявления.',
        codeExample: `let x = 1;\nconst y = 2;\nvar z = 3;`
      },
      {
        id: 'js-db',
        title: 'Работа с базой данных (Node.js + pg)',
        theory: 'Подключение к PostgreSQL с помощью пакета pg.',
        codeExample: `const { Pool } = require('pg');\nconst pool = new Pool({ connectionString: process.env.DATABASE_URL });\nconst res = await pool.query('SELECT 1 as ok');\nconsole.log(res.rows);`
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
      ],
      'js-db': [
        {
          id: 'q3',
          question: 'Какой пакет используют для PostgreSQL в Node.js?',
          choices: ['mongoose', 'pg', 'sequelize'],
          correctIndex: 1
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
      },
      {
        id: 'ts-db',
        title: 'Работа с базой данных (Prisma + PostgreSQL)',
        theory: 'Prisma — ORM для TypeScript. Удобная генерация типов и миграции.',
        codeExample: `// schema.prisma и npm i prisma @prisma/client\n// Пример запроса:\nimport { PrismaClient } from '@prisma/client'\nconst prisma = new PrismaClient()\nconst users = await prisma.user.findMany()`
      }
    ],
    quizzes: {
      'ts-1': [
        { id: 'q1', question: 'Что добавляет TypeScript?', choices: ['Классы', 'Типы', 'Модули'], correctIndex: 1 }
      ],
      'ts-2': [
        { id: 'q2', question: 'Что описывает интерфейс?', choices: ['Поведение', 'Форму объекта', 'Память'], correctIndex: 1 }
      ],
      'ts-db': [
        { id: 'q3', question: 'Какой инструмент ORM популярен в TS?', choices: ['Hibernate', 'Prisma', 'Django ORM'], correctIndex: 1 }
      ]
    }
  },
  {
    language: 'Java',
    lessons: [
      { id: 'java-1', title: 'Введение в Java', theory: 'Java — язык с JVM и строгой типизацией.', codeExample: `class Main {\n  public static void main(String[] args) {\n    System.out.println("Hello, World");\n  }\n}` },
      { id: 'java-2', title: 'Классы и объекты', theory: 'ООП — основа Java.', codeExample: `class User { String name; int age; }` },
      { id: 'java-db', title: 'Работа с базой данных (JDBC)', theory: 'JDBC — стандартный API для работы с БД в Java.', codeExample: `import java.sql.*;\nConnection c = DriverManager.getConnection("jdbc:postgresql://localhost/db","u","p");\nPreparedStatement st = c.prepareStatement("SELECT 1");\nResultSet rs = st.executeQuery();` }
    ],
    quizzes: {
      'java-1': [{ id: 'q1', question: 'Где выполняется Java-код?', choices: ['JVM', 'Браузер', 'GPU'], correctIndex: 0 }],
      'java-2': [{ id: 'q2', question: 'Что такое объект?', choices: ['Переменная', 'Экземпляр класса', 'Пакет'], correctIndex: 1 }],
      'java-db': [{ id: 'q3', question: 'Какой API стандартен для БД в Java?', choices: ['ADO.NET', 'JDBC', 'Ecto'], correctIndex: 1 }]
    }
  },
  {
    language: 'C#',
    lessons: [
      { id: 'cs-1', title: 'Введение в C#', theory: 'C# — язык платформы .NET.', codeExample: `using System;\nclass Program { static void Main(){ Console.WriteLine("Hello"); } }` },
      { id: 'cs-2', title: 'Типы и свойства', theory: 'Классы, структуры, свойства.', codeExample: `class User { public string Name { get; set; } }` },
      { id: 'cs-db', title: 'Работа с базой данных (ADO.NET)', theory: 'ADO.NET — низкоуровневое API для БД, популярны также Dapper/EF.', codeExample: `using(var c = new System.Data.SqlClient.SqlConnection(connStr)){\n  c.Open();\n  using(var cmd = c.CreateCommand()){ cmd.CommandText = "SELECT 1"; var x = cmd.ExecuteScalar(); }\n}` }
    ],
    quizzes: {
      'cs-1': [{ id: 'q1', question: 'На какой платформе C#?', choices: ['.NET', 'JVM', 'V8'], correctIndex: 0 }],
      'cs-2': [{ id: 'q2', question: 'Что такое свойство?', choices: ['Метод', 'Поле с аксессорами', 'Событие'], correctIndex: 1 }],
      'cs-db': [{ id: 'q3', question: 'Что такое ADO.NET?', choices: ['СУБД', 'API доступа к БД', 'ORM'], correctIndex: 1 }]
    }
  },
  {
    language: 'Go',
    lessons: [
      { id: 'go-1', title: 'Введение в Go', theory: 'Go — компилируемый язык от Google.', codeExample: `package main\nimport "fmt"\nfunc main(){ fmt.Println("Hello") }` },
      { id: 'go-2', title: 'Горутины', theory: 'Лёгкие потоки исполнения.', codeExample: `go func(){ fmt.Println("hi") }()` },
      { id: 'go-db', title: 'Работа с базой данных (database/sql)', theory: 'database/sql — стандартный пакет, драйверы подключаются отдельно.', codeExample: `import (\n  "database/sql"\n  _ "github.com/lib/pq"\n)\ndb, _ := sql.Open("postgres", "...")\nrows, _ := db.Query("SELECT 1")` }
    ],
    quizzes: {
      'go-1': [{ id: 'q1', question: 'Какой тип языка Go?', choices: ['Интерпретируемый', 'Компилируемый', 'Скриптовый'], correctIndex: 1 }],
      'go-2': [{ id: 'q2', question: 'Что такое горутина?', choices: ['Процесс', 'Лёгкая нить', 'Система сборки'], correctIndex: 1 }],
      'go-db': [{ id: 'q3', question: 'Какой пакет стандартен для БД?', choices: ['database/sql', 'gorm', 'sqlx'], correctIndex: 0 }]
    }
  },
  {
    language: 'Rust',
    lessons: [
      { id: 'rs-1', title: 'Введение в Rust', theory: 'Rust — безопасный и быстрый язык.', codeExample: `fn main(){ println!("Hello"); }` },
      { id: 'rs-2', title: 'Владение и заимствование', theory: 'Модель памяти через владение.', codeExample: `let s = String::from("hi"); let r = &s;` },
      { id: 'rs-db', title: 'Работа с базой данных (sqlx)', theory: 'sqlx — асинхронная работа с БД без макросов ORM.', codeExample: `use sqlx::postgres::PgPoolOptions;\nlet pool = PgPoolOptions::new().connect("postgres://...").await?;\nlet row: (i64,) = sqlx::query_as("SELECT 1").fetch_one(&pool).await?;` }
    ],
    quizzes: {
      'rs-1': [{ id: 'q1', question: 'За счёт чего Rust безопасен?', choices: ['GC', 'Владение', 'JIT'], correctIndex: 1 }],
      'rs-2': [{ id: 'q2', question: 'Что такое заимствование?', choices: ['Копия', 'Ссылка без владения', 'Передача владения'], correctIndex: 1 }],
      'rs-db': [{ id: 'q3', question: 'Какой пакет для БД асинхронный?', choices: ['diesel', 'sqlx', 'mongodb'], correctIndex: 1 }]
    }
  },
  {
    language: 'Kotlin',
    lessons: [
      { id: 'kt-1', title: 'Введение в Kotlin', theory: 'Современный язык для JVM и Android.', codeExample: `fun main(){ println("Hello") }` },
      { id: 'kt-2', title: 'Null-безопасность', theory: 'Оператор ? и !!.', codeExample: `val name: String? = null\nprintln(name?.length)` },
      { id: 'kt-db', title: 'Работа с базой данных (Room, Android)', theory: 'Room — удобный ORM над SQLite для Android.', codeExample: `@Entity data class Note(@PrimaryKey(autoGenerate=true) val id:Int, val text:String)\n@Dao interface NoteDao { @Query("SELECT * FROM note") fun all(): List<Note> }` }
    ],
    quizzes: {
      'kt-1': [{ id: 'q1', question: 'Где работает Kotlin?', choices: ['Только JVM', 'JVM, JS, Native', 'Только Android'], correctIndex: 1 }],
      'kt-2': [{ id: 'q2', question: 'Зачем ? у типа?', choices: ['Массив', 'Nullable', 'Generics'], correctIndex: 1 }],
      'kt-db': [{ id: 'q3', question: 'Что такое Room?', choices: ['СУБД', 'ORM для Android', 'IDE'], correctIndex: 1 }]
    }
  },
  {
    language: 'Swift',
    lessons: [
      { id: 'sw-1', title: 'Введение в Swift', theory: 'Язык Apple для iOS/macOS.', codeExample: `print("Hello")` },
      { id: 'sw-2', title: 'Опционалы', theory: 'Опциональные типы и unwrap.', codeExample: `var name: String? = nil\nprint(name ?? "Unknown")` },
      { id: 'sw-db', title: 'Работа с базой данных (Core Data)', theory: 'Core Data — фреймворк для хранения объектов на iOS.', codeExample: `// NSPersistentContainer, NSManagedObject\n// Пример вставки сущности User(name:String)` }
    ],
    quizzes: {
      'sw-1': [{ id: 'q1', question: 'Где используется Swift?', choices: ['Android', 'iOS/macOS', 'Web'], correctIndex: 1 }],
      'sw-2': [{ id: 'q2', question: 'Что такое Optional?', choices: ['Массив', 'Тип, который может быть nil', 'Перечисление'], correctIndex: 1 }],
      'sw-db': [{ id: 'q3', question: 'Что такое Core Data?', choices: ['СУБД', 'Фреймворк хранения объектов', 'ORM для Java'], correctIndex: 1 }]
    }
  },
  {
    language: 'C++',
    lessons: [
      { id: 'cpp-1', title: 'Введение в C++', theory: 'Язык общего назначения с высокой производительностью.', codeExample: `#include <iostream>\nint main(){ std::cout << "Hello"; }` },
      { id: 'cpp-2', title: 'RAII и память', theory: 'Управление ресурсами через объекты.', codeExample: `std::string s = "hi"; // освобождение при выходе из области` },
      { id: 'cpp-db', title: 'Работа с базой данных (SQLite3)', theory: 'Работа через C API SQLite3.', codeExample: `#include <sqlite3.h>\nsqlite3* db; sqlite3_open("app.db", &db);\nsqlite3_exec(db, "CREATE TABLE t(x)", 0, 0, 0);` }
    ],
    quizzes: {
      'cpp-1': [{ id: 'q1', question: 'Чем известен C++?', choices: ['Медлительность', 'Высокая производительность', 'Только web'], correctIndex: 1 }],
      'cpp-2': [{ id: 'q2', question: 'Что такое RAII?', choices: ['GC', 'Идиома управления ресурсами', 'Шаблоны'], correctIndex: 1 }],
      'cpp-db': [{ id: 'q3', question: 'Какая библиотека для SQLite в C++?', choices: ['libpq', 'sqlite3', 'ODBC'], correctIndex: 1 }]
    }
  },

  // ===== New courses =====
  {
    language: 'PHP',
    lessons: [
      { id: 'php-1', title: 'Введение в PHP', theory: 'PHP — популярный язык для веб-разработки.', codeExample: `<?php echo 'Hello'; ?>` },
      { id: 'php-2', title: 'Ассоциативные массивы', theory: 'Ключ-значение — основной контейнер в PHP.', codeExample: `<?php $u = ['name' => 'Ann', 'age' => 25]; ?>` },
      { id: 'php-db', title: 'Работа с базой данных (PDO, MySQL)', theory: 'PDO — унифицированный интерфейс к БД.', codeExample: `$pdo = new PDO('mysql:host=localhost;dbname=test','u','p');\n$pdo->query('CREATE TABLE IF NOT EXISTS t(x INT)');` }
    ],
    quizzes: {
      'php-1': [{ id: 'q1', question: 'Где чаще используют PHP?', choices: ['ML', 'Веб', 'Системное ПО'], correctIndex: 1 }],
      'php-2': [{ id: 'q2', question: 'Как называется массив ключ-значение?', choices: ['vector', 'associative array', 'list'], correctIndex: 1 }],
      'php-db': [{ id: 'q3', question: 'Какой интерфейс БД в PHP?', choices: ['JDBC', 'PDO', 'DBI'], correctIndex: 1 }]
    }
  },
  {
    language: 'Ruby',
    lessons: [
      { id: 'rb-1', title: 'Введение в Ruby', theory: 'Ruby — выразительный язык общего назначения.', codeExample: `puts 'Hello'` },
      { id: 'rb-2', title: 'Хэши и массивы', theory: 'Hash и Array — базовые структуры.', codeExample: `h = {name: 'Ann'}; a = [1,2,3]` },
      { id: 'rb-db', title: 'Работа с базой данных (ActiveRecord + sqlite3)', theory: 'ActiveRecord — ORM из Rails, можно использовать отдельно.', codeExample: `require 'active_record'\nActiveRecord::Base.establish_connection(adapter: 'sqlite3', database: 'db.sqlite3')` }
    ],
    quizzes: {
      'rb-1': [{ id: 'q1', question: 'Как вывести строку?', choices: ['echo', 'puts', 'print()'], correctIndex: 1 }],
      'rb-2': [{ id: 'q2', question: 'Как называется отображение в Ruby?', choices: ['Map', 'Hash', 'Dict'], correctIndex: 1 }],
      'rb-db': [{ id: 'q3', question: 'Какая ORM известна в Ruby?', choices: ['Slick', 'ActiveRecord', 'Ecto'], correctIndex: 1 }]
    }
  },
  {
    language: 'Scala',
    lessons: [
      { id: 'sc-1', title: 'Введение в Scala', theory: 'Scala сочетает ООП и функциональное программирование.', codeExample: `object Main extends App { println("Hello") }` },
      { id: 'sc-2', title: 'Коллекции', theory: 'Неизменяемые коллекции по умолчанию.', codeExample: `val xs = List(1,2,3)` },
      { id: 'sc-db', title: 'Работа с базой данных (Slick)', theory: 'Slick — типобезопасная работа с БД.', codeExample: `import slick.jdbc.PostgresProfile.api._\nval db = Database.forURL("jdbc:postgresql://...", driver="org.postgresql.Driver")` }
    ],
    quizzes: {
      'sc-1': [{ id: 'q1', question: 'Какой стиль в Scala?', choices: ['Только ООП', 'ООП+ФП', 'Только ФП'], correctIndex: 1 }],
      'sc-2': [{ id: 'q2', question: 'Коллекции в Scala по умолчанию?', choices: ['Изменяемые', 'Неизменяемые', 'Отсутствуют'], correctIndex: 1 }],
      'sc-db': [{ id: 'q3', question: 'Что такое Slick?', choices: ['СУБД', 'Фреймворк HTTP', 'DSL к БД'], correctIndex: 2 }]
    }
  },
  {
    language: 'C',
    lessons: [
      { id: 'c-1', title: 'Введение в C', theory: 'Низкоуровневый язык системного программирования.', codeExample: `#include <stdio.h>\nint main(){ printf("Hello\n"); }` },
      { id: 'c-2', title: 'Указатели', theory: 'Базовая модель памяти через указатели.', codeExample: `int x = 10; int* p = &x;` },
      { id: 'c-db', title: 'Работа с базой данных (SQLite3)', theory: 'Подключение к SQLite через C API.', codeExample: `#include <sqlite3.h>\nsqlite3* db; sqlite3_open("app.db", &db);` }
    ],
    quizzes: {
      'c-1': [{ id: 'q1', question: 'Где чаще применяют C?', choices: ['Веб', 'Системное ПО', 'ML'], correctIndex: 1 }],
      'c-2': [{ id: 'q2', question: 'Что такое указатель?', choices: ['Ссылка на адрес', 'Массив', 'Стек'], correctIndex: 0 }],
      'c-db': [{ id: 'q3', question: 'Какая встраиваемая БД популярна?', choices: ['SQLite', 'MongoDB', 'Cassandra'], correctIndex: 0 }]
    }
  },
  {
    language: 'Haskell',
    lessons: [
      { id: 'hs-1', title: 'Введение в Haskell', theory: 'Чистый функциональный язык.', codeExample: `main = putStrLn "Hello"` },
      { id: 'hs-2', title: 'Типы и функции', theory: 'Мощная система типов и функции высшего порядка.', codeExample: `add a b = a + b` },
      { id: 'hs-db', title: 'Работа с базой данных (sqlite-simple)', theory: 'sqlite-simple — простой пакет для SQLite.', codeExample: `import Database.SQLite.Simple\nmain = do\n  conn <- open "test.db"\n  execute_ conn "CREATE TABLE IF NOT EXISTS t (x INT)"` }
    ],
    quizzes: {
      'hs-1': [{ id: 'q1', question: 'Какой парадигме следует Haskell?', choices: ['ООП', 'ФП', 'Процедурная'], correctIndex: 1 }],
      'hs-2': [{ id: 'q2', question: 'Что такое каррирование?', choices: ['Оптимизация', 'Преобразование функции по одному аргументу', 'Рекурсия'], correctIndex: 1 }],
      'hs-db': [{ id: 'q3', question: 'Какой пакет прост для SQLite?', choices: ['HDBC', 'persistent', 'sqlite-simple'], correctIndex: 2 }]
    }
  },
  {
    language: 'Elixir',
    lessons: [
      { id: 'ex-1', title: 'Введение в Elixir', theory: 'Язык на BEAM (Erlang VM) для распределённых систем.', codeExample: `IO.puts "Hello"` },
      { id: 'ex-2', title: 'Процессы и сообщения', theory: 'Лёгкие процессы и почтовые ящики.', codeExample: `spawn(fn -> IO.puts("hi") end)` },
      { id: 'ex-db', title: 'Работа с базой данных (Ecto)', theory: 'Ecto — экосистема для работы с БД и миграциями.', codeExample: `# mix ecto.create, Repo, schema, changeset` }
    ],
    quizzes: {
      'ex-1': [{ id: 'q1', question: 'На чём основан Elixir?', choices: ['JVM', 'BEAM', 'CLR'], correctIndex: 1 }],
      'ex-2': [{ id: 'q2', question: 'Как общаются процессы?', choices: ['Общие переменные', 'Сообщения', 'Сокеты'], correctIndex: 1 }],
      'ex-db': [{ id: 'q3', question: 'Что такое Ecto?', choices: ['СУБД', 'DSL и Repo для БД', 'HTTP сервер'], correctIndex: 1 }]
    }
  },
  {
    language: 'SQL',
    lessons: [
      { id: 'sql-1', title: 'SELECT и фильтрация', theory: 'Основы выборок: SELECT, FROM, WHERE.', codeExample: `SELECT name, age FROM users WHERE age >= 18;` },
      { id: 'sql-2', title: 'JOIN-ы', theory: 'Объединение таблиц: INNER/LEFT/RIGHT JOIN.', codeExample: `SELECT u.name, o.id FROM users u INNER JOIN orders o ON o.user_id = u.id;` },
      { id: 'sql-3', title: 'Агрегации и группировка', theory: 'COUNT, SUM, AVG, GROUP BY, HAVING.', codeExample: `SELECT user_id, COUNT(*) FROM orders GROUP BY user_id HAVING COUNT(*) > 3;` }
    ],
    quizzes: {
      'sql-1': [{ id: 'q1', question: 'Что делает WHERE?', choices: ['Сортирует', 'Фильтрует строки', 'Группирует'], correctIndex: 1 }],
      'sql-2': [{ id: 'q2', question: 'Как соединить таблицы?', choices: ['GROUP BY', 'JOIN', 'UNION'], correctIndex: 1 }],
      'sql-3': [{ id: 'q3', question: 'Что делает COUNT(*)?', choices: ['Считает строки', 'Суммирует числа', 'Находит максимум'], correctIndex: 0 }]
    }
  },
  {
    language: 'R',
    lessons: [
      { id: 'r-1', title: 'Введение в R', theory: 'Язык для статистики и анализа данных.', codeExample: `print('Hello')` },
      { id: 'r-2', title: 'Векторы и фреймы данных', theory: 'Основные структуры данных: vector, data.frame.', codeExample: `df <- data.frame(x=c(1,2), y=c(3,4))` },
      { id: 'r-db', title: 'Работа с базой данных (DBI + RSQLite)', theory: 'DBI — интерфейс, RSQLite — драйвер.', codeExample: `library(DBI); con <- dbConnect(RSQLite::SQLite(), 'app.db'); dbListTables(con)` }
    ],
    quizzes: {
      'r-1': [{ id: 'q1', question: 'Основное назначение R?', choices: ['Системное ПО', 'Статистика/Аналитика', 'Рендеринг'], correctIndex: 1 }],
      'r-2': [{ id: 'q2', question: 'Что такое data.frame?', choices: ['Массив', 'Табличная структура', 'Список'], correctIndex: 1 }],
      'r-db': [{ id: 'q3', question: 'Какой пакет — общий интерфейс к БД?', choices: ['DBI', 'ODBC', 'JDBC'], correctIndex: 0 }]
    }
  },
  {
    language: 'Bash',
    lessons: [
      { id: 'sh-1', title: 'Введение в Bash', theory: 'Shell для автоматизации задач.', codeExample: `echo "Hello"` },
      { id: 'sh-2', title: 'Переменные и пайпы', theory: 'Переменные окружения и конвейеры.', codeExample: `NAME=World; echo "Hello $NAME" | tr '[:lower:]' '[:upper:]'` },
      { id: 'sh-db', title: 'Работа с базой данных (psql/mysql)', theory: 'Использование CLI-клиентов для запросов.', codeExample: `psql $DATABASE_URL -c "SELECT now();"\nmysql -e "SHOW DATABASES;"` }
    ],
    quizzes: {
      'sh-1': [{ id: 'q1', question: 'Что такое Bash?', choices: ['Язык системного программирования', 'Интерпретатор команд', 'СУБД'], correctIndex: 1 }],
      'sh-2': [{ id: 'q2', question: 'Что делает пайп | ?', choices: ['Объединяет файлы', 'Передаёт вывод команды на вход другой', 'Сохраняет в файл'], correctIndex: 1 }],
      'sh-db': [{ id: 'q3', question: 'Какой клиент для PostgreSQL?', choices: ['psql', 'mongo', 'redis-cli'], correctIndex: 0 }]
    }
  },
  {
    language: 'MATLAB',
    lessons: [
      { id: 'm-1', title: 'Введение в MATLAB', theory: 'Среда для научных вычислений.', codeExample: `disp('Hello')` },
      { id: 'm-2', title: 'Матрицы и операции', theory: 'Основная структура — матрица.', codeExample: `A=[1 2;3 4]; B=inv(A)` },
      { id: 'm-db', title: 'Работа с базой данных (Database Toolbox/ODBC)', theory: 'Подключение к БД через toolbox или ODBC.', codeExample: `% conn = database('dbname','user','pass')` }
    ],
    quizzes: {
      'm-1': [{ id: 'q1', question: 'Главная область применения MATLAB?', choices: ['Веб', 'Научные вычисления', 'Администрирование'], correctIndex: 1 }],
      'm-2': [{ id: 'q2', question: 'Основная структура данных?', choices: ['Список', 'Матрица', 'Словарь'], correctIndex: 1 }],
      'm-db': [{ id: 'q3', question: 'Как подключиться к БД?', choices: ['database()', 'connect()', 'sqlOpen()'], correctIndex: 0 }]
    }
  }
];