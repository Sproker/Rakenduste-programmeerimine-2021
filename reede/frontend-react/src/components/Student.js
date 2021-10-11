import React from "react"

function Student (props){
    const isStudent = props.isStudent

    if ((isStudent) && (props.semester <= 6) && (props.semester > 0)) {
      return <p>Olete {props.semester}-das semestris praegu.</p>

    }else if ((isStudent) && (props.semester >= 7)) {
        return <p>Olete {props.semester - 6} semestrit üle aja õppinud.</p>

    }else if(isStudent === false){
        return <p>Kool läbi, hurraa</p>;
    }
    return <p>Tundmatu viga, proovige uuesti.</p>;
}

export default Student