import React, { useEffect, useState } from 'react'

export default function NewUserInfo() {
  const [user, setUser] = useState({});
  const [userId, setUserId] = useState(1);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(res => res.json())
    .then(data => setUser(data));

    return () => {
      console.log("Pls, clean up any resource used in the use effect here.");
    };
  }, [userId]);

  const userChange = (e) => {
    if (!isNaN(e.target.value)){
      setUserId(parseInt(e.target.value));
    }
  };

  return (
    <div className='user'>
      {user?
      <>
        User Info: Function <br/>
        Enter User Id: <input type="text" value={userId} onChange={userChange} /><br/>
        Name: {user.name} <br/>
        Email {user.email}
      </>
      :
        "Loading..."
      }
    </div>
  )
}
