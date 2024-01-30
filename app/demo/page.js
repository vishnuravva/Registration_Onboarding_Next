"use client";
import Image from "next/image";
import countries from "../../utils/countries";
import { useState, useEffect } from "react";

const Demo = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cachedData = localStorage.getItem("countriesData");
        if (cachedData) {
          // If data is found in the local storage, use it
          setCountries(JSON.parse(cachedData));
        } else {
          // Otherwise, fetch data from the API
          const response = await fetch("https://restcountries.com/v3.1/all");
          const data = await response.json();
          setCountries(data);

          // Cache the fetched data in local storage
          localStorage.setItem("countriesData", JSON.stringify(data));
        }
      } catch (error) {
        console.error("Error fetching country data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>All Country Information</h1>
      <ul>
        {countries.map((country, index) => (
          <li key={index}>
            <strong>Name:</strong> {country.name.common}
            <br />
            <strong>Alpha2 Code:</strong> {country.cca2}
            <br />
            <strong>Alpha3 Code:</strong> {country.cca3}
            <br />
            <strong>Calling Code:</strong>{" "}
            {country?.idd?.root + country?.idd?.suffixes}
            <br />
            <strong>Flag:</strong>{" "}
            <Image
              width={25}
              height={25}
              src={country.flags.svg}
              alt={`${country.name.common} Flag`}
            />
            <br />
            <br />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Demo;
