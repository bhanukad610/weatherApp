create database if not exists id8371640_weatherappdb;
use id8371640_weatherappdb;

create table if not exists users(
    user_id int AUTO_INCREMENT,
    first_name varchar(10),
    last_name varchar(20),
    email varchar(40),
    home_city varchar(30),
    primary key (user_id)
);

create table if not exists weather_details(
    user_id int,
    date_time datetime,
    city varchar(30),
    description varchar(40),
    temp decimal(4,3),
    relative_humidity decimal(4,3),
    wind_speed decimal(4,3),
    pressure decimal(8,3),
    primary key (user_id, date_time),
    foreign key (user_id) references users(user_id)
);

