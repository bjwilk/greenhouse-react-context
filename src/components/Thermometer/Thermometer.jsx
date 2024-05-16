import ReactSlider from 'react-slider';
import './Thermometer.css';
import { useClimate } from '../../context/ClimateContext'; // Import useClimate

function Thermometer() {
  const { climate, setClimate } = useClimate(); // Use useClimate
  
  const handleTemperatureChange = (e) => {
    setClimate(e);
  };

  return (
    <section>
      <h2>Thermometer</h2>
      <div className="actual-temp">Actual Temperature: {climate}°F</div>
      <ReactSlider
        value={climate} // Set value to the climate state
        onAfterChange={handleTemperatureChange} // Update climate state on slider change
        className="thermometer-slider"
        thumbClassName="thermometer-thumb"
        trackClassName="thermometer-track"
        ariaLabel={"Thermometer"}
        orientation="vertical"
        min={0}
        max={120}
        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
        invert
        pearling
        minDistance={1}
      />
    </section>
  );
}

export default Thermometer;
