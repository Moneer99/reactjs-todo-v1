import React, { Component } from "react";
import Header from "./component/layout/Header";
import Todos from "./component/Todos";
import Footer from "./component/layout/Footer";
import "./App.css";

class App extends Component {
  state = {
    todos: [
      {
        id: Math.floor(Math.random() * 100) + 1,
        title: "Meeting with boss",
        completed: false,
      },
      {
        id: Math.floor(Math.random() * 100) + 1,
        title: "Take out the trash",
        completed: false,
      },
      {
        id: Math.floor(Math.random() * 100) + 1,
        title: "Pick up kids from school",
        completed: false,
      },
    ],
  };

  render() {
    return (
      <>
        <Header />
        <Todos />
        <Footer />
      </>
    );
  }
}

export default App;
