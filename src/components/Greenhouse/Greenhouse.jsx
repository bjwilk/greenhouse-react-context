import { useContext } from 'react';
import dayImage from './images/greenhouse-day.jpg';
import nightImage from './images/greenhouse-night.jpg';
import './Greenhouse.css';
import { ThemeContext } from '../../context/ThemeContext';

import LightSwitch from './LightSwitch';
import ClimateStats from './ClimateStats';

function Greenhouse() {
const { themeName } = useContext(ThemeContext)

const imageSrc = themeName === "day" ? dayImage : nightImage;

  return (
    <section>
      <img  className='greenhouse-img'
            src={imageSrc}
            alt='greenhouse' 
      />
      <LightSwitch />
      <ClimateStats />
    </section>
  );
}

export default Greenhouse;
