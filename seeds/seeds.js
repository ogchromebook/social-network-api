const mongoose = require('mongoose');
const User = require('../models/User');
const Thought = require('../models/Thought');

const users = [
  { username: 'user1', email: 'user1@example.com', friends: [] },
  { username: 'user2', email: 'user2@example.com', friends: [] },
  { username: 'user3', email: 'user3@example.com', friends: [] },
];

const thoughts = [
  {
    thoughtText: 'This is my first thought!',
    username: 'user1',
    reactions: [
      {
        reactionId: new mongoose.Types.ObjectId(),
        reactionBody: 'Great thought!',
        username: 'user2',
        createdAt: new Date(),
      },
      {
        reactionId: new mongoose.Types.ObjectId(),
        reactionBody: 'I agree!',
        username: 'user3',
        createdAt: new Date(),
      },
    ],
  },
  {
    thoughtText: 'I love coding!',
    username: 'user2',
    reactions: [
      {
        reactionId: new mongoose.Types.ObjectId(),
        reactionBody: 'Coding is awesome!',
        username: 'user1',
        createdAt: new Date(),
      },
    ],
  },
  {
    thoughtText: 'MongoDB is great!',
    username: 'user3',
    reactions: [
      {
        reactionId: new mongoose.Types.ObjectId(),
        reactionBody: 'Absolutely!',
        username: 'user1',
        createdAt: new Date(),
      },
      {
        reactionId: new mongoose.Types.ObjectId(),
        reactionBody: 'Totally agree!',
        username: 'user2',
        createdAt: new Date(),
      },
    ],
  },
];

const seedDatabase = async () => {
  await mongoose.connect('mongodb://localhost:27017/socialnetworkDB'); // Ensure the name matches the existing DB

  await User.deleteMany({});
  await Thought.deleteMany({});

  const createdUsers = await User.insertMany(users);

  // Establish friendships
  createdUsers[0].friends.push(createdUsers[1]._id, createdUsers[2]._id); // user1 friends with user2 and user3
  createdUsers[1].friends.push(createdUsers[0]._id, createdUsers[2]._id); // user2 friends with user1 and user3
  createdUsers[2].friends.push(createdUsers[0]._id, createdUsers[1]._id); // user3 friends with user1 and user2

  await User.bulkSave(createdUsers); // Save updated users with friends

  await Thought.insertMany(thoughts);

  console.log('Database seeded with users, thoughts, reactions, and friendships!');
  mongoose.connection.close();
};

seedDatabase();