'use strict'
const Dimension = use('App/Models/Dimension')
const Attribute = use('App/Models/Attribute')
class MenuController {
    async getAllData({ request, auth, response }) {
        //const dim = await Dimension.query().with('attributes').fetch()
        // const audience = await Attribute.query().where('dimension_id', 1).fetch()
        const dim = await Dimension.query().with('attributes').fetch()
        const attr = await Attribute.query().where('dimension_id', 1).fetch()
        
        response.json({
          dimensions: dim,
          
          
        });
      }
    
}

module.exports = MenuController
