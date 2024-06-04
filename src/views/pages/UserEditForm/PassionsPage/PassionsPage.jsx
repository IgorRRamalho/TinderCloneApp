import React, { useContext } from 'react';
import { UserContext } from '../../../../contexts/UserContext';
import { useNavigate } from 'react-router-dom';

const PassionsPage = () =>{
    const navigate = useNavigate();

    //fazer map com os interesses, puxar do banco
    /*
    const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      preferences: {
        ...user.preferences,
        [name]: value,
      },
    });
  };
    */

  const handleClick = (e) => {
    e.preventDefault();
    // Aqui você pode enviar os dados para o backend
    console.log('User data:', user);
    navigate('/');
  };


    return(
        <>
        <h1>Your interests</h1>
        <p>Select a few of your interests and let everyone know what you’re passionate about.</p>
        <p>preferencias aqui ....</p>
        <button onClick={handleClick}>Continue</button>


        
        </>
    )

}

export default PassionsPage;