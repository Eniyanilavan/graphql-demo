import {models} from '../sequelize/index'

export default {

    access_permission: async (root, args, context, info)=>{
        return models.aaccess_permision.findAll({
            include:[models.agroups]
        })
    },
    AccessPermission: (root, args, context, info)=>{
        console.log(root)
    }

}