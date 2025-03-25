# Blog App

A simple blog application built using React that allows users to create and delete blogs.

## Features
- Create new blog posts
- Delete existing blog posts
- Uses a JSON server as a fake backend to store and retrieve data

## Installation & Setup

### 1. Install Dependencies
Run the following command in the project directory to install all necessary packages:
```sh
npm install
```

### 2. Start the React Application
To run the frontend, execute:
```sh
npm start
```
This will start the React app in the browser.

### 3. Set Up JSON Server
The app uses a JSON server to store and manage blog data. Follow these steps to set it up:

#### a) Install JSON Server (if not already installed)
```sh
npm install -g json-server
```

#### b) Start the JSON Server
```sh
npx json-server --watch Data/db.json --port 8000
```

#### c) Access JSON Server Data
Once the server is running, visit the following URL to see the stored blog data:
```
http://localhost:8000/blogs
```
Now you can post, fetch, and manage blog data using this fake backend.

## Usage
- Open the application in the browser.
- Add a new blog post.
- View and delete blog posts as needed.

## Technologies Used
- **React.js** - Frontend framework
- **JSON Server** - Fake REST API for managing blog data

---
Enjoy blogging! 🚀

