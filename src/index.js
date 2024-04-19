import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
const person = [{
  name: "Dominic Toretto",
  age: 40,
  car: {
    name: "Charger"
  },
  likes: ["Birds", "Animals", "Dinosaurs"]
}, {
  name: "Carl Sagan",
  age: 62,
  car: {
    name: "Spaceship"
  },
  likes: ["Stars", "Galaxies", "Astronomy"]
}];
root.render(
  <React.StrictMode>
    <App name={person[0].name} age={person[0].age} car={person[0].car} likes={person[0].likes} />
    <App name={person[1].name} age={person[1].age} car={person[1].car} likes={person[1].likes} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
