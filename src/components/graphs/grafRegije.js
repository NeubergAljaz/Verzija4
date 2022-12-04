//react
import React from 'react';

//grafi
import { XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { LineChart, Line } from 'recharts';

export default function GrafRegije(props) {

  const data5 = require("../data/migracije_regije.json");
  const results = [];

  for (var key in data5) {
    if (props.regija === "") {
      return (
        <React.Fragment>
        </React.Fragment>
      );
    }
    else {
      if (data5.hasOwnProperty(key) && data5[key].KAZALNIK === "Indeks delovne migracije" && data5[key]["STATISTIČNA REGIJA"] === props.regija) {
        results[key] = data5[key];
      }
    }
  }
  var filtered = results.filter(function (el) {
    return el != null;
  });

  return (
    <React.Fragment>

      <h3>{props.regija}</h3>

      <div>

        <LineChart
          layout="vertical"
          width={300}
          height={555}
          data={filtered}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}

        >

          <CartesianGrid strokeDasharray="3 3" />
          <XAxis domain={("dataMin", "dataMax")} type="number" />
          <YAxis dataKey="LETO" type="category" />
          <Tooltip />
          <Legend />
          <Line dataKey="num" name={"Indeks"} stroke="#5A7362" />

        </LineChart>

      </div>
      <p>Indeks predstavlja razmerje med številom delovno aktivnih
prebivalcev v določeni regiji delovnega mesta in številom
delovno aktivnih prebivalcev v regiji prebivališča pomnoženo
s 100.</p>

    </React.Fragment>
  );
}


