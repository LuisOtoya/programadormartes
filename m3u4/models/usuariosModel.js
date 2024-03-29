var pool = require('./bd');
var md5 = require('md5');

async function getUserAndPassword(user, password) {
    try {
        var query = 'select * form usuarios where usuarios = ? and passsword = ? limit 1';
        var rows = await pool.query(query, [user, md5 (password)]);
        return rows[0];
    } catch (error) {
        console.log(error)
    }
}

module.exports = { getUserAndPassword }