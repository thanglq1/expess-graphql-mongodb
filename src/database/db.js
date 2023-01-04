const User = require("../models/User");
const Post = require("../models/Post");

const bycrypt = require("bcryptjs");
const { GraphQLError } = require("graphql");

const db = {
  signup: async (username, email, password) => {
    const salt = bycrypt.genSaltSync(10);
    const hashPassword = bycrypt.hashSync(password, salt);
    const user = new User({ username, email, password: hashPassword });
    return await user.save();
  },
  signin: async (email, password) => {
    const user = await User.findOne({ email });
    if (!user) return new GraphQLError(`Not found user with email: ${email}`);
    const compare = await bycrypt.compare(password, user.password);
    if (compare) return user;
    return new GraphQLError(`Email or password invalid`);
  },
  getUsers: async () => await User.find(),
  getUser: async (userId) => await User.findById(userId),
  createPost: async (title, content, authorId) =>
    await new Post({ title, content, authorId }).save(),
  getPosts: async () => await Post.find(),
  getPost: async (postId) => await Post.findById(postId),
  getPostByAuthor: async (authorId) => await Post.find({ authorId }),
};

module.exports = db;
