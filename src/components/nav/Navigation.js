import React from 'react';
import navigationCss from './Navigation.module.css'
import Select from './Select';
import Button from './Button';

const Navigation = ({
  season,
  seasons,
  onSeasonChange,
  onFilterButtonClick
}) => (
      <section className={navigationCss.navigation}>
        <Select
          season={season}
          seasons={seasons}
          onSeasonChange={onSeasonChange}
        />

        <Button onClick={onFilterButtonClick}>
          Filter
        </Button>

      </section>
)

export default Navigation;
