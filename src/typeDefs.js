import { gql } from "apollo-server-express";

export const typeDefs = gql `
    type Query {
        hello: String!
        users: [User!]!
    }
    type User {
        id: ID!
        name: String!
        password: String!
    }
    type Mutation {
        createUser(name: String!, password: String!): User!
    }
`;
