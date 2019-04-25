'use strict'

/*
|--------------------------------------------------------------------------
| AttributeSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Attribute = use('App/Models/Attribute.js')

class AttributeSeeder {
  async run () {
      await Attribute.create({attribute: 'Prospective Student', dimension_id: 1})
      await Attribute.create({attribute: 'Alumni', dimension_id: 1})
      await Attribute.create({attribute: 'Professor', dimension_id: 1})
      await Attribute.create({attribute: 'Athletic Director', dimension_id: 1})
      await Attribute.create({attribute: 'United States', dimension_id: 2})
      await Attribute.create({attribute: 'College Transfer', dimension_id: 2})
      await Attribute.create({attribute: 'International', dimension_id: 2})
      await Attribute.create({attribute: 'Re-entry', dimension_id: 2})
      await Attribute.create({attribute: 'Undergraduate', dimension_id: 3})
      await Attribute.create({attribute: 'Graduate', dimension_id: 3})
      await Attribute.create({attribute: 'Non-Degree', dimension_id: 3})
      await Attribute.create({attribute: 'Professional Schools', dimension_id: 4})
      await Attribute.create({attribute: 'Student life and sports', dimension_id: 4})
      await Attribute.create({attribute: 'Admissions', dimension_id: 4})
      await Attribute.create({attribute: 'Academics', dimension_id: 4})
      await Attribute.create({attribute: 'Campus', dimension_id: 4})
      await Attribute.create({attribute: 'Research', dimension_id: 4})

  
  }
}

module.exports = AttributeSeeder
