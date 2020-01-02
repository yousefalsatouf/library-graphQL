import { gql } from "apollo-server-express";

export const typeDefs = gql `
    type Query {
        hello: String!
        users: [User!]!
        books: [Book!]!
        comments: [Comment!]!
        ratings: [Rating!]!
        authors: [Author!]!
        commentsStatus: [CommentStatus!]!
        languages: [Language!]!
        returnDate: [ReturnDate!]!
        
    }
    type User
    {
        id: ID!
        firstName: String!
        lastName: String!
        email: String!
        password: String!
        book: Book!
        ratings: Rating!
    }
    type Book 
    {
        id: ID!
        title: String!
        subtitle: String!
        editor: String!
        format: String!
        cover: String!
        copiesNber: String!
        authors: Author!
        languages: Language!
        users: User!
        ratings: Rating!
        returnDates: ReturnDate!
    }
    type Comment
    {
        id: ID!
        title: String!
        comment: String!
        commentsStatus: CommentStatus!
        books: Book!
        users: User!
        
    }
    type Rating
    {
        id: ID!
        rating: String!
    }
    type Author
    {
        id: ID!
        fistName: String!
        lastName: String!
        email: String!
        address: String!
        gsm: String!
    }
    type CommentStatus
    {
        id: ID!
        usefull: String!
        useless: String!
    }
    type Language
    {
        id: ID!
        language: String!
    }
    type ReturnDate
    {
        id: ID!
        beginDate: String!
        endDate: String!
    }
`;