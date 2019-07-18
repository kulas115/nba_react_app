import React from 'react';
import gamesCss from './Games.module.css'
import GameItem from './GameItem';
import Button from "../nav/Button";

const Games = ({
  games,
  page,
  season,
  onNextPage,
  onPreviousPage
}) => (
  <section>
      <h2 className={gamesCss.header}>Season {season}</h2>
    <ul className={gamesCss.games}>
      {games.map( game => (
        <GameItem key={game.id} game={game} />
      ))}
    </ul>
    <div className={gamesCss.pagination}>
      <Button onClick={onPreviousPage}>Previous page</Button>
      <span className={gamesCss.pageNumber}>Current page: {page}</span>
      <Button onClick={onNextPage}>Next page</Button>
    </div>
  </section>
)

export default Games
