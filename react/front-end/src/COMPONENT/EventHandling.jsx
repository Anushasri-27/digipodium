import {Button } from "rsuite";

const EventHandling = () => {
  //function before return statement

  const onBtnClick = () =>{

    alert("you are at the right place  ");

  }





  return (
    <div>
        <h1>Event handling exapmle</h1>
        <Button className="btn btn-outline-warning" onClick={onBtnClick} >Button</Button>
    
    </div>
  )
}

export default EventHandling;
