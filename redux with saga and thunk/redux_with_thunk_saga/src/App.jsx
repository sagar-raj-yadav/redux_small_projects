
import  { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {fetchUser,sendUser} from './redux/userSlice';

const App = () => {

  const [newUser,setNewUser]=useState({name:'',email:''});
  const dispatch = useDispatch();
  const {user,loading,error}=useSelector((state)=>state.user);

  useEffect(()=>{
    dispatch(fetchUser());
  },[dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(sendUser(newUser));
    setNewUser({ name: '', email: '' }); // Clear form
  };

  return (
    <div>
      <h1>Users List</h1>

      {/* Display loading state */}
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}

      {/* List of users */}
      <ul>
        {user.map((user) => (
          <li key={user.id}>{user.name} - {user.email}</li>
        ))}
      </ul>

      {/* Form to add new user */}
      <h2>Add New User</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={newUser.name}
          onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          value={newUser.email}
          onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
        />
        <button type="submit">Add User</button>
      </form>
    </div>
  );
}

export default App