import React from "react";
import { useEffect, useState } from "react";
import "../Article/Articls.css";

function Article() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const json = await response.json();
      setData(json);
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="serachcont">
        <input
          className="serch"
          type="text"
          placeholder="Search by Country Name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="cards">
        {data
          .filter((e) => e.name.common.toLowerCase().includes(search))
          .map((run) => (
            <div className="card" key={run.name.common}>
              <img src={run.flags.svg} alt="test" />
              <h2> {run.name.common}</h2>
              <p>region: {run.region}</p>
              <p>capital city: {run.capital}</p>
              <p>official: {run.name.official}</p>
            </div>
          ))}
      </div>
    </>
  );
}

export default Article;
