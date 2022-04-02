import React from "react";

const TodoItem = ({task}) => {
    // const createdTime = format(task.createdAt, "H:mm, dd/MM/YYYY")
    // const updatedTime = format(task.updatedAt, "H:mm, dd/MM/YYYY")

    return (
        <tr>
            <td>{task.project}</td>
            <td>{task.author}</td>
            <td>{task.createdAt}</td>
            <td>{task.updatedAt}</td>
            <td>{task.isActive}</td>
        </tr>
    );
};

const TodoList = ({tasks}) => {
    return (
        <div className="container">
            <table className="table table-striped">
                <thead>
                <th>Проект</th>
                <th>Автор</th>
                <th>Время создания</th>
                <th>Последнее обновление</th>
                <th>Активна</th>
                </thead>
                <tbody>
                {tasks.map((task) => <TodoItem task={task}/>)}
                </tbody>
            </table>
        </div>
    );
};

export default TodoList;
