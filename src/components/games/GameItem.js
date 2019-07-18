import React from 'react';
import gamesItemCss from './GameItem.module.css'

const GameItem = ({ game}) => {
  const { id, home_team, home_team_score, status, visitor_team, visitor_team_score} = game;
  return (
    <li key={id} className={gamesItemCss.item}>
      <div className={gamesItemCss.description}>
      <h2>
          {home_team.city} {home_team.name} vs {visitor_team.city} {visitor_team.name}
      </h2>
        <p>Score of {home_team.city} {home_team.name}: {home_team_score}</p>
        <p>Score of {visitor_team.city} {visitor_team.name}: {visitor_team_score}</p>
        <p>Game type: {status}</p>
      </div>
    </li>
  )
}

export default GameItem;
