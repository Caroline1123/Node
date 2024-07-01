#!/usr/bin/env node

import { getCode } from "country-list";
import axios from "axios";

// Checks the number of cmd line arguments.
if (process.argv.length == 2) {
  console.log(
    "ERROR : expected country name (+optional year) as command-line argument"
  );
} else if (process.argv.length > 4) {
  console.log("2 arguments maximum allowed : Country name + year (optional)");

  // If command line args OK, check if valid country.
} else {
  const countryName = process.argv[2];
  const currentYear = new Date().getFullYear();
  let year = currentYear;
  if (process.argv[3]) {
    year = Number(process.argv[3]);
    if (isNaN(year) || Number(year) > currentYear) {
      throw new Error(`${process.argv[3]} is not a valid year`);
    }
  }
  const countryCode = getCode(countryName);
  if (!countryCode) {
    console.log("Unknown country");
  } else {
    axios({
      method: "get",
      url: `https://date.nager.at/api/v3/PublicHolidays/${year}/${countryCode}`,
      responseType: "json",
    })
      .then(function (response) {
        const data = response.data;
        for (let holiday of data) {
          console.log(holiday.date);
          console.log(holiday.name);
          console.log("");
        }
      })
      .catch(function (error) {
        console.error("Error fetching holidays:", error);
      });
  }
}
