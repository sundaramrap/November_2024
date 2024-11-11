import React, { useState, useEffect } from "react";

const Card = ({ country }) => {
  return (
    <div
      className="XcountrtyFlag"
      style={{
        display: "flex",

        justifyContent: "center",
        justifyItems: "center",
        flexDirection: "column",
        border: " 2px solid #ccc",
        borderRadius: "20px",
        alignItems: "center",
        padding: "10px",
        height: "120px",
        width: "120px",
        textAlign: "CENTER",
      }}
    >
      <img
        src={country.flag}
        alt={country.name}
        style={{ width: "50px", height: "50px" }}
      />
      <h5>{country.name}</h5>
    </div>
  );
};

function Countries() {
  const [countries, setCountries] = useState([]);
  const APIEndPoint = "https://xcountries-backend.azurewebsites.net/all";

  useEffect(() => {
    fetch(APIEndPoint)
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
      {countries.map((country, index) => (
        <Card
          key={index}
          country={{ name: country.name, flag: country.flag }}
        />
      ))}
    </div>
  );
}

export default Countries;
