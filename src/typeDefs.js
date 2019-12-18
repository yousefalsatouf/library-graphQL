import { gql } from "apollo-server-express";

export const typeDefs = gql `
    type Query {
        hello: String!
        users: [User!]!
        books: [Book!]!
        comments: [Comment!]!
    }
    type User
    {
        id: ID!
        firstName: String!
        lastName: String!
        email: String!
        password: String!
        books: Book!
        ratings: Rating!
    }
    type Book 
    {
        id: ID!
    }
    type Comment
    {
        id: ID!
    }
    
`;


/*
*
* type Mutation {
        createUser(name: String!, password: String!): User!
    }
*
* */