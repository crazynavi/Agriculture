import React from 'react'
import Broken_clouds from '../../assets/Weather_Icons/Broken_Clouds.png';
import Clear_Night from '../../assets/Weather_Icons/Clear_Night.png'
import Clear_Sunny from '../../assets/Weather_Icons/Clear_Sunny.png'
import Few_Clouds_Night from '../../assets/Weather_Icons/Few_Clouds_Night.png'
import Few_Clouds_Sun from '../../assets/Weather_Icons/Few_Clouds_Sun.png'
import Mist from '../../assets/Weather_Icons/Mist.png'
import Rain_Day from '../../assets/Weather_Icons/Rain_Day.png'
import Rain_Night from '../../assets/Weather_Icons/Rain_Night.png'
import Rain_Showers from '../../assets/Weather_Icons/Rain_Showers.png'
import Scattered_Clouds from '../../assets/Weather_Icons/Scattered_Clouds.png'
import Snow from '../../assets/Weather_Icons/Snow.png'
import Thunder_Storm from '../../assets/Weather_Icons/Thunder_Storm.png'

function WeatherImg(props) {
    var imageLink;
    switch(props.icon){
        case '01d':
            imageLink = <img src={Clear_Sunny} alt="" />
            break;

        case '01n':
            imageLink = <img src={Clear_Night} alt="" />          
            break;

        case '02d':
            imageLink = <img src={Few_Clouds_Sun}  alt=""/>          
            break;

        case '02n':
            imageLink = <img src={Few_Clouds_Night} alt="" /> 
            break;

        case '03d':
            imageLink = <img src={Scattered_Clouds} alt="" /> 
            break;

        case '04d':
            imageLink = <img src={Broken_clouds} alt="" /> 
            break;

        case '09d':
            imageLink = <img src={Rain_Showers} alt="" /> 
            break;
            
        case '10d':
            imageLink = <img src={Rain_Day} alt="" /> 
            break;

        case '10n':
            imageLink = <img src={Rain_Night} alt="" /> 
            break;

        case '11d':
            imageLink = <img src={Thunder_Storm} alt="" /> 
            break;

        case '13d':
            imageLink = <img src={Snow}  alt=""/> 
            break;

        case '50d':
            imageLink = <img src={Mist}  alt=""/> 
            break;

        default:
            imageLink = <img src={Clear_Sunny} alt="" />             
    }
    
  return (
    <div className='weatherImg'>                    
        {imageLink}
    </div>
  )
}

export default WeatherImg
