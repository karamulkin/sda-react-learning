import React from "react";

export const ListItem () => {
    const (todos, setTodos) = React.useState ([]);

    React.useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos?_page=1')
        .then(response => response.json())
        .then(data => setTodos(data))
        .catch(error => console.log('Error fetching data:', error));
    }, []);
    return (
        <ul>
        {todos.map(todo => (
            <li key={todo.id}>{todo.title}</li>
        ))}
        </ul>
    );
};