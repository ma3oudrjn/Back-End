const express=require('express')
const route=express.Router();
const services=require('../services/render');
const { UPDATE } = require('sequelize/types/query-types');

/**
 * @description root road
 * @method get /
 * 
 */

   route.get('/',services.homeRoutes)
    route.app.get('/dd-user'.services.add_user)
    
        route.app.get('/update-user'.services.update_user)
    
            
    module.exports=route