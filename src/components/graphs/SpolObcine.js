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
            {`${entry.name}: ${entry.value}(${getPercent(entry.value, total)})`}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default function SpolObcine(props) {

  const data5 = require("../data/delovno_aktivno_leto.json");
  const results = [];
  var leto = 2010;

  for (var key in data5) {
    if (data5.hasOwnProperty(key) && data5[key].OBČINE === props.obcina && data5[key].SPOL === "Moški" && data5[key].MESEC !== "2005M12" && data5[key].MESEC !== "2006M12" && data5[key].MESEC !== "2007M12" && data5[key].MESEC !== "2008M12" && data5[key].MESEC !== "2009M12") {
      for (var key2 in data5) {
        if (data5.hasOwnProperty(key2) && data5[key2].OBČINE === props.obcina && data5[key2].SPOL === "Ženske" && data5[key2].MESEC === data5[key].MESEC) {

          results[key] = data5[key];
          results[key].leto = leto;
          results[key].zenske = data5[key2].num;
          leto += 1;

        }
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

        <h3>Graf primerjave aktivnosti med spoloma v občini</h3>
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
          <XAxis dataKey="leto" />
          <YAxis tickFormatter={toPercent} />
          <Tooltip content={renderTooltipContent} />
          <Area type="number" dataKey="num" name="Moški" stackId="1" stroke="#2b6acf" fill="#84a4d8" />
          <Area type="number" dataKey="zenske" name="Ženske" stackId="1" stroke="#b36710" fill="#d4ac7f" />

        </AreaChart>

      </div>
    </React.Fragment>
  );
}


