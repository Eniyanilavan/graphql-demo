import {models} from './index'

export function initAssociations(){

    models.aaccess_permision.hasMany(models.agroups, {
        foreignKey: "aaccess_id",
        sourceKey: "aid",
    })

    models.agroups.belongsTo(models.aaccess_permision, {
        foreignKey: 'aaccess_id',
        targetKey: 'aid'
    })

}
