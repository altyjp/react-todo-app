import React, { useState } from 'react'

const TodoInput = (props) => {

    const [inputVal, setInputVal] = useState('');

    const handleClick = () => {
        props.addTodo(inputVal);
    }

    const handleChangeVal = (e) => {
        setInputVal(e.target.value);
    }

    return <>
        <input placeholder='input name' value={inputVal} onChange={handleChangeVal}/>
        <button onClick={handleClick}>submit</button>
    </>
}

export default TodoInput;