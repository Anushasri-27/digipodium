/* eslint-disable react/no-unknown-property */
import Header from "../COMPONENT/Header";
import Login from "./Login";

const Home = () => {
  return (
    <div>
    
       <Header/>
       <div className="container mt-5 w-100">
       <Login />
       </div>
     
    </div>
  )
}

export default Home;
