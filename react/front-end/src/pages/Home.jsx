/* eslint-disable react/no-unknown-property */
import Count from "../COMPONENT/Count";
import EventHandling from "../COMPONENT/EventHandling";
import Header from "../COMPONENT/Header";
import Login from "../COMPONENT/Login";

const Home = () => {
  return (
    <div>
    
       <Header/>
       <div className="container mt-5 w-100">
        <Count />
        <EventHandling />
       <Login />
       </div>
     
    </div>
  )
}

export default Home;
