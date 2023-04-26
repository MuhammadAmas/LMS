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
    ('CS101', 'Introduction to Computer Science', 'Dr. John Doe', 4.5, '2022-01-01', 'https://img.freepik.com/free-vector/flat-computer-engineering-concept_23-2148159062.jpg?size=626&ext=jpg&ga=GA1.1.162867055.1679223693&semt=ais', 'This course covers the basics of computer science, including programming, algorithms, and data structures.'),
    ('ENG101', 'Introduction to Literature', 'Prof. Jane Smith', 4.2, '2022-02-01', 'https://img.freepik.com/free-vector/tiny-college-persons-correcting-mistakes-text-manuscript-people-checking-grammar-punctuation-spelling-errors-flat-vector-illustration-education-editing-concept-banner-website-design_74855-22564.jpg?w=740&t=st=1680985001~exp=1680985601~hmac=1e3c3b64452cf5a7f2f6b89a4969801f2f1a3bd9bf5dbbc1d1af57073d725782', 'This course introduces students to various types of literature and helps them develop critical reading and analysis skills.'),
    ('HIS101', 'World History', 'Dr. Michael Lee', 4.8, '2022-03-01', 'https://img.freepik.com/premium-vector/travel-around-world-destination_42052-9.jpg?w=996', 'This course explores the major events and developments in world history from ancient times to the present day.'),
    ('MATH101', 'Calculus', 'Prof. Sarah Johnson', 4.3, '2022-04-01', 'https://img.freepik.com/free-vector/math-background_23-2148147326.jpg?w=740&t=st=1680985216~exp=1680985816~hmac=aedf3567e24063cbf82708669488f009d23b97170b231ad79d4bae180cd3ba6a', 'This course covers the fundamentals of calculus, including limits, derivatives, and integrals.'),
    ('PHYS101', 'Introduction to Physics', 'Dr. James Smith', 4.7, '2022-05-01', 'https://img.freepik.com/free-vector/astronomy-concept-with-retro-science-cartoon-icons-set_1284-7503.jpg?w=740&t=st=1680985297~exp=1680985897~hmac=e5a73904c567780f670fc628b25e1a2426c813a9f3e7c5485d89f77d6a7b7b86', 'This course covers the basic principles of physics, including mechanics, waves, and thermodynamics.'),
    
CREATE TABLE users(
  user_id Serial PRIMARY KEY,
  username VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  type VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  created_date DATE NOT NULL
);

INSERT INTO users (username, password, type,email)
VALUES 
('admin', 'admin123','admin','zainasif@gmail.com','18-04-2023')   