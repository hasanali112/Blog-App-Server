export const typeDefs = `#graphql
  type Query{
   me: User
   post: [Post]
  }

  type Mutation{
    signup(
    name: String!,
    email: String!,
    password: String!,
    ): User
}


   type Post{
         id: ID!
         title: String!
         content: String!
         author: User
         createdAt: String!
         published: Boolean!
   }

   type User{
        id: ID!
        name: String!
        email: String!
        createdAt: String!
        posts: [Post]
   }

  type Profile{
        id: ID!
        bio: String!
        createdAt: String!
        user: User!
    }
`;
