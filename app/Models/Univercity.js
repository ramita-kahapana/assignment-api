'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Univercity extends Model {
    static get primaryKey() {
        return 'univercity_id'
    }
    students() {
        return this.hasMany('App/Models/Student')
    }
}

module.exports = Univercity
