import { useState } from "react";
import "./App.css";

function App() {
  const [click, setClick] = useState(0);
  function mechanicClick() {
    setClick((prev) => {
      return prev + 1;
    });
  }
  const users = [
    {
      name: "Arseniy",
      age: 14,
      address: {},
    },
  ];

  function userSelector() {
    try {
      return users?.[0]?.name || "";
    } catch (error) {
      return "";
    }
  }

  function getAge() {
    try {
      return users?.[0]?.age || "";
    } catch (error) {
      return "";
    }
  }

  const userName = userSelector();
  const userAge = getAge();

  return (
    <div className="app">
      <h1>Привет, {userName || "Гость"} 👋</h1>
      <p>Вам скорее всего ~ {userAge || "Столько-то"} лет. </p>
      <p>Интересный React...</p>
      <button className="myButton" onClick={mechanicClick}>
        Нажал — {click || "Не нажал(-а)..."} раз.
      </button>
    </div>
  );
}

export default App;
