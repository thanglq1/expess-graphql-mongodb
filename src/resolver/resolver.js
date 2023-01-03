const graphqlResolver = {
  authors: () => [
    {
      id: "1",
      username: "Admin",
      email: "admin@gmail.com",
    },
    {
      id: "2",
      username: "Thang",
      email: "thang@gmail.com",
    },
  ],
  author: (id) => ({
    id: "1",
    username: "Admin",
    email: "admin@gmail.com",
  }),
  posts: () => [
    {
      id: "10",
      title: "This is post 1",
      body: "This is body of post 1",
    },
    {
      id: "11",
      title: "This is post 2",
      body: "This is body of post 2",
    },
    {
      id: "12",
      title: "This is post 3",
      body: "This is body of post 3",
    },
  ],
};

module.exports = graphqlResolver;