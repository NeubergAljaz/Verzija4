//react
import React from 'react';

//grafi
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

export default function GrafObcinePreb(props) {

  const data5 = require("../data/migracije_obcine.json");
  const data6 = require("../data/delovno_aktivno_leto.json");
  const results = [];

  for (var key in data5) {
    if (data5.hasOwnProperty(key) && data5[key].KAZALNIK === props.kaz && data5[key].LETO === props.leto && data5[key].OBČINE !== "SLOVENIJA") {
      results[key] = data5[key];
      for (var key2 in data6) {
        if (data6.hasOwnProperty(key2) && data6[key2].OBČINE === results[key].OBČINE && data6[key2].MESEC === (data5[key].LETO + "M12") && data6[key2].SPOL === "Spol - SKUPAJ") {
          results[key].prebivalci = Math.round((data6[key2].num * results[key].num) / 100);
        }
      }
    }
  }
  var filtered = results.filter(function (el) {
    return el != null;
  });

  var ime = props.kaz;

  return (
    <React.Fragment>
      <div>
        <BarChart
          width={1000}
          height={300}
          data={filtered}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="OBČINE" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="prebivalci" name={ime} fill="#b36710" />

        </BarChart>

      </div>
    </React.Fragment>
  );
}


