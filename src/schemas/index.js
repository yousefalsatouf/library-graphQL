import userSchema from './UserSchema';
import rentSchema from './RentSchema';
import bookSchema from './BookSchema';
import commentSchema from './CommentSchema';
import { gql } from 'apollo-server';

const linkSchema = gql`
    type Query {
        _: Boolean
    }
    type Mutation {
        _: Boolean
    }
    scalar Date
`;

export default [
    linkSchema,
    userSchema,
    bookSchema,
    commentSchema,
    rentSchema
];
