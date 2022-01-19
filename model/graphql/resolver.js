import {models} from '../sequelize/index'

export default {

    access_permission: async (root, args, context, info)=>{
        console.log(root)
        return models.aaccess_permision.findAll({
            where: root,
            include:[models.agroups]
        })
    },
    AccessPermission: (root, args, context, info)=>{
        console.log(root)
    }

}