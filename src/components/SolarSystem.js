import React, { Component } from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';
import styles from './SolarSystem.module.css';

class SolarSystem extends Component {
  render() {
    return (
      <div data-testid="solar-system" className={ styles.SolarSystem }>
        <Title headline="Planetas" />
        <div className={ styles.PlanetsList }>
          {planets.map((planet) => (
            <PlanetCard
              planetName={ planet.name }
              planetImage={ planet.image }
              key={ planet.name }
            />
          ))}
        </div>
      </div>
    );
  }
}

export default SolarSystem;
