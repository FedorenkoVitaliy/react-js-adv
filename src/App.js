import React, {useState} from 'react';
import TodoList from "./Todo/TodoList";
import Context from "./context";

import './App.css';

function App() {
    let initialTodos = [
        {id: 1, completed: false, title: 'Купить хлеб'},
        {id: 2, completed: true, title: 'Купить масло'},
        {id: 3, completed: false, title: 'Купить молоко'},
    ];
    const [todos, setTodos] = useState(initialTodos);


    function toggleTodo(id) {
        setTodos(
            todos.map(todo => {
                if(todo.id === id) {
                    todo.completed = !todo.completed;
                }
                return todo;
            })
        )
    }

    function removeTodo(id) {
        setTodos(todos.filter(todo => todo.id !==id))
    }

    return (
        <Context.Provider value={{ removeTodo }}>
            <div className="wrapper">
                <h1>React Tutorial</h1>

                <TodoList todos={todos}
                          onToggle={toggleTodo}
                />
            </div>
        </Context.Provider>
    );
}

export default App;
