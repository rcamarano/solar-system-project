import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './PlanetCard.module.css';
import './planetsProportions.css';

class PlanetCard extends Component {
  render() {
    const { planetName, planetImage } = this.props;
    return (
      <div data-testid="planet-card" className={ styles.PlanetCard }>
        <p data-testid="planet-name">{ planetName }</p>
        <img
          src={ planetImage }
          alt={ `Planeta ${planetName}` }
          className={ planetName }
        />
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string,
  planetImage: PropTypes.string,
};

PlanetCard.defaultProps = {
  planetName: 'Add a PlanetCard',
  planetImage: 'Add a image',
};

export default PlanetCard;
