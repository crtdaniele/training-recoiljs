import React, { Fragment } from 'react';
import { useRecoilState } from 'recoil'
import { todosState } from '../../store/atom/todos.atom'

const Home = () => {

    const [todosList] = useRecoilState(todosState);

    return (
        <Fragment>
            {console.log(todosList)}
            <div>{todosList && (`La mia lista Todos contiene: ${todosList.length}`)}</div>
        </Fragment>
    )
}

export default Home