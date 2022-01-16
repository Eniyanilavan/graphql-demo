import { graphqlHTTP } from 'express-graphql';
import resolver from './resolver';
import schema from './schema';

export default graphqlHTTP({
    schema: schema,
    rootValue: resolver,
    graphiql: true
})

