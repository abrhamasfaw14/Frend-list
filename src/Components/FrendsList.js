import React from "react";
import FrendsCard from "./FrendsCard";

function FrendsList(props) {
  return (
    <div style={stylecard}>
      {props.frend.map((frend) => (
        <FrendsCard frend={frend} />
      ))}
    </div>
  );
}
const stylecard = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
export default FrendsList;
