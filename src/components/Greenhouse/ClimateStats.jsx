import "./ClimateStats.css";
import { useClimate } from "../../context/ClimateContext";
import { useEffect, useState } from "react";

function ClimateStats() {
  const { climate, humidity } = useClimate();
  const [currentTemp, setCurrentTemp] = useState(
    parseInt(localStorage.getItem("currentTemp")) || 0
  );
  const targetTemp = parseInt(climate);
  const [currentHumidity, setCurrentHumidity] = useState(
    parseInt(localStorage.getItem("currentHumidity")) || 0
  );
  const targetHumidity = parseInt(humidity);

  useEffect(() => {
    const stepHumidity = currentHumidity < targetHumidity ? 1 : -1;

    const intervalHumidity = setInterval(() => {
      setCurrentHumidity((prev) => {
        const nextHumidity = prev + stepHumidity;
        localStorage.setItem("currentHumidity", nextHumidity);
        if (
          (stepHumidity === 1 && nextHumidity >= targetHumidity) ||
          (stepHumidity === -1 && nextHumidity <= targetHumidity)
        ) {
          clearInterval(intervalHumidity);
        }
        return nextHumidity;
      });
    }, 1000);
    return () => clearInterval(intervalHumidity);
  }, [humidity, targetHumidity]);

  useEffect(() => {
    const step = currentTemp < targetTemp ? 1 : -1;

    const interval = setInterval(() => {
      setCurrentTemp((prevTemp) => {
        const nextTemp = prevTemp + step;
        localStorage.setItem("currentTemp", nextTemp);
        if (
          (step === 1 && nextTemp >= targetTemp) ||
          (step === -1 && nextTemp <= targetTemp)
        ) {
          clearInterval(interval); // Stop the interval when reaching the target temperature
        }
        return nextTemp;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [climate, targetTemp]);

  return (
    <div className="climate-stats">
      <div className="temperature">Temperature: {currentTemp}°F</div>
      <div className="humidity">Humidity: {currentHumidity}%</div>
    </div>
  );
}

export default ClimateStats;
