import React, { useState } from "react";


function App()
 {

const [listName, setListName] = useState("");
const [items, setItems] = useState([]);

    function handleChange(event){
         setListName(event.target.value);
        
    }
    function handleClick(){
    setItems(prevItems => {
        return [...prevItems, listName];
    });
    setListName("");
}

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} value={listName} type="text" />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map(todoItem => 
          <li>{todoItem}</li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default App;
