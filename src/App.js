import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import CardList from './components/CardList';
import { useEffect, useState } from 'react';

function App() {

  const [displayedUser, setDisplayedUser] = useState(null);
  const [filteredUsers, setFilteredUsers] = useState(null);
  const [searchString, setSearchString ] = useState("");

  const getUsers = async () => {
    const resp = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await resp.json();
    setDisplayedUser(users);
    setFilteredUsers(users)
  }

  const handleFilter = () => {
    let newList = displayedUser?.filter(user => {
      return user.username.toLowerCase().includes(searchString.toLowerCase())
    });
    setFilteredUsers(newList);
  };

  useEffect(() => {
    getUsers();
  }, []);

  useEffect(() => {
    handleFilter();
  }, [searchString])
  return (
    <div className="App">
      <Header searchString={searchString}></Header>
      <HeroSection searchString={searchString} 
        setSearchString={setSearchString}
      ></HeroSection>
      <CardList filteredUsers={filteredUsers}></CardList>
    </div>
  );
}

export default App;
