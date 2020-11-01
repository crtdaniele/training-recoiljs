import React, { Fragment } from 'react';
import styles from './Todos.module.scss'
import { todosState } from '../../store/atom/todos.atom'
import { fetchGetTodos } from '../../store/selector/todos.selector'
import useList from '../../hooks/useList'

const Todos = () => {
    const { data } = useList(fetchGetTodos, todosState);

    if (data === null) {
        return <Fragment></Fragment>;
    }

    return (
        <div className={styles.todos}>
            {data.map(item => (
                <div className={styles.todos__item} key={item.id}>
                    <p className={item.completed ? styles["todos__item--completed"] : ""}>{item.title}</p>
                </div>
            ))}
        </div>
    );
}

export default Todos;