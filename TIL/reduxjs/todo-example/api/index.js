import { v4 } from "node-uuid";

const fakeDatabase = {
  todos: [
    {
      id: v4(),
      text: "hey",
      complete: true
    },
    {
      id: v4(),
      text: "react",
      complete: true
    },
    {
      id: v4(),
      text: "redux",
      complete: false
    },
    {
      id: v4(),
      text: "redux-saga",
      complete: false
    }
  ]
};

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

export const fetchTodos = filter =>
  delay(500).then(() => {
    switch (filter) {
      case "all":
        return fakeDatabase.todos;
      case "active":
        return fakeDatabase.todos.filter(t => !t.complete);
      case "completed":
        return fakeDatabase.todos.filter(t => t.complete);
      default:
        throw new Error(`Unknown filter: ${filter}`);
    }
  });
