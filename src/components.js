import React from 'react';


export function Todo(props) {
    const { todo } = props;
    if (todo.isDone) {
        return <strike>{todo.text}</strike>;
    } else {
        return <span>{todo.text}</span>
    }
}
// TODO lmk
export function TodoList(props) {
    const { todos, toggleTodo, addTodo } = props;

    const onSubmit = (event) => {
        const input = event.target;
        const text = input.value;
        const isEnterKey = (event.which == 13);
        const isLongEnough = text.length > 0;

        if (isEnterKey && isLongEnough) {
            input.value = '';
            addTodo(text);
        }
    };

    const toggleClick = id => event => toggleTodo(id);

    console.log('in todolist');
    return (
        <div className='todo'>
            <input type='text'
                className='todo__entry'
                placeholder='Add todo items'
                onKeyDown={onSubmit} />
            <ul className='todo__list'>
                {todos.map(t => (
                    <li key={t.get('id')}
                        className='todo__item'
                        onClick={toggleClick(t.get('id'))}>
                        <Todo todo={t.toJS()} />
                    </li>
                ))}
            </ul>
        </div>
    );
}
