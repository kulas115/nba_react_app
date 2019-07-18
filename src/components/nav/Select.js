import React from 'react';
import selectCss from './Select.module.css'

const Select = ({season, seasons, onSeasonChange }) => (
  <div className={selectCss.select}>
    <label>Season</label>
    <select value={season} onChange={onSeasonChange}>
      { seasons.map( season => (
        <option key={season.toString()} value={season}>{season}</option>
      ))}

    </select>
  </div>
)

export default Select;
