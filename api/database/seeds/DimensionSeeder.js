'use strict'

/*
|--------------------------------------------------------------------------
| DimensionSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Dimension = use('App/Models/Dimension')
class DimensionSeeder {
  async run () {
    await Dimension.create({dimension: "Audience"})
    await Dimension.create({dimension: "Location"})
    await Dimension.create({dimension: "Program"})
    await Dimension.create({dimension: "Issue"})
  }
}

module.exports = DimensionSeeder
