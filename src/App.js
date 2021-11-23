import "./App.css";
// https://geo.ipify.org/api/v2/country?apiKey=at_N6BJYFRznP7wvvUanJZu2Pmrvn2l8&ipAddress=8.8.8.8
// 192.212.174.101

import Data from "./components/Data";
import { useEffect, useState } from "react";

import Search from "./components/Search";
import Map from "./components/Map";

function App() {
  const [inputIp, setInputIp] = useState("");
  const [userIp, setuserIp] = useState();
  const [location, setLocation] = useState();

  const secretAPI = "at_N6BJYFRznP7wvvUanJZu2Pmrvn2l8";
  const CurrentVer = "v2";
  const API = `https://geo.ipify.org/api/${CurrentVer}/country,city?apiKey=${secretAPI}`;
  const API2 = `https://geo.ipify.org/api/${CurrentVer}/country,city?apiKey=${secretAPI}&ipAddress=${inputIp}`;

  const getUserIp = (URL) => {
    fetch(URL)
      .then((resp) => resp.json())
      .then((data) => {
        setuserIp(data);
        setLocation({ lat: data.location.lat, lng: data.location.lng });
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getUserIp(API);
  }, []);

  const handleClick = () => {
    inputIp === undefined || inputIp === "" || inputIp < 7
      ? alert("please enter a valid IP unu")
      : getUserIp(API2);
  };

  const handleChange = (e) => {
    setInputIp(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return userIp === undefined || userIp === "" ? (
    <h1>Loading</h1>
  ) : (
    <div className="flex flex-col items-center justify-center ">
      <div className=" h-56 flex flex-col items-center justify-center  backgroundImage  w-full dummy-container">
        <h1 className="text-xl text-white mt-7 ">IP Address Tracker</h1>
        <Search
          userIp={userIp}
          handleChange={handleChange}
          handleIpSubmit={handleSubmit}
          handleClick={handleClick}
        />
        <Data userIp={userIp} />
      </div>

      <Map location={location} />
    </div>
  );
}

export default App;
