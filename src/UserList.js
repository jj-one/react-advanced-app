import React, { useEffect, useReducer } from 'react'

const reducerFun = (state, action) => {
  switch(action.type) {
    case "USERS_REQUEST":
      return {...state, users: [], loading: true, error: ""};
    case "USERS_SUCCESS":
      return {...state, users: action.payload, loading: false, error: ""};
    case "USERS_FAIL":
      return {...state, users: [], error: action.payload, loading: false};
    default:
      return state;
  }
};

export default function UserList() {
  const [state, dispatch] = useReducer(reducerFun, {loading: false, users: [], error: ""});

  const loadUsers = async () => {
    dispatch({type: "USERS_REQUEST"});

    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      if(response.status === 200) {
        const data = await response.json();
        dispatch({type: "USERS_SUCCESS", payload: data});
      }
      else{
        throw Error("File requested not found");
      }
    }
    catch(err) {
      dispatch({type: "USERS_FAIL", payload: err.message});
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <div className='main'>
      <h1>Users</h1>

      <div><button onClick={loadUsers}>Reload users</button></div>
      {state.loading && <div>Loading users...</div>}
      {state.error && <div>Error: {state.error}</div>}
      {state.users.length > 0 && <table>
          <thead>
            <tr>
              <th>Username</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Website</th>
            </tr>
          </thead>
          <tbody>
            {state.users.map((user, index) => (
                <tr key={index}>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>{user.website}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      }
    </div>
  )
}
