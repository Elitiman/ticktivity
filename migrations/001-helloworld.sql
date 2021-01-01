-- UP
 CREATE  TABLE  Person (
     id INTEGER PRIMARY KEY AUTOINCREMENT,
     name  TEXT,
     email TEXT
 )

 CREATE TABLE Timer (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    hours  TEXT,
    totalTimeSpend TEXT,
    ownerId INTEGER REFERENCES Person(id)
 );

 --down

 DROP TABLE Person;
 DROP TABLE Timer;