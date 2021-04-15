export const data = {
  dialogs: [
    { id: 1, name: "Pasha" },
    { id: 2, name: "John" },
    { id: 3, name: "Mark" },
    { id: 4, name: "Alex" },
    { id: 5, name: "Robert" },
    { id: 6, name: "Sasha" },
  ],

  messages: [
    { id: 1, message: "Hey, Pasha, what`s up?" },
    { id: 2, message: "Hi, Anny! I`m okay, how about u?" },
    { id: 3, message: "I`m good, just start learning JavaScript:3" },
    { id: 4, message: "Wow it`s so cool! I could help you with it!" },
    { id: 5, message: "Yea, thanks:3 It will be great!" },
  ],

  posts: {
    data: [
      {
        id: 1,
        reply: "Reply",
        message: "Hey there! What`s up?",
        likesCount: 15,
      },
      {
        id: 2,
        reply: "Reply",
        message: "This is my first props:3",
        likesCount: 42,
      },
      {
        id: 3,
        reply: "Reply",
        message: "Let`s learn React together;)",
        likesCount: 30,
      },
      {
        id: 4,
        reply: "Reply",
        message: "Hey! Is there are someone who wants coffee?",
        likesCount: 23,
      },
    ],

    addPost: function (postMessage) {
      const newPost = {
        id: this.data.length + 1,
        message: postMessage,
        likesCount: 0,
        reply: "Reply",
      };
      this.data.push(newPost);
    },
  },
};
