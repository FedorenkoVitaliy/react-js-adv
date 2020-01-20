import React, {useState, useEffect} from 'react';
import TodoList from "./Todo/TodoList";
import Context from "./context";
import Loader from "./Loader";

import './App.css';
import AddTodo from "./Todo/AddTodo";

function App() {
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
            .then(response => response.json())
            .then(todos => {
                setTimeout(() => {
                    setTodos(todos);
                    setLoading(false);
                }, 2000);

            })
            .catch(e => {
                console.log('Ошибочка');
                //setLoading(true);
            })
    }, []);

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

    function addTodo(title) {
        setTodos(
            todos.concat([{
                title,
                id: Date.now,
                completed: false
            }])
        )
    }

    return (
        <Context.Provider value={{ removeTodo }}>
            <div className="wrapper">
                <h1>React Tutorial</h1>

                <AddTodo onCreate={addTodo}/>
                { loading && <Loader/> }
                { todos.length ? (
                    <TodoList todos={todos}
                              onToggle={toggleTodo}
                    />
                ) : (
                    loading?
                        null:
                        <p>No Todos</p>
                )

                }
            </div>
        </Context.Provider>
    );
}

export default App;
