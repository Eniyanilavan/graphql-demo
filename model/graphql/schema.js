import { buildSchema } from 'graphql'

const schema = `

type Query{
    access_permission: [AccessPermission]
}

type AccessPermission{
    aid: Int!
    uid: Int!
    attribute_id: Int!
    comp_id: Int!
    access_type: String!
    conditions: String!
    created_by: Int!
    updated_by: Int!
    groups: [AGroup!]
}

type AGroup{
    agid: Int!
    description: String!
    status: Int!
    dflag: Int!
    comp_id: Int!
    uid: Int!
    aaccess_id: Int!
    aattribute_id: Int!
    created_by: Int!
    updated_by: Int!
}

`

export default buildSchema(schema)