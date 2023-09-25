import React from 'react'
import Card from './Card'

const CardList = ({filteredUsers}) => {
  return (
    <div className="CardList">
        {filteredUsers && 
            filteredUsers.map(user => (
                <Card key={user.id} 
                    username={user.username} 
                    userID={user.id}
                ></Card>
            ))
        }
    </div>
  )
}

export default CardList