import { ApolloServer, gql } from "apollo-server-express";
import express from "express";
import mongoose from "mongoose";
import { resolvers } from "./resolvers";
import { typeDefs } from "./typeDefs";

const startServer = async() => {
    const app = express();
    let url = "mongodb+srv://yousef:yousef@cluster0-nvddo.mongodb.net/test";
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