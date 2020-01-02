import { User } from "./models/User";
import { Book } from "./models/Book";
import { Author } from "./models/Author";


export const resolvers = {
    Query: {
        hello: () => "hello",
        users: () => User.find(),
        books: () => Book.find(),
        authors: () => Author.find()
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