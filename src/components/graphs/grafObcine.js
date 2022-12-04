//react
import React from 'react';

//grafi
import { XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { LineChart, Line } from 'recharts';


const toPercent = (decimal) => `${decimal.toFixed(1)}`;


export default function GrafObcine(props) {

  const data5 = require("../data/migracije_obcine.json");
  const results = [];

  for (var key in data5) {
    if (props.regija === "") {
      return (
        <React.Fragment>

        </React.Fragment>
      );
    }
    else {
      if (data5.hasOwnProperty(key) && data5[key].KAZALNIK === "Indeks delovne migracije" && data5[key].OBČINE === props.obcina) {
        results[key] = data5[key];
      }
    }
  }

  var filtered = results.filter(function (el) {
    return el != null;
  });

  for (var i = 0; i < results.length; i++) {
    var obj = results[i];
    for (var prop in obj) {
      if (obj.hasOwnProperty(prop) && obj[prop] !== null && !isNaN(obj[prop])) {
        obj[prop] = +obj[prop];
      }
    }
  }

  return (
    <React.Fragment>

      <h3>{props.obcina}</h3>

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
          <XAxis domain={("dataMin", "dataMax")} type="number" tickFormatter={toPercent}/>
          <YAxis dataKey="LETO" type="category" />
          <Tooltip formatter={(value) =>
          (!isNaN(value)) ?
            value.toFixed(1) : "Ne obstaja"
            } />
          <Legend />
          <Line dataKey="num" name={"Indeks"} stroke="#5A7362"/>

        </LineChart>

      </div>
      <p>Indeks predstavlja razmerje med številom delovno aktivnih
prebivalcev v določeni občini delovnega mesta in številom
delovno aktivnih prebivalcev v občini prebivališča pomnoženo
s 100.</p>
    </React.Fragment>
  );
}


