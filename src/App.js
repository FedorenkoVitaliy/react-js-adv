import React, {useState} from 'react';
import TodoList from "./Todo/TodoList";

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

    return (
        <div className="wrapper">
            <h1>React Tutorial</h1>

            <TodoList todos={todos}
                      onToggle={toggleTodo}
            />
        </div>
    );
}

export default App;
