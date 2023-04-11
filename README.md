# React Project Setup with Tailwind CSS, Firebase Auth, Yarn, Vite JS, and Routing

This is a boilerplate project setup for building a React application with Tailwind CSS for styling, Firebase Auth for user authentication, Yarn as a package manager, Vite JS as a fast build tool, and React Router for page routing. 

## Getting Started

### Prerequisites
- Node.js and npm (or yarn) installed on your local machine.

### Installation
1. Clone this repository by running `git clone https://github.com/<your-username>/<your-project-name>.git` in your terminal or by downloading the ZIP file.
2. Navigate to the project directory by running `cd <your-project-name>`
3. Install dependencies by running `yarn install` or `npm install` in your terminal.
4. Create a Firebase project and enable Firebase Authentication. You can follow the instructions provided by Firebase [here](https://firebase.google.com/docs/auth/web/start).
5. Create a `firebase store` file at the root of your project directory and add the Firebase configuration details.
6. Run `yarn dev` or `npm run dev` to start the development server.
7. Open `http://localhost:3000` in your browser to view the application.


## Available Scripts

In the project directory, you can run:

### `yarn dev` or `npm run dev`

Runs the app in development mode with hot reloading at [http://localhost:3000](http://localhost:3000).\
Open your browser to see the app.

### `yarn build` or `npm run build`

Builds the app for production to the `dist` folder.\
It correctly bundles React and optimizes the build for the best performance.

### `yarn serve` or `npm run serve`

Serves the production build of the app at [http://localhost:5000](http://localhost:5000).

## Firebase Configuration

The Firebase configuration details should be stored in the `firebase store` file at the root of your project directory. You can find the configuration details for your Firebase project in the Firebase console under Project settings > General > Your apps > Firebase SDK snippet.

## Contributing

Contributions are always welcome! Please make sure to create an issue before submitting a pull request.
