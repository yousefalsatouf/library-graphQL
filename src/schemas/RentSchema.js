import { gql } from 'apollo-server';

export default gql`
    type Rent {
        id: ID!
        book: Book!
        author: User!
        startDate: Date
        endDate: Date
    }

    extend type Query {
        rentBook(id: ID!): RentBook!
        listRentBook: [RentBook!]!
    }

    extend type Mutation {
        createRentBook(book: ID!): RentBook!
        updateRentBook(id: ID!): RentBook!
        deleteRentBook(id: ID!): RentBook
    }
`;
