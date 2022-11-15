const knex = require('knex')(require('./knexfile'))

module.exports = {
    studentList () {
        console.log(`retrieving students`);
        return knex('students').select('*')
    }
}
