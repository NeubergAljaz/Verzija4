//react
import React from 'react';

//grafi
import { XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { AreaChart, Area } from 'recharts';

const toPercent = (decimal, fixed = 0) => `${(decimal * 100).toFixed(0)}%`;
const getPercent = (value, total) => {
  const ratio = total > 0 ? value / total : 0;
  return toPercent(ratio, 2);
};

const renderTooltipContent = (o) => {
  const { payload, label } = o;
  const total = payload.reduce((result, entry) => result + entry.value, 0);

  return (
    <div className="customized-tooltip-content">
      <p className="total">{`${label} (Total: ${total})`}</p>
      <ul className="list">
        {payload.map((entry, index) => (
          <li key={`item-${index}`} style={{ color: entry.color }}>
            {`${entry.name}: ${(!isNaN(entry.value)) ?
            entry.value.toFixed(1) : "Ne obstaja"
            } (${getPercent(entry.value, total)})`}
          </li>
        ))}
      </ul>
    </div>
  );
};



export default function DelezObcine(props) {

  const data5 = require("../data/migracije_obcine.json");
  const results = [];

  for (var key in data5) {
    if (data5.hasOwnProperty(key) && data5[key].KAZALNIK === "Delovni migranti [brez kmetov], ki delajo zunaj občine prebivališča" && data5[key].OBČINE === props.obcina) {

      results[key] = data5[key];
      results[key].znotraj = 100 - results[key].num;

    }
  }

  var filtered = results.filter(function (el) {
    return el != null;
  })

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
        <h3>Graf delavcev, ki odhajajo na delo izven občine, kjer živijo</h3>

        <AreaChart
          width={500}
          height={400}
          data={filtered}
          stackOffset="expand"
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="LETO" />
          <YAxis tickFormatter={toPercent} />
          <Tooltip content={renderTooltipContent}/>
          <Area type="monotone" dataKey="num" name="Delavci ki delajo zunaj občine prebivališča" stackId="1" stroke="#2b6acf" fill="#84a4d8" />
          <Area type="monotone" dataKey="znotraj" name="Delavci ki delajo znotraj občine prebivališča" stackId="1" stroke="#b36710" fill="#d4ac7f" />

        </AreaChart>


      </div>
    </React.Fragment>
  );
}


