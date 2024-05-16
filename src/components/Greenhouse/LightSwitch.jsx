import './LightSwitch.css';
import { ThemeContext } from '../../context/ThemeContext';
import { useContext } from 'react';

function LightSwitch() {
  const { themeName , toggleTheme } = useContext(ThemeContext)

  return (
    <div className={`light-switch ${themeName}`} onClick={toggleTheme}>
     
      <div className="on">DAY</div>

     
      
        <div className="off">NIGHT</div>
      
    </div>
  );
}

export default LightSwitch;
