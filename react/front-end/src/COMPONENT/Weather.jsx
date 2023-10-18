/* eslint-disable react/jsx-key */
import Data from "./WeatherDummpData";
const Weather = () => {
    const weatherCondition =(temp) =>{
        if(temp<20){
             return 'card-bg-primary';

        }else{
            return 'card-bg-danger';
        }
    }
  const displayCard = () => {
    return Data.map((obj) => (
      <div className="col-md-4 col-6 mb-4 mt-4 ">
        <div className={`card shadow text-center1 ${weatherCondition(obj.temperature)}`}>
          <img
            className="card-img-top p-4"
            height="300"
            src={obj.image}
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="card-title">{obj.loacation}</h5>
            <hr />
            <p className="subtitle text-muted">
              temperature: {obj.temperature}
            </p>

            <p className="card-text">
              <small className="text-muted">humidity:{obj.humidity} </small>
            </p>
          </div>
        </div>
      </div>
    ));
  };
  return (
    <div className="weather-wrap">
      <section className="py-5">
        <p className="text-center display-1">Today's sky story</p>
        <div className="contanier">
          <div className="row mt-5">{displayCard()}</div>
        </div>
      </section>
    </div>
  );
};

export default Weather;
