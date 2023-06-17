# Lit Sandbox

Welcome to the Lit Sandbox! This project utilizes Lit Element components within a React app.

## Installation

1. Clone the repository:
2. Navigate to the project directory:

   ```shell
   cd lit-sandbox
   ```

3. Install dependencies:

   ```shell
   npm install
   ```

## Usage

1. Run the project:

   ```shell
   npm start
   ```

   This command will start the development server. It will not open the browser automatically, but normally it is served on localhost:8000.

2. Explore Lit Element Components:

   In the `src/components/` folder, you can find a collection of Lit Element components that you can import and use in your React app. To import a new Lit Element component, follow the example in `App.jsx` file:

   ```jsx
   import React from 'react';
   import MyLitComponent from './components/MyLitComponent';

   function App() {
     return (
       <div>
         {/* Use Lit Element components */}
         <MyLitComponent></MyLitComponent>
       </div>
     );
   }

   export default App;
   ```

   Feel free to modify, and create new Lit Element components to enhance your app.

## Recommended IDE

We recommend using Visual Studio Code as the IDE for this project. It provides excellent support for web development and a wide range of useful extensions.

## Recommended Extension

To enhance the development experience with Lit HTML templates, we recommend installing the "lit-html" extension by Matt Bierner. You can find it in the Visual Studio Code Marketplace at the following link:

[https://marketplace.visualstudio.com/items?itemName=bierner.lit-html](https://marketplace.visualstudio.com/items?itemName=bierner.lit-html)

The "lit-html" extension provides syntax highlighting, IntelliSense, and other helpful features for working with Lit HTML templates.

Happy coding!
