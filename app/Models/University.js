'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class University extends Model {
    static get primaryKey() {
        return 'university_id'
    }
    students() {
        return this.belongsToMany('App/Models/Student').pivotTable('university_students')
    }
}

module.exports = University
