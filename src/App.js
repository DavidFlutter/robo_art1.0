import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import CardList from './components/CardList';
import UserDatailsModal from './components/UserDatailsModal';
import PortfolioPage from './pages/PortfolioPage';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { useEffect, useState } from 'react';

function App() {

  const [displayedUser, setDisplayedUser] = useState(null);
  const [filteredUsers, setFilteredUsers] = useState(null);
  const [searchString, setSearchString ] = useState("");
  const [userDetailsModalIsVisible, setUserDetailsModalIsVisible] = useState(false);
  const [currentUserID, setCurrentUserID] = useState(null);

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

  useEffect(() => {
    	console.log(currentUserID);
  }, [userDetailsModalIsVisible]);
  return (
    <div className="App">
      <BrowserRouter>
        <Header searchString={searchString}></Header>
        <Routes>
          {/*Homepage Route */}
          <Route path='/robo_art1.0' element={
            <>
              {userDetailsModalIsVisible && <UserDatailsModal
                setUserDetailsModalIsVisible={setUserDetailsModalIsVisible}
                currentUserID={currentUserID}
              ></UserDatailsModal>}
              <HeroSection searchString={searchString} 
                setSearchString={setSearchString}
              ></HeroSection>
              <CardList filteredUsers={filteredUsers}
                setUserDetailsModalIsVisible={setUserDetailsModalIsVisible}
                setCurrentUserID={setCurrentUserID}
              ></CardList>
            </>
          }></Route>

          {/*PortfolioPage Route*/}
          <Route path='/user/:id' element={
            <PortfolioPage></PortfolioPage>
          }></Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
