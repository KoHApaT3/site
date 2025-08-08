// Maps lessonId -> topics
export const lessonIdToTopics: Record<string, string[]> = {
  // DB lessons across languages
  'dart-db': ['DB', 'DB:SQLite'],
  'py-db': ['DB', 'DB:SQLite'],
  'js-db': ['DB', 'DB:PostgreSQL'],
  'ts-db': ['DB', 'DB:PostgreSQL', 'DB:ORM'],
  'java-db': ['DB', 'DB:JDBC'],
  'cs-db': ['DB', 'DB:ADO.NET'],
  'go-db': ['DB', 'DB:database/sql'],
  'rs-db': ['DB', 'DB:sqlx'],
  'kt-db': ['DB', 'DB:Room', 'DB:SQLite'],
  'sw-db': ['DB', 'DB:CoreData'],
  'cpp-db': ['DB', 'DB:SQLite'],
  'php-db': ['DB', 'DB:MySQL', 'DB:PDO'],
  'rb-db': ['DB', 'DB:ActiveRecord', 'DB:SQLite'],
  'sc-db': ['DB', 'DB:Slick'],
  'c-db': ['DB', 'DB:SQLite'],
  'hs-db': ['DB', 'DB:SQLite'],
  'ex-db': ['DB', 'DB:Ecto'],
  'r-db': ['DB', 'DB:RSQLite'],
  'sh-db': ['DB', 'DB:CLI'],
  'm-db': ['DB', 'DB:ODBC'],

  // SQL breakdown
  'sql-1': ['DB', 'DB:SELECT', 'DB:Filtering'],
  'sql-2': ['DB', 'DB:JOINs'],
  'sql-3': ['DB', 'DB:Aggregation', 'DB:GROUP BY'],
};