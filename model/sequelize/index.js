import {Sequelize} from 'sequelize'
import access_permisions from './aaccess_permision'

export const sequilize = new Sequelize({
    dialect: 'mysql',
    database: 'mysql',
    username: 'root',
    password: 'eniyan007'
})

export const models = {
    access_permision: access_permisions.initModel(sequilize),
}

sequilize.sync()
.then(res=>{
    console.log("sequelize init success")
})
.catch((err)=>{
    console.log(err)
})