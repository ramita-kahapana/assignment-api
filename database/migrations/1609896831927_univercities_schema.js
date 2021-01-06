'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UnivercitiesSchema extends Schema {
  up() {
    this.create('univercities', (table) => {
      table.increments("univercity_id").notNullable().unique()
      table.string("univercity_name").notNullable()
      table.timestamps()
    })
  }

  down() {
    this.drop('univercities')
  }
}

module.exports = UnivercitiesSchema
