'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Attribute extends Model {
    dimension() {
        return this.belongsTo('App/Models/Attribute')
    }
}

module.exports = Attribute
