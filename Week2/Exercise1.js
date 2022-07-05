const mysql = require("mysql");

const config = {
  host: "localhost",
  user: "hyfuser",
  password: "hyfpassword",
  database: "userdb",
};

const connection = mysql.createConnection(config);

const execQuery = (query) => {
  connection.query(query, function (error, results) {
    if (error) throw error;
    console.table(results);
  });
};

function seedDatabase() {
  const CREATE_AUTHORS_TABLE = `
    CREATE TABLE IF NOT EXISTS authors (
        author_no int not null AUTO_INCREMENT, 
        author_name varchar(100), 
        university varchar(200), 
        date_of_birth date, 
        h_index int, 
        gender enum('f', 'm'),
        mentor INT,
        constraint primary key(author_no)
    );`;

  const ADD_FK_MENTOR = `
  ALTER TABLE authors
    ADD CONSTRAINT FOREIGN KEY (mentor) REFERENCES authors(author_no);`;

  const AUTHORS_TO_INSERT = `INSERT INTO authors (author_name, university, date_of_birth, h_index, gender, mentor)
      VALUES 
        ('Francesca Orsini', 'University of Michigan', '1980-01-10', 17, 'f', null),
        ('Filimon Haftu', 'University of Utrecht', '1960-02-07', 12, 'f', 1),
        ('Sunil Gangopadhyay', 'VU University Amsterdam', '1978-04-09', 14, 'f', 1),
        ('Michael W. Merriam', 'University of Groningen', '1955-03-02', 17, 'f', null),
        ('Yahia Lababidi', 'Leiden University', '1976-03-02', 16, 'm', 4),
        ('Alison Anderson', 'Maastricht University', '1989-03-02', 17, 'f', null),
        ('Liu Kang', 'Radboud University Nijmegen', '1990-03-02', 11, 'f', 6),
        ('Nicolas Ederson', 'Utrecht University', '1985-03-02', 17, 'm', 1),
        ('Goitom Tekeste', 'University of Twente', '1980-03-02', 18, 'm', 4),
        ('Meles Zenawi', 'Maastricht University', '1978-03-02', 10, 'f', 6),
        ('Dawit Desta', 'Tilburg University', '1981-03-02', 9, 'm', null);`;

  connection.connect();

  execQuery(CREATE_AUTHORS_TABLE);
  execQuery(ADD_FK_MENTOR);
  execQuery(AUTHORS_TO_INSERT);

  connection.end();
}

seedDatabase();
