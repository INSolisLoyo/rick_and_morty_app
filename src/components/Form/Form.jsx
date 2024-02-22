import style from './Form.module.css';
import React from 'react';
import { useState } from 'react';
import valitation from './validations';
const Form = (props) => {

    const { login } = props;
    const [ userData, setUserData ] = useState({
        email: '',
        password: ''
    })

    let [errors, setErrors] = useState({
        email: '',
        password: ''
    });

    const handleChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })

        setErrors(valitation({
            ...userData,
            [event.target.name]: event.target.value
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        login(userData);
    }

    return (
        <form>
            <label>Email:</label>
            <input type="email" 
                placeholder="email" 
                className={style.input_email}
                name='email' 
                value={userData.email}
                onChange={handleChange}
                />
            {
                errors.email ? (
                    <p>{errors.email}</p>
                ) : errors.emailNull? (
                    <p>{errors.emailNull}</p>
                ) : ( 
                    <p>{errors.characters}</p>
                )
                
            }
            <label >Password:</label>
            <input type="password" 
                placeholder="password" 
                className={style.input_password}
                name='password'
                value={userData.password}
                onChange={handleChange}
            />
            {
                errors.email ? (
                    <p>{errors.email}</p>
                ) : ''
            }
            <button type="submit" onClick={handleSubmit}>Submit</button>
        </form>
    )
}

export default Form;