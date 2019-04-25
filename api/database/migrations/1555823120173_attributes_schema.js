'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AttributesSchema extends Schema {
  up () {
    this.create('attributes', (table) => {
      table.increments()
      table.timestamps()
      table.string('attribute')
      table.integer('dimension_id').unsigned().references('id').inTable('dimensions')
    })
  }

  down () {
    this.drop('attributes')
  }
}

module.exports = AttributesSchema
