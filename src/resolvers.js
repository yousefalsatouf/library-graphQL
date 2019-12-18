import { User } from "./models/User";

export const resolvers = {
    Query: {
        hello: () => "hello",
        users: () => User.find(),
    },
    Mutation: {
        createUser: async (_, {name, password}) => {
            const user = new User({name, password});
            await user.save();
            return user;
         },
    },
};