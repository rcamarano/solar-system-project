import React, { Component } from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';
import styles from './Missions.module.css';

class Missions extends Component {
  render() {
    return (
      <div data-testid="missions" className={ styles.Missions }>
        <Title headline="Missões" />
        <div className={ styles.MissionsList }>
          {missions.map((mission) => (
            <MissionCard
              key={ mission.name }
              name={ mission.name }
              year={ mission.year }
              country={ mission.country }
              destination={ mission.destination }
            />))}
        </div>
      </div>
    );
  }
}

export default Missions;
