import React, { useEffect, useState } from 'react'

export default function NewUserInfo() {
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/2")
    .then(res => res.json())
    .then(data => setUser(data));

    return () => {
      console.log("Pls, clean up any resource used in the use effect here.");
    };
  }, []);

  return (
    <div>
      {user?
      <>
        User Info: Function <br/>
        Name: {user.name} <br/>
        Email {user.email}
      </>
      :
        "Loading..."
      }
    </div>
  )
}
