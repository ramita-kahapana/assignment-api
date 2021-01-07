'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UniversityStudentSchema extends Schema {
  up() {
    this.create('university_students', (table) => {
      table.increments()
      table.integer("university_id").unsigned()
      table.integer("student_id").unsigned()
      table.foreign("university_id")
        .references('universities.university_id')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')

      table.foreign("student_id")
      .references('students.student_id')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')

      table.timestamps()
    })
  }

  down() {
    this.drop('university_students')
  }
}

module.exports = UniversityStudentSchema
