'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UniversitiesSchema extends Schema {
  up() {
    this.create('universities', (table) => {
      table.increments("university_id").notNullable().unique()
      table.string("university_name").notNullable()
      table.timestamps()
    })
  }

  down() {
    this.drop('universities')
  }
}

module.exports = UniversitiesSchema
