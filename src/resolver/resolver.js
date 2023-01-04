const graphqlResolver = {
  // Read
  Query: {
    users: async (_, args, { database }) => await database.getUsers(),
    user: async (_, { id }, { database }) => await database.getUser(id),
    signin: async (_, { email, password }, { database }) =>
      await database.signin(email, password),
    posts: async (_, args, { database }) => await database.getPosts(),
    post: async (_, { id }, { database }) => await database.getPost(id),
  },

  Post: {
    author: async (parent, args, { database }) =>
      await database.getUser(parent.authorId),
  },
  User: {
    posts: async (parent, args, { database }) => {
      return await database.getPostByAuthor(parent._id);
    },
  },

  // Create
  Mutation: {
    signup: async (_, { username, email, password }, { database }) =>
      await database.signup(username, email, password),
    createPost: async (parent, { title, content, authorId }, { database }) =>
      await database.createPost(title, content, authorId),
  },
};

module.exports = graphqlResolver;
