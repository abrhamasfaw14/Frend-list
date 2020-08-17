import React from "react";
import "./frende.css";
function FrendsCard(props) {
  return (
    <div className="container" style={stylefrendscard}>
      <div>
        <img src={props.frend.photo} alt="person Image" />
      </div>
      <div>
        <p className="para-one">Name: {props.frend.name}</p>
        <p className="para-two">Occupation: {props.frend.occupation}</p>
        <p className="para-three">Location: {props.frend.location}</p>
      </div>
    </div>
  );
}
const stylefrendscard = {
  //display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  // backgroundColor: "#ffffff",
  width: "100%",
  padding: "5px 0",
  //height: "50px",
  margin: "10px 0",

  //borderRadius: "7px",
};
export default FrendsCard;
