import { User } from "./models/User";
import { Book } from "./models/Book";
import { Comment } from "./models/Comment";
import { CommentStatus } from "./models/CommentStatus";
import { Author } from "./models/Author";
import { Language } from "./models/Language";
import { Rating } from "./models/Rating";
import { ReturnDate } from "./models/ReturnDate";


export const resolvers = {
    Query: {
        hello: () => "hello",
        users: () => User.find(),
        books: () => Book.find(),
        comments: () => Comment.find(),
        commentsStatus: () => CommentStatus.find(),
        authors: () => Author.find(),
        languages: () => Language.find(),
        ratings: () => Rating.find(),
        //returnDates: () => ReturnDate.find(),
    },
   /*Mutation: {
        createUser: async (_, {name, password}) => {
            const user = new User({name, password});
            await user.save();
            return user;
         },
       /*
       updateUser: async (_, {name, password}) => {
           const user = new User({name, password});
           await user.save();
           return user;
       },

    },*/
};