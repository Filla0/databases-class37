const create_tables = [
  "USE transaction",
  "CREATE TABLE IF NOT EXISTS account(account_number INT PRIMARY KEY, balance DOUBLE(12,2) DEFAULT 0)",
  "CREATE TABLE IF NOT EXISTS account_changes(change_number INT PRIMARY KEY AUTO_INCREMENT, account_number INT NOT NULL , amount DOUBLE(8,2) NOT NULL, changed_date DATETIME NOT NULL, remark VARCHAR(30) NOT NULL, FOREIGN KEY(account_number) REFERENCES account(account_number))",
];

export default create_tables;
