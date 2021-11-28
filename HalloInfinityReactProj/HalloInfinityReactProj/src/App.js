import './App.css';
import React from 'react';



const user = {
    firstName: 'Michael',
    lastName: 'Williams'
};

function formatName(user) {
    return user.firstName + ' ' + user.lastName
}

function getGreeting(user) {
    if (user != null) {
        return <h1>Hello, {formatName(user)}!</h1>;
    } else {
        return <h1>Hello, Stranger.</h1>
    }

}

const element = (
    <div>
        <h2>
            {getGreeting(user)}
        </h2>
    </div>
);

function App() {
    return (
        element
    );
}

export default App;
