CREATE DATABASE dad_jokes;
USE dad_jokes;

CREATE TABLE IF NOT EXISTS jokes
    {
        id int NOT NULL AUTO_INCREMENT,
        joke varchar(255) NOT NULL,
        punchline varchar(255),
        approved boolean NOT NULL DEFAULT false,
        PRIMARY KEY (id)
    };
