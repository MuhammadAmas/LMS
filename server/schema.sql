CREATE DATABASE acadist;
USE acadist;

CREATE TABLE courses (
  course_id VARCHAR(100) PRIMARY KEY,
  course_name VARCHAR(255) NOT NULL,
  instructor_name VARCHAR(255) NOT NULL,
  ratings FLOAT NOT NULL,
  created_date DATE NOT NULL,
  image TEXT NOT NULL,
  description TEXT NOT NULL
);

INSERT INTO courses (course_id, course_name, instructor_name, ratings, created_date, image, description)
VALUES 
('CS101', 'Introduction to Computer Science', 'Dr. John Doe', '4.5', '2022-01-01', 'https://img.freepik.com/free-vector/flat-computer-engineering-concept_23-2148159062.jpg?size=626&ext=jpg&ga=GA1.1.162867055.1679223693&semt=ais', 'This course covers the basics of computer science, including programming, algorithms, and data structures.');

