import {Sequelize} from 'sequelize'
import access_permisions from './aaccess_permision'
import groups from './agroups'
import {initAssociations} from './associations'

export const sequelize = new Sequelize({
    dialect: 'mysql',
    database: 'mysql',
    username: 'root',
    password: 'eniyan007',
})

export const models = {
    aaccess_permision: access_permisions.initModel(sequelize),
    agroups: groups.initModel(sequelize),
}

initAssociations()

sequelize.sync({force: true})
.then(res=>{
    console.log("sequelize init success")
    populateTestData()
})
.catch((err)=>{
    console.log(err)
})

function populateTestData(){
    models.aaccess_permision.create({
        aid: 1,
        uid: 1,
        attribute_id: 1,
        comp_id: 1,
        access_type: '{}',
        conditions: '{}',
        created_by: 1,
        updated_by: 1
    })

    models.aaccess_permision.create({
        aid: 2,
        uid: 1,
        attribute_id: 2,
        comp_id: 1,
        access_type: '{}',
        conditions: '{}',
        created_by: 1,
        updated_by: 1
    })

    models.aaccess_permision.create({
        aid: 3,
        uid: 1,
        attribute_id: 3,
        comp_id: 1,
        access_type: '{}',
        conditions: '{}',
        created_by: 1,
        updated_by: 1
    })
    
    models.agroups.create({
        agid: 1,
        description: "Group one",
        status: 1,
        dflag: 0,
        comp_id: 1,
        uid: 1,
        aaccess_id: 1,
        aattribute_id: 1,
        created_by: 1,
        updated_by: 1,
    })
    
    models.agroups.create({
        agid: 2,
        description: "Group one",
        status: 1,
        dflag: 0,
        comp_id: 1,
        uid: 1,
        aaccess_id: 1,
        aattribute_id: 1,
        created_by: 1,
        updated_by: 1,
    })
    
    models.agroups.create({
        agid: 3,
        description: "Group one",
        status: 1,
        dflag: 0,
        comp_id: 1,
        uid: 1,
        aaccess_id: 2,
        aattribute_id: 1,
        created_by: 1,
        updated_by: 1,
    })
}


// models.aaccess_permision.findAll({
//     include: [models.agroups]
// })
// .then(res=>console.log(res))

// models.agroups.findAll({
//     include: [models.aaccess_permision]
// })
// .then(res=>console.log(res))
