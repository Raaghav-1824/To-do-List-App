import React,{useState} from "react";

function Input(props) {

  const [isDone,setDone]=useState(false);

  function taskComplete(){
    setDone((prevValue)=>{
      return(!prevValue)
    });

  }

  const taskDelete=()=>{
    if(confirm(`Are you sure you want to delete "${props.val}" ?`)){
          props.onDeletion(props.id);}
    }

return (
  
    <div className="itemContent" >
     <div className="Div2">
       <input onClick={taskComplete} type="checkbox"/>
       <label className="Div1" style={{textDecoration:isDone?"line-through":"none"}}>{props.val}</label>
     </div>
      
    
    {/* //-------------------------------Strike-through button----------------------------------- */}

      {/* <div className="Div2">
        <button className="completeBtn" onClick={taskComplete}>C</button>
      </div> */}

    {/* //-------------------------------Delete Button----------------------------------- */}

      <div className="Div3">
        <button className="deletebtn"  onClick={taskDelete}> D </button>
      </div>
    </div>
  
  

  )

}
export default Input;
