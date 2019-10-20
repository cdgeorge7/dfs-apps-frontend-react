import React, { useState, useEffect } from "react";
import axios from "axios";

export default function WeekYearDropdown() {
  const [lineupsMetaData, setLineupsMetaData] = useState({ lineups: [] });
  const [years, setYears] = useState([]);
  const [year, setYear] = useState();
  const [weeks, setWeeks] = useState([]);

  //using call to dummy api to simulate call to future api
  const fetchLineupsMetaData = async () => {
    await axios
      .get("https://swapi.co/api/people/1/")
      .then(res => {
        const dummyLineupsMetaDataJSON =
          '{ "lineups":[{"year":"2018","week":"15","lineups":30},{"year":"2019","week":"1","lineups":30},{"year":"2019","week":"2","lineups":30}] }';

        setLineupsMetaData(JSON.parse(dummyLineupsMetaDataJSON));
        let mdYears = JSON.parse(dummyLineupsMetaDataJSON).lineups.map(
          lineup => {
            return lineup.year;
          }
        );
        setYears([...new Set(mdYears)]);
      })
      .catch(error => console.log(error));
  };

  const setWeeksGivenYear = selectedYear => {
    if (typeof selectedYear !== "undefined") {
      let newWeeks = [];
      lineupsMetaData.lineups.forEach(lineup => {
        if (lineup.year === selectedYear) {
          newWeeks.push(lineup.week);
        }
      });
      setWeeks(newWeeks);
    }
  };

  useEffect(() => {
    fetchLineupsMetaData();
  }, []);

  useEffect(() => {
    setWeeksGivenYear(year);
  }, [year]);

  return (
    <div>
      <label className="mr-2">Year:</label>
      <select onChange={e => setYear(e.target.value)}>
        <option value=""></option>
        {years.map(year => (
          <option value={year}>{year}</option>
        ))}
      </select>
      <label className="mr-2 ml-2">Week:</label>
      <select>
        {weeks.map(week => (
          <option value={week}>{week}</option>
        ))}
      </select>
    </div>
  );
}
