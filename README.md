# NutriGoalTracker - README

## Introduction

NutriGoalTracker is a web application designed to help users take control of their nutrition and fitness goals. It provides personalized daily caloric intake and macronutrient recommendations tailored to each user's unique fitness objectives. The app allows users to determine their daily caloric intake based on their goals and track their meals, empowering them to achieve a healthier and fitter lifestyle.

## Technologies Used

- **React**: NutriGoalTracker is built using React

- **Redux Toolkit**: Redux Toolkit is used for state management in NutriGoalTracker. 
- **React Router**: The application utilizes React Router to handle client-side routing. T
- **axios**: Axios is used for making HTTP requests to the external API that fetches nutrition data for entered food items.
- **Vite**: Vite is used as the build tool for NutriGoalTracker. 
- **HTML**
- **CSS**

## Approach Taken

The NutriGoalTracker app follows a client-side approach, utilizing React for building the user interface and Redux Toolkit for state management. The user is greeted with a welcome message and can proceed to the Daily Calorie Calculator or Macros Breakdown sections to set their fitness goals.

The application allows users to enter food items in the Food Entry Form and fetches nutrition data from an external API using axios. The fetched data is then added to the Food Log, and the user's total calories and macronutrients are updated accordingly.

The app is designed to be user-friendly and aims to provide a seamless experience for users to track their nutrition intake and progress toward their fitness goals.

## Live Site

The live site for NutriGoalTracker can be accessed at [https://your-live-site-url.com](https://your-live-site-url.com).

## Usage Instructions

1. **Installation**: Clone the GitHub repository and navigate to the project folder. Run `npm install` to install the required dependencies.

2. **Running the App**: After installation, run `npm run dev` to start the development server. The app will be accessible at `http://localhost:3000` by default.

3. **Setting Fitness Goals**: Upon accessing the app, read the welcome message and click the "Begin Your Fitness Journey!" button to proceed to the Daily Calorie Calculator or Macros Breakdown section.

4. **Food Entry**: In the Food Entry Form, users can enter the name of the food item they consumed and click the "Add to Log" button to fetch its nutrition data and add it to the Food Log.

5. **Food Log**: The Food Log displays the list of entered food items along with their respective calorie and macronutrient values.

6. **Removing Items**: If users want to remove a food item from the log, they can click the "Remove" button next to the respective entry.

## Conclusion

NutriGoalTracker aims to empower users to achieve their fitness goals by providing personalized nutrition guidance and tracking tools. It utilizes modern technologies like React and Redux Toolkit to create a user-friendly and efficient web application. By following the usage instructions and exploring the code, you can learn more about how the app works and make any necessary improvements based on the identified unsolved problems.

Thank you for taking an interest in NutriGoalTracker! If you have any questions or feedback, feel free to reach out to me.
