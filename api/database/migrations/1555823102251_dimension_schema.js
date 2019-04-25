'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DimensionSchema extends Schema {
  up () {
    this.create('dimensions', (table) => {
      table.increments()
      table.timestamps()
      table.string('dimension')
    })
  }

  down () {
    this.drop('dimensions')
  }
}

module.exports = DimensionSchema
