conn.connect();
getPopulation("country", '" or ""="', '" or ""="', cb);
// This function will call a query like this : SELECT Population FROM country WHERE Name = '' or ''='' and code = '' or ''=''
// what happens here is when we add a ( " ) in our code it gives access to write our own query after it, in this case we added ''='' which will always return true and print all results
// we can add other statmes that return true such as pass or 1=1 and it will always return all population records because in our condition we specified a condition that returns true which means everything

getPopulation("country", "Netherlands; SELECT * FROM country; --", "", cb);
// In this example we fetch all records by ending the first query by adding (;) and then we can write any query, here we fetched all data, we can all drop the whole table
// and after we are done we add "--" to let SQL ignore the rest of the original query
conn.end();

// Rewrite the function to prevent Injection
// we will use prepared statements to treat certain part of queries only as a string, we use place holders as ?, and then we add an array with values for each placeholder respectively
// in this case in case of injection my sql will treat the part after the injection as a simple string
function getPopulation(Country, name, code, cb) {
  conn.query(
    `SELECT Population FROM ? WHERE Name = ? and code = ?`,
    [Country, name, code],
    function (err, result) {
      if (err) cb(err);
      if (result.length == 0) cb(new Error("Not found"));
      cb(null, result[0].name);
    }
  );
}
