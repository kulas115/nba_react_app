import React from 'react';
import main from './Main.module.css';
import Games from '../games/Games'
import Navigation from '../nav/Navigation'

class Main extends React.Component {
  state = {
    games: [],
    total_pages: 1,
    page: 1,
    url: `https://free-nba.p.rapidapi.com/games?`,
    gamesUrl: `https://free-nba.p.rapidapi.com/games?page=1&per_page=10&seasons[]=1996`,
    season: 1996,
    seasons: [
      1996,
      1997,
      1998
    ]
  }

  componentDidMount() {
    this.fetchGames(this.state.gamesUrl);
  }

  componentDidUpdate(nextProps, prevState) {
    if (this.state.gamesUrl !== prevState.gamesUrl) {
      this.fetchGames(this.state.gamesUrl)
    }
    if (this.state.page !== prevState.page) {
      this.generateUrl();
    }
    if (this.state.season !== prevState.season) {
      this.generateUrl();
    }
  }

  onSeasonChange = e => {
    this.setState({ season: parseInt(e.target.value) })
  }

  onFilterButtonClick = () => {
    this.setState({page: 1});
    this.generateUrl();
  }

  generateUrl = () => {
    const { page, season } = this.state;

    const gamesUrl = this.state.url + `page=${page}&per_page=10&seasons[]=${season}`;

    this.setState({ gamesUrl })
  }

  fetchGames = url => {
    fetch(url, {
      headers: {
        "X-RapidAPI-Host": "free-nba.p.rapidapi.com",
        "X-RapidAPI-Key": "5e3035eaf9msh9b689d46eb3b698p12a06cjsnf567ae3971e1"
      }
    }
    ).then(response => response.json())
    .then(data => this.storeGames(data))
    .catch(error => console.log(error));
  }

  storeGames = data => {
    const games = data.data.map(result => {
      const {
        id,
        home_team,
        home_team_score,
        season,
        visitor_team,
        visitor_team_score,
        status
      } = result;
      return { id, home_team, home_team_score, season, visitor_team, visitor_team_score, status };
    });
    this.setState({ games, total_pages: data.meta.total_pages })
  }

  onNextPage = () => {
    const { page, total_pages } = this.state
    const newPage = page + 1;
    if (newPage <= total_pages) {
      this.setState({ page: newPage })
    }
  }

  onPreviousPage = () => {
    const newPage = this.state.page - 1;
    if ( newPage > 0 ) {
      this.setState({ page: newPage })
    }
  }

  render() {
    return (
      <section className={main.main} >
      <Navigation
        onSeasonChange={this.onSeasonChange}
        onFilterButtonClick={this.onFilterButtonClick}
        {...this.state}
      />
        <Games
          games={this.state.games}
          page={this.state.page}
          season={this.state.season}
          onNextPage={this.onNextPage}
          onPreviousPage={this.onPreviousPage}
        />
      </section>
    )
  }
}

export default Main;
