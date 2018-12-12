import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app.js'

const luckyNumber = () => {
    return Math.floor(Math.random() * 1000) + 1;
};

const greeting = (name) => {
    return (
        <div className='container'>
        <h1>Hello {user.name}</h1>
        <h2 className='text-muted'>Your lucky number is: {user.luckynumber}</h2>
    </div>
    )
};

const user = {
    name: "mike",
    luckynumber : luckyNumber()
};


ReactDOM.render(
functional-components
    <App/>,

    greeting(user),
    document.getElementById('root')
);
