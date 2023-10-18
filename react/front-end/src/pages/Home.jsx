/* eslint-disable react/no-unknown-property */

import Header from "../COMPONENT/Header";
import Login from "../COMPONENT/Login";

const Home = () => {
  return (
    <div className="home-wrap">
      <Header />
      <div className="container form-wrap d-flex justify-content-center">
        <div className="login-form w-50">
          <h2>Login to continue...</h2>
          <Login />
        </div>
      </div>
    </div>
  );
};

export default Home;
