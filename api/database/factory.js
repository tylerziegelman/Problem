'use strict'

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
 const Factory = use('Factory')

Factory.blueprint('App/Models/Dimension', (faker,data) => {
    return {
      dimension: data.dimension
    }
  })

  Factory.blueprint('App/Models/Attribute', (faker,data) => {
    return {
      attribute: data.attribute,
      dimension_id: data.dimension_id
    }
  })
  
 