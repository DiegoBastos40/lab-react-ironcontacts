import logo from './logo.svg';
import './App.css';
import React from 'react';
import {useState} from 'react';
import contacts from './contacts.json'


function App() {
  
  const fiveContacts = contacts.slice(0, 7);

  const [addContact, setAddContact] = useState(fiveContacts);

  const randomContact = () => {
  const getRandomContato = contacts[Math.floor(Math.random()* contacts.length)];
  return setAddContact([...addContact, getRandomContato])
 }

 const sortByName = () => {
   
   const sortName = [...addContact].sort((a,b) =>{ 
    if(a.name > b.name) {

      return 1;
    } 
    else if(a.name < b.name){
      return -1;
    } 
    else {
      return 0;
    }
   
  });

  setAddContact(sortName);
   
 }

 const sortByPopularity = () => {
   
  const sortPopularity = [...addContact].sort((a,b) =>{ 
   if(a.popularity > b.popularity) {

     return 1;
   } 
   else if(a.popularity < b.popularity){
     return -1;
   } 
   else {
     return 0;
   }
  
 });

 setAddContact(sortPopularity);
  
}
const deleteMovie = (contactID) => {
  const filteredContact = [...addContact].filter((elemento) => {
    return elemento.id !== contactID;
  });
  setAddContact(filteredContact);
};
 return (
     
  <div className='App '>
    <h1>Iron Contacts</h1>
      <table style={{ margin: 'auto' }}>
      <tr>
        <th>Picture</th>
        <th>Name</th>
        <th>Popularity</th>
        <th>Won Oscar</th>
        <th>Won Emmy</th>
      </tr>
      <tbody>
        {addContact.map(elemento => {
          return (
            <tr>
              <td>
                <img src={elemento.pictureUrl} width="150"/>
              </td>
              <td>
                {elemento.name}
              </td>
              <td>
                {elemento.popularity}
              </td>
             <td>
              {elemento.wonOscar && '🏆'}
              </td>
              <td>
              {elemento.wonEmmy && '🏆'}
              </td>
              <td>
                  <button onClick={() =>deleteMovie(elemento.id)}> Delete</button>
                </td>
            </tr>
          );
        })}
      </tbody>
      </table>
      <button onClick={randomContact}>Add Random Artist</button>
      <button onClick={() => sortByPopularity()}>Popularity Order</button>
      <button onClick={() => sortByName()}>Alphabetically Order</button>
      
      
  </div>
      
  );   
}

export default App;