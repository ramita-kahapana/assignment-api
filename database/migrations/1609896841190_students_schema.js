'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class StudentsSchema extends Schema {
  up() {
    this.create('students', (table) => {
      table.increments("student_id").notNullable().unique()
      table.string("first_name").notNullable()
      table.string("last_name").notNullable()
      table.string("student_class").notNullable()
      table.integer("university_id").unsigned()
      table.foreign("university_id")
        .references('universities.university_id')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
      table.timestamps()
    })
  }

  down() {
    this.drop('students')
  }
}

module.exports = StudentsSchema
