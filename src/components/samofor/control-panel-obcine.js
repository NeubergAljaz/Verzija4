import * as React from 'react';
import '../css/styles.css';

function ControlPanelObcine(props) {
  const { year1 } = props;

  return (
    <div className="control-panel">
      <label><b>Leto:{year1}</b></label>
      <div key={'year'} className="input">
        <input
          className="input"
          type="range"
          value={year1}
          min={2000}
          max={2020}
          step={1}
          onChange={evt => props.onChange(evt.target.value)}
        />
      </div>
    </div>
  );
}

export default React.memo(ControlPanelObcine);