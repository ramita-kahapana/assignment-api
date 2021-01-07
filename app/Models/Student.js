'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Student extends Model {
    static get primaryKey() {
        return 'student_id'
    }
    university() {
        return this.belongsToMany('App/Models/University').pivotTable('university_students')
    }
   
}

module.exports = Student
