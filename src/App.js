import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Card from './components/Card';
import { useEffect, useState } from 'react';

function App() {

  const [displayedUser, setDisplayedUser] = useState(null);


  const getUsers = async () => {
    const resp = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await resp.json();
    setDisplayedUser(users);
  }

  useEffect(() => {
    getUsers();
  }, [])
  return (
    <div className="App">
      <Header></Header>
      <HeroSection></HeroSection>
      <div className="CardList">
        {displayedUser && 
            displayedUser.map(user => (
              <Card username={user.username} userID={user.id}></Card>
            ))
        }
      </div>
    </div>
  );
}

export default App;
