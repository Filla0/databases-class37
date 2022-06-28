let mysql = require("mysql");

let connection = mysql.createConnection({
  host: "localhost",
  user: "hyfuser",
  password: "hyfpassword",
  database: "meetup",
});

const inviteData = [
  {
    Invitee_Name: "Yared",
    Invited_By: "Filimon",
  },
  {
    Invitee_Name: "David",
    Invited_By: "Filimon",
  },
  {
    Invitee_Name: "Henry",
    Invited_By: "Filimon",
  },
];

const roomData = [
  {
    Room_Name: "Room 1",
    Floor_Number: 1,
  },
  {
    Room_Name: "Room 2",
    Floor_Number: 1,
  },
  {
    Room_Name: "Room 3",
    Floor_Number: 1,
  },
];

const meetingData = [
  {
    Meeting_title: "Meeting 1",
    Starting_Time: "10:00:00",
    Ending_Time: "12:00:00",
    Room_no: 1,
  },
  {
    Meeting_title: "Meeting 2",
    Starting_Time: "10:00:00",
    Ending_Time: "12:00:00",
    Room_no: 2,
  },
  {
    Meeting_title: "Meeting 3",
    Starting_Time: "10:00:00",
    Ending_Time: "12:00:00",
    Room_no: 3,
  },
];

connection.connect();

const drop_query = "DROP TABLE IF EXISTS invitees, rooms, meetings";
const create_invitee_table_query =
  "CREATE TABLE invitees (Invitee_no INT UNIQUE AUTO_INCREMENT, Invitee_Name VARCHAR(100), Invited_By VARCHAR(100), PRIMARY KEY (Invitee_no))";
const create_room_table_query =
  "CREATE TABLE rooms (Room_no INT UNIQUE AUTO_INCREMENT, Room_Name VARCHAR(100), Floor_Number INT, PRIMARY KEY (Room_no))";
const create_meeting_table_query =
  "CREATE TABLE meetings (Meeting_no INT UNIQUE AUTO_INCREMENT, Meeting_title VARCHAR(100), Starting_Time VARCHAR(100), Ending_Time VARCHAR(100), Room_no INT, PRIMARY KEY (Meeting_no))";

const dropTables = () => {
  connection.query(drop_query, (error, result, fields) => {
    error ? console.log(error) : console.log("Table dropped");
  });
};

const createTable = () => {
  connection.query(create_invitee_table_query, (err, result) => {
    err ? console.log(err) : console.log("Invitee table created");
  });
  connection.query(create_room_table_query, (err, result) => {
    err ? console.log(err) : console.log("Room table created");
  });
  connection.query(create_meeting_table_query, (err, result) => {
    err ? console.log(err) : console.log("Meeting table created");
  });
};

const insertDataIntoInviteeTable = () => {
  inviteData.forEach((data) => {
    connection.query("INSERT INTO invitees SET ?", data, (err, result) => {
      err && console.log(err);
    });
  });
  console.log("Invitee table populated");
};

const insertDataIntoRoomTable = () => {
  roomData.forEach((data) => {
    connection.query("INSERT INTO rooms SET ?", data, (err, result) => {
      err && console.log(err);
    });
  });
  console.log("Room table populated");
};

const insertDataIntoMeetingTable = () => {
  meetingData.forEach((data) => {
    connection.query("INSERT INTO meetings SET ?", data, (err, result) => {
      err && console.log(err);
    });
  });
  console.log("Meeting table populated");
};

dropTables();
createTable();
insertDataIntoInviteeTable();
insertDataIntoRoomTable();
insertDataIntoMeetingTable();

connection.end();
