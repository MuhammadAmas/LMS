CREATE DATABASE acadist;
USE acadist;

CREATE TABLE courses (
  course_id VARCHAR(100) PRIMARY KEY,
  course_name VARCHAR(255) NOT NULL,
  instructor_name VARCHAR(255) NOT NULL,
  ratings FLOAT,
  created_date DATE,
  image TEXT NOT NULL,
  description TEXT NOT NULL,
  user_id varchar(255) NOT NULL
);

INSERT INTO courses (course_id, course_name, instructor_name, ratings, created_date, image, description, user_id)
VALUES 
    ('CS101', 'Introduction to Computer Science', 'Dr. John Doe', 4.5, '2022-01-01', 'https://img.freepik.com/free-vector/flat-computer-engineering-concept_23-2148159062.jpg?size=626&ext=jpg&ga=GA1.1.162867055.1679223693&semt=ais', 'This course covers the basics of computer science, including programming, algorithms, and data structures.', '1'),
    ('ENG101', 'Introduction to Literature', 'Prof. Jane Smith', 4.2, '2022-02-01', 'https://img.freepik.com/free-vector/tiny-college-persons-correcting-mistakes-text-manuscript-people-checking-grammar-punctuation-spelling-errors-flat-vector-illustration-education-editing-concept-banner-website-design_74855-22564.jpg?w=740&t=st=1680985001~exp=1680985601~hmac=1e3c3b64452cf5a7f2f6b89a4969801f2f1a3bd9bf5dbbc1d1af57073d725782', 'This course introduces students to various types of literature and helps them develop critical reading and analysis skills.', '2'),
    ('HIS101', 'World History', 'Dr. Michael Lee', 4.8, '2022-03-01', 'https://img.freepik.com/premium-vector/travel-around-world-destination_42052-9.jpg?w=996', 'This course explores the major events and developments in world history from ancient times to the present day.', '3'),
    ('MATH101', 'Calculus', 'Prof. Sarah Johnson', 4.3, '2022-04-01', 'https://img.freepik.com/free-vector/math-background_23-2148147326.jpg?w=740&t=st=1680985216~exp=1680985816~hmac=aedf3567e24063cbf82708669488f009d23b97170b231ad79d4bae180cd3ba6a', 'This course covers the fundamentals of calculus, including limits, derivatives, and integrals.', '3'),
    ('PHYS101', 'Introduction to Physics', 'Dr. James Smith', 4.7, '2022-05-01', 'https://img.freepik.com/free-vector/astronomy-concept-with-retro-science-cartoon-icons-set_1284-7503.jpg?w=740&t=st=1680985297~exp=1680985897~hmac=e5a73904c567780f670fc628b25e1a2426c813a9f3e7c5485d89f77d6a7b7b86', 'This course covers the basic principles of physics, including mechanics, waves, and thermodynamics.', '2' ),
    ('CHEM101', 'General Chemistry', 'Prof. David Brown', 4.1, '2022-06-01', 'https://img.freepik.com/free-vector/chemical-laboratory-workspace-design-concept_1284-11560.jpg?w=740&t=st=1680985327~exp=1680985927~hmac=fc47c05a1423b2e39eb35b790e3befd7d67c483e052a8e22d7ce72f4867371a8', 'This course covers the basic principles of chemistry, including atomic structure, chemical bonding, and reactions.', '1'),
    ('PSYCH101', 'Introduction to Psychology', 'Dr. Emily Davis', 4.9, '2022-07-01', 'https://img.freepik.com/free-vector/mental-health-awareness-concept_23-2148523714.jpg?w=740&t=st=1680985439~exp=1680986039~hmac=9c8826ba55187919c9446c69b221fb088463c44f8cb0571867bd7c75753beaa5', 'This course provides an overview of the field of psychology, including topics such as memory, perception, and social psychology.', '2'),
    ('ART101', 'Introduction to Art', 'Prof. Maria Rodriguez', 4.6, '2022-08-01', 'https://img.freepik.com/free-photo/brushes-colorful-painting_23-2147895445.jpg?t=st=1680985459~exp=1680986059~hmac=108aac1154c4487e4ed61b14016ed0b2ce21293daf278dd730a378eef231c5d4', 'This course covers the basics of art history and theory, as well as techniques in various art forms such as painting and sculpture.', '1'),
    ('BUS101', 'Introduction to Business', 'Prof. Andrew Lee', 4.4, '2022-09-01', 'https://img.freepik.com/free-vector/people-analyzing-growth-charts_23-2148866843.jpg?w=740&t=st=1680985508~exp=1680986108~hmac=40e5ef6e1a48b62e298f1d019d250a6d483bcfda9f91061bd1d1f189adfafb9c', 'This course provides an overview of the business world, including topics such as management, marketing, and accounting.', '2'),
    ('ECON101', 'Principles of Economics', 'Dr. Elizabeth Chen', 4.2, '2022-10-01', 'https://img.freepik.com/free-vector/finance-illustration-concept_114360-769.jpg?w=740&t=st=1680985548~exp=1680986148~hmac=fbd273e0879207437d50fc22ccdd33c0d87365e660132c7fe9a20f9c22db0161', 'This course covers the basics of microeconomics and macroeconomics, including topics such as supply and demand, market structures, and economic growth.', '2');

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