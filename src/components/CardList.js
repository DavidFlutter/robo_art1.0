import React from 'react'
import Card from './Card'

const CardList = ({
  filteredUsers, 
  setUserDetailsModalIsVisible, 
  setCurrentUserID,
}) => {
  return (
    <div className="CardList">
        {filteredUsers && 
            filteredUsers.map(user => (
                <Card key={user.id} 
                    username={user.username} 
                    userID={user.id}
                    setUserDetailsModalIsVisible={setUserDetailsModalIsVisible}
                    setCurrentUserID={setCurrentUserID}
                ></Card>
            ))
        }
    </div>
  )
}

export default CardList