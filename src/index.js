require('dotenv').config();

import { ApolloServer, gql } from "apollo-server-express";
import express from "express";
import mongoose from "mongoose";
import { resolvers } from "./resolvers";
import { typeDefs } from "./typeDefs";

const { APP_PORT, PORT } = process.env;
mongoose.set("debug", true);

const startServer = async() => {
    const app = express();
    const url = process.env.MONGO_URI;
    const server = new ApolloServer({
        typeDefs,
        resolvers
    });

    server.applyMiddleware({
        app
    });

    await mongoose.connect(url, {
        useNewUrlParser: true
    });

    app.listen({ port: 4000 }, () => console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`) );
};

startServer();