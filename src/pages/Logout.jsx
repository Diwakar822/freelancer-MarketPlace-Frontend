import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const [name, setname] = useState()
    const [email, setemail] = useState()
    const navigate = useNavigate()
    
    const handleSubmit = (e)=>{
        e.preventDefault();

        fetch("https://freelancer-marketplace-project-backend.onrender.com/api/auth/logout", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email }),
          })
          .then((response) => response.json())
          .then((data) => {
            if (data.success) {
              alert("Logout Successful!");
              navigate('/')
              localStorage.setItem("token", data.token);
  
              
                      
            } else {
              alert(data.message);
            }
          })
          .catch((err)=>{
            alert('logout failed try agin')
          })

        

    }
    return (
        <div>

<div className='login-page'>
           <div className="login-container">
             <h1 className="login-title">Logout</h1>
      <form className="login-form" onSubmit={handleSubmit}>
      <label className="login-label" htmlFor="email">User Name</label>
        <input 
          type="username"
          placeholder="username"
          value={name}
          onChange={(e) => setname(e.target.value)}
          required
        />
         <label className="login-label" htmlFor="password">Email</label>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setemail(e.target.value)}
          required
        />
        <button className="login-button" type="submit">Logout</button>
      </form>
          {/* <a href="/forgot-password" className="login-link">?</a> */}
        </div>
        </div>
            
        </div>
    );
};

export default Logout;