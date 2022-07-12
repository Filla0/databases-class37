const insert_into_account = [
  "USE transaction",
  "INSERT INTO account VALUES(101,50000),(102,13400),(103,765656),(104,5657378.42)",
];

const transfer = [
  "Use transaction",
  "START TRANSACTION",
  "UPDATE account SET balance=balance-1000 WHERE account_number=101",
  "UPDATE account SET balance=balance+1000 WHERE account_number=102",
  "INSERT INTO account_changes(account_number, amount, changed_date, remark) VALUES(101,3000,now(),'house rent'),(102,4000,now(),'house rent')",
];

export { insert_into_account, transfer };
