const mysql = require("promise-mysql");

let connection = null;

mysql.createConnection({
    host: 'sql7.freesqldatabase.com',
    user: 'sql7307338',
    password: 'FWTzJQwYUf',
    database: 'sql7307338'
}).then(c => {
    connection = c
}).then(() => {
    connection.connect((err) => {
        if (err) {
            console.log(err.message)
        } else {
            console.log('Success!')
        }
    });
});

const getTokens = (token) => {
    let query = "SELECT * FROM `Tokens` WHERE Token=?";
    return connection.query(query, [token]);
};

const getUsersOnId = () => {
    return connection.query('SELECT * FROM `Users` ORDER BY id ASC');
};

const getUsersOnName = (login) => {
    return connection.query("SELECT * FROM `Users` WHERE name=?", [login]);
};

const setToken = (token, userId, expiredAt) => {
    let tokenQuery = "INSERT `Tokens` (Token,UserId,ExpiredAt) VALUES (?, ?, ?)";
    return connection.query(tokenQuery, [token, userId, expiredAt])
};


exports.getTokens = getTokens;
exports.getUsersOnId = getUsersOnId;
exports.getUsersOnName = getUsersOnName;
exports.setToken = setToken;