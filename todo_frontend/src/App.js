import React from "react";
import "./App.css";
import AddTodo from "./AddTodo";

// PUBLIC_INTERFACE
function App() {
  // For integration: we just show the AddTodo component
  return (
    <div className="App">
      <AddTodo />
    </div>
  );
}

export default App;
