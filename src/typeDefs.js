import { gql } from "apollo-server-express";

export const typeDefs = gql `
    type Query {
        hello: String!
        users: [User!]!
        books: [Book!]!
        authors: [Author!]
    }
    type User
    {
        id: ID!
        firstName: String!
        lastName: String!
        email: String!
        password: String!
        nBorrow: String!
        book: Book!
    }
    type Book 
    {
        id: ID!
        title: String!
        subtitle: String!
        editor: String!
        format: String!
        cover: String!
        copiesNumber: String!
        commentStatus: String!
        language: String!
        author: Author!
    }

    type Author
    {
        id: ID!
        firstName: String!
        lastName: String!
        email: String!
        gsm: String!
        address: String!
    }
    
`;