import React, { useEffect, useState } from "react";
import "./covid.css";

const Api = () => {
  const [data, setData] = useState([]);
  const getCovidData = async () => {
    try {
      const res = await fetch("https://data.covid19india.org/data.json");
      const actualData = await res.json();
      console.log(actualData.statewise[0]);
      setData(actualData.statewise[0]);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCovidData();
  }, []);

  return (
    <>
      <section>
        <h1 className="live">Live 🔴</h1>
        <h1>covid-19 tracker app</h1>

        <ul>
          <li className="card" style={{ background: "green" }}>
            <div className="card__main">
              <div className="card__inner">
                <p className="card__name">
                  <span>Our </span>Country
                </p>
                <p className="card__total">India</p>
              </div>
            </div>
          </li>

          <li className="card" style={{ background: "green" }}>
            <div className="card__main">
              <div className="card__inner">
                <p className="card__name">
                  <span>Our </span>Country
                </p>
                <p className="card__total">India</p>
              </div>
            </div>
          </li>

          <li className="card" style={{ background: "grey" }}>
            <div className="card__main">
              <div className="card__inner">
                <p className="card__name">
                  <span>Total </span>Recovered
                </p>
                <p className="card__total">{data.recovered}</p>
              </div>
            </div>
          </li>

          <li className="card" style={{ background: "gold" }}>
            <div className="card__main">
              <div className="card__inner">
                <p className="card__name">
                  <span>Total </span>Confirmed
                </p>
                <p className="card__total">{data.confirmed}</p>
              </div>
            </div>
          </li>
        </ul>
        <ul>
          <li className="card" style={{ background: "olive" }}>
            <div className="card__main">
              <div className="card__inner">
                <p className="card__name">
                  <span>Total </span>Death
                </p>
                <p className="card__total">{data.deaths}</p>
              </div>
            </div>
          </li>

          <li className="card" style={{ background: "skyblue" }}>
            <div className="card__main">
              <div className="card__inner">
                <p className="card__name">
                  <span>Total </span>Active
                </p>
                <p className="card__total">{data.active}</p>
              </div>
            </div>
          </li>

          <li className="card" style={{ background: "lightgrey" }}>
            <div className="card__main">
              <div className="card__inner">
                <p className="card__name">
                  <span>Last </span>Updated
                </p>
                <p className="card__total">{data.lastupdatedtime}</p>
              </div>
            </div>
          </li>
        </ul>
      </section>
    </>
  );
};

export default Api;
