# Social Network API

## Description

The Social Network API is a RESTful API designed to facilitate social interactions among users, allowing them to create thoughts, react to them, and establish friendships. 

- **What was your motivation?** I wanted to create a platform that mimics social media interactions, providing a hands-on experience with building APIs and working with databases.
- **Why did you build this project?** I built this project to deepen my understanding of Node.js, Express, and MongoDB, and to explore how to manage user data and relationships in a social network context.
- **What problem does it solve?** This API allows developers to implement social features in their applications without having to build the backend from scratch.
- **What did you learn?** I learned about RESTful API design, data modeling with MongoDB, and how to handle asynchronous operations in Node.js.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/social-network-api.git
   ```
2. Navigate to the project directory:
   ```bash
   cd social-network-api
   ```
3. Install the required dependencies:
   ```bash
   npm install
   ```
4. Set up your MongoDB database (ensure MongoDB is running).
5. Seed the database (optional):
   ```bash
   npm run seed
   ```

## Usage

To start the server, run:

```bash
npm start
```

You can test the API endpoints using tools like Postman or Insomnia. Here are some example endpoints:

- **Create a user**: `POST /api/users`
- **Get all thoughts**: `GET /api/thoughts`
- **Add a reaction to a thought**: `POST /api/thoughts/:thoughtId/reactions`

![API Usage Screenshot](/assets/social-media.gif)

## Credits

- [Sam Kachergius](https://github.com/ogchromebook)

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Badges

![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)

## Features

- User registration and authentication
- Create, read, update, and delete thoughts
- Add reactions to thoughts
- Establish friendships between users

## How to Contribute

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Make your changes and commit them (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request.