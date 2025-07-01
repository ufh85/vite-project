import React, { useState, useEffect } from 'react';

export function InputForm() {
    const [userInfo, setUserInfo] = useState({});
    const [pokemon, setPokemon] = useState();
    const [loading, setLoading] = useState(true);
    
    
    useEffect(() => {
        document.title = userInfo.realName;
    }, [userInfo]);
    
    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon/2')
        .then((result) => result.json())
        .then((data) => {
            setPokemon(data); 
            setLoading(false)
        })
        .catch((err) => {
        console.error("Error fetching posts:", err);
        setLoading(false);
      });
    }, []);
    
    const handleChange = ({target}) => {
        const {name, value} = target;

        if(name === 'email') {
            if(value.length > 0 && !(value.split('@').length === 2)) {
                target.classList.add('emailAlert');
            } else {
                target.classList.remove('emailAlert');
            }
        }

        setUserInfo((prev) => ({...prev, [name]:value}));
    }
    return (
        <>
            <form className='inputForm'>
                <h2>The Amazing Application Form</h2>
                <div className='formRow'>
                    <label htmlFor='realName'>Name:</label>
                    <input onChange={handleChange}  type='text' id='realName' name='realName' />
                </div>
                <div className='formRow'>
                    <label htmlFor='email'>Email:</label>
                    <input onChange={handleChange} type='text' id='email' name='email' />
                </div>
                <div className='formRow'>
                    <label htmlFor='address'>Address:</label>
                    <input onChange={handleChange} type='text' id='address' name='address' />
                </div>
            </form>
            {loading? <p>...Loading</p>: <p>{pokemon.name}</p>}
            <p>{userInfo.realName}</p>
            <p>{userInfo.email}</p>
            <p>{userInfo.address}</p>
        </>
    );
}