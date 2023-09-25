import React from 'react'

const HeroSection = ({searchString, setSearchString}) => {

  const handleSeacrh = (e) => {
    e.preventDefault();
    setSearchString(e.target.value);
  } 
  return (
    <div className="HeroSection">
        <img src="https://images.unsplash.com/photo-1563207153-f403bf289096?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cm9ib3RzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="wall E" />
        <div className="search-tile">
            <h2>Search for an artist</h2>
            <p>
                The internet's source for visuals. Powered by creators everywhere.
            </p>
            <form>
                <input type="search" 
                  value={searchString}
                  onChange={(e) => handleSeacrh(e)}
                  placeholder='Enter arstist username'
                />
            </form>
        </div>
    </div>
  )
}

export default HeroSection