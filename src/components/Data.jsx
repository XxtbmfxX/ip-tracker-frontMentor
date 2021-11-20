import React from "react";

// const passCors = "https://cors-anywhere.herokuapp.com/";

const Data = ({ userIp }) => {
  return (
    <section className=" w-4/5 flex flex-col items-center text-center absolute top-32 z-50 rounded-lg my-3  bg-white">
      <article>
        <span className="ip-spanm_text">IP ADDRESS</span>
        <p className="ip-data"> {userIp.ip} </p>
      </article>
      <article>
        <span className="ip-spanm_text">LOCATION</span>
        <p className="ip-data">
          {" "}
          {userIp.location.region + userIp.location.country}{" "}
        </p>
      </article>
      <article>
        <span className="ip-spanm_text">TIMEZONE</span>
        <p className="ip-data"> UTC {userIp.location.timezone} </p>
      </article>
      <article>
        <span className="ip-spanm_text">ISP</span>
        <p className="ip-data"> {userIp.isp} </p>
      </article>
    </section>
  );
};

export default Data;
