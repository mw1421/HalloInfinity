import logo from './logo.svg';
import './App.css';



const user = {
    firstName: 'Michael',
    lastName: 'Williams'
};

function formatName(user) {
    return user.firstName + ' ' + user.lastName
}

const element = (
    <h1>
        Hello, {getGreeting(user)}
    </h1>
);

function getGreeting(user) {
    if (user) {
        return <h1> Hello, {formatName(user)}!</h1>;
    }
    return <h1>Hello, Stranger.</h1>
}

function App() {
  return (
      element
  );
}

export default App;
