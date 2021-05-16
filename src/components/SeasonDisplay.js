import React from 'react';


function getSeason(lat, month){
    if(month > 2 && month < 9){
        return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat > 0 ? 'winter' : 'summer';
    }
};

const SeasonDisplay = (props) => {
    const month = new Date().getMonth();
    const season = getSeason(props.latitude, month);
    const text = season === 'summer' ? "Let's hit the beach!" : "Brr, it's chilly!";
    const icon = season === 'summer' ? 'sun' : 'snowflake';

    return (
        <div>
            <i className={`${icon} icon`}></i>
            <h1>{text}</h1>
            <i className={`${icon} icon`}></i>
        </div>
    );
};

export default SeasonDisplay;