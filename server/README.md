<<<<<<< HEAD
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
=======
## Create a `.env` file in server folder and write the following keys and their values.
```
REACT_APP_UDEMY_KEY=key
REACT_APP_UDEMY_TOKEN=token
```
>>>>>>> dev-zain
## Run the following commands
```javascript
$ npm install
$ npm run dev
```