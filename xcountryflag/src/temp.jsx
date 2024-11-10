import { useEffect, useState } from "react";

// card -- 1. image 2. Flag Name
const Card = ({ country }) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          width: "200px",
          height: "200px",
          flexDirection: "column",
          alignItems: "center",
          padding: "10px",
          justifyContent: "center",
          border: "1px solid #ccc",
          borderRadius: "25px",
          textAlign: "center",
        }}
      >
        <img
          src={country.flag}
          alt={country.name}
          style={{ width: "80px", height: "80px" }}
        />
        <h5>{country.name}</h5>
      </div>
    </>
  );
};

function Temp() {
  const APIcontent = "https://xcountries-backend.azurewebsites.net/all";
  const [countries, setCountries] = useState([]);
  //   fetching data and using useEffect to load a data and helps in reloading the data

  useEffect(() => {
    fetch(APIcontent)
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
      });
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

export default Temp;
