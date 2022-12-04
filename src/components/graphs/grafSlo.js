//react
import React from 'react';

//grafi
import { XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { LineChart, Line } from 'recharts';

export default function GrafSlo(props) {

  const data5 = require("../data/aktivno_regije.json");
  const results = [];

  for (var key in data5) {
    if (props.regija === "") {
      return (
        <React.Fragment>
        </React.Fragment>
      );
    }
    else {
      if (data5.hasOwnProperty(key) && data5[key].SPOL === "Spol - SKUPAJ" && data5[key]["KOHEZIJSKA / STATISTIČNA REGIJA"] === props.regija) {
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

      <div>

        <LineChart
          width={1000}
          height={200}
          data={filtered}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}

        >

          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="LETO" type="category" />
          <YAxis domain={("dataMin", "dataMax")} type="number" />
          <Tooltip />
          <Legend />
          <Line dataKey="num" name="Število delovno aktivnih prebivalcev" stroke="#5A7362" />

        </LineChart>

      </div>

    </React.Fragment>
  );
}


