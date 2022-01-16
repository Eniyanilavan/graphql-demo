import express from 'express'
import './model/sequelize/index'
import graphqlHTTP from './model/graphql/index'

const app = express()

app.use('/graphql', graphqlHTTP);

app.listen(3000, ()=>{
    console.log("running in 3000")
})

