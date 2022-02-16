CREATE DATABASE days_abroad_db;

USE days_abroad_db;

CREATE TABLE todos

(
    id int NOT NULL AUTO_INCREMENT,
    List_items varchar(255) NOT NULL,
    PRIMARY KEY (id)
);