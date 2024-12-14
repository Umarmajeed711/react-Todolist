import { useState } from 'react';
import './App.css';
function Todolist() {

  const [list,setlists] = useState(["item1"]);
  const [InputVal,setInputValue] = useState("")

  const addItem = (e) => {
   e.preventDefault();

   // ... spread operator get arrays's all value
    setlists((prev) => [...prev, InputVal]);
    setInputValue("");

    
  }

  

  const removeItem = (index) => {

    let newArr = [...list];
    newArr.splice(index,1);
    setlists(newArr);
  }


  return (
    <div className='main'>
      <h1>TOdo LiSt</h1>
     <div  style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>

       <form style={{paddingBottom: 20.}} onSubmit={addItem}>

        <input type="text" required className='inputField' value={InputVal} onChange={(event) => {setInputValue(event.target.value)}}/>
        <button className='addButton'>Add Item</button>
       </form>

       <div className='list'>
        {
          list.map((ele,i) => {
            return(
              <div key={i} className='item'>
                
                <p style={{margin:0}}>
                 {ele}
                </p>
                <button onClick={() => {removeItem(i)}} className='removeButton'>X</button>
              </div>
            )
          })
        }
       </div>
     </div>

          

    </div>
   
  );
}

export default Todolist;
