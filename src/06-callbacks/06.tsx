import {ChangeEvent, MouseEvent} from 'react';

const User = () => {

    const deleteUser = (e: MouseEvent<HTMLButtonElement>) => {
        alert(e.currentTarget.name);
    }

    const onNameChanged = () => {
        console.log('name changed');
    }

    const onAgeChanged = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(e.currentTarget.value);
    }


    const focusLostHandler = () => {
        console.log('focus lost');
    }

    return <div>
        <textarea onChange={onNameChanged} onBlur={focusLostHandler}>Ana</textarea>
        <input onChange={onAgeChanged}/>
        <button name={'delete'} onClick={deleteUser}>delete</button>
    </div>
}

export default User;
