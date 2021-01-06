'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Student extends Model {
    static get primaryKey() {
        return 'student_id'
    }
    univercites() {
        return this.belongsToMany('App/Models/Univercity')
    }
}

module.exports = Student
