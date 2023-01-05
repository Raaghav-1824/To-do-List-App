//-------------------------------------To do list ------------------------------------------

import React, { useState } from "react";
import Input from "./Input";



function App(){
  const [task, setTask] = useState("");
  // console.log(task)
  const [newValue, setValue] = useState([]);
  // console.log(newValue)
 
  const handleClick=(event)=>{
    event.preventDefault();
  }


  const handleChange=(event)=>{
    const newText = event.target.value;
    // console.log(event.target.value)
    setTask(newText);
    // console.log(newText);
  }

  function newTask(event) {                              
    setValue((previousState) =>
     {
      if(task!==""){
        return([...previousState,task]);
      }
      else if(task===""){
         return([...previousState]);
        }
     }   
    );
    setTask("");                                        
  }

  function deleteTask(id) {
    setValue(previousState =>{
      return previousState.filter((item,index)=>{
         return index!==id;
    });

    });

  }

  function deleteAll(){
    if(newValue.length!==0){
      if(confirm(`Are you sure you want to delete "All Items !" ?`)){
        // console.log(newValue.length)
        setValue([]);
        }
      }
    else if(newValue.length===0){
       alert("oops ! there is no task to delete.")
    }
    
    }


    
  return (
    <div className="taskNote">
      <div className="header">
        <img id="logo" src="https://is5-ssl.mzstatic.com/image/thumb/Purple112/v4/c6/a9/be/c6a9bed1-ad94-06a2-faa6-f1ee37120099/AppIcon-1x_U007emarketing-0-10-0-85-220.png/512x512bb.jpg" alt="logoImage" />
        <h1 id="heading" style={{marginLeft:"10px",width:"auto"}}>To do list</h1>
      </div>
      
      <form onSubmit={handleClick}>
        <input onChange={handleChange} type="text" value={task}/> 
        <span>
          <button className="add" onClick={newTask} type="submit">
            ADD
          </button>
        </span>
      </form>
      

      {/* --------------------TASK LIST -------------------- */}
      
      
      <div className="mainDiv">
        <ul className="listItem" style={{listStyleType:"none" ,padding:"0px 0px" }}>
          {newValue.map((value,index) => 
          (<Input key={index} id={index} val={value} onDeletion={deleteTask} task={task}/>))}
        </ul>
        <button className="deleteAllBtn" onClick={deleteAll}>Delete All</button>
      </div>
        
    </div>
            
        
    
  );
}

export default App;

























// {/* <li>
//               <button
//                 style={{
//                   border: "none",
//                   padding: 0,
//                   background: "none",
//                   fontFamily: "monospace",
//                   fontWeight: "bold",
//                   fontSize: "15px"
//                 }}

//                 onClick={taskComplete}>

//                 {value}

//               </button>
//             </li> ))}  */}