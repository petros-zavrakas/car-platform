This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Car-Market Project

React, React Hooks, Redux, Styled Component, graphQL, Jest, Enzyme

## Description
This project is a supposed cart platform of used cars. The project is focused in the car detailes page where as a admin you can edit the information of a specific car. 

There are no authentication and authorization features, we suppose user is already logged in and has admin role. 

Specificaly the user can change the Physical Status, Legal Status and Selling Status of a car. Furthermore user can use the 'Add Aditional Information' form to add or change additional information to the car as: Make, Model, Trim, and Engine Type. Make, Model and Trim are depending on each other - Model can’t be selected if Make is not selected, and Trim can’t be selected if Make and Model is not selected.

Appart from the information, you can add different Tasks to the car like 'Add Document', 'Car Wash', 'Add payment details', by clicking the "+" (plus) button at the bottom right corner. Each task can be selected as completed. 

