import React,{useState, useEffect} from 'react';
import './App.css';

const App =()=> {
  const[items, setItems] = useState([]);
  const getUsers = async () =>{
    const responce = await fetch('https://cat-fact.herokuapp.com/facts');
    setItems(await responce.json());
    //console.log(responce);
  }

  useEffect(()=>{
    getUsers();
  },[])
  return (
    <div className="App">
      <div className="conatainer">
          {items.map((item)=>{
          return(
            <div className='card'>
             <p>{item.type}</p>
            <p>{item._id}</p>
             
              <p>{item.user}</p>
            </div>
            )
         })}
       </div>
    </div>
  );
}

export default App;
