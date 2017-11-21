drop database if exists proj2_db;
create database proj2_db;
USE proj2_db;

CREATE TABLE Corp (
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	url varchar(255) NOT NULL,
	scores varchar(255) DEFAULT false,
	PRIMARY KEY (id)
);

CREATE TABLE User (
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	url varchar(255) NOT NULL,
	scores varchar(255) DEFAULT false,
	PRIMARY KEY (id)
)