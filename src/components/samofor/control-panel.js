import * as React from 'react';
import '../css/styles.css';

function ControlPanel(props) {
  const { year } = props;

  return (
    <div className="control-panel">
      <label><b>Leto:{year}</b></label>
      <div key={'year'} className="input">
        <input
          className="input"
          type="range"
          value={year}
          min={2009}
          max={2020}
          step={1}
          onChange={evt => props.onChange(evt.target.value)}
        />
      </div>
    </div>
  );
}

export default React.memo(ControlPanel);