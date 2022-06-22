import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
uri: "https://api-sa-east-1.graphcms.com/v2/cl4ng6j1e03h601z007e6di37/master",
cache: new InMemoryCache()
})