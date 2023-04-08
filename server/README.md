## Create your DataBase
### Here is the Schema code
```sql
CREATE DATABASE notes_app;
USE notes_app;

CREATE TABLE notes (
  id integer PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(255) NOT NULL,
  contents TEXT NOT NULL,
  created TIMESTAMP NOT NULL DEFAULT NOW()
);

INSERT INTO notes (title, contents)
VALUES 
('My First Note', 'A note about something'),
('My Second Note', 'A note about something else');
```
## Change the configuration in `.env` file
## Run the following commands
```javascript
$ npm install
$ npm run dev
```