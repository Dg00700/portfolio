import React from "react";

function TimelineItem(props) {
  return (
    <div className="timeline-item is-success">
      <div className="timeline-marker is-image is-32x32">
        <img src={props.image} alt="" />
      </div>
      <div className="timeline-content">
        <p className="heading">{props.startDate} - {props.endDate}</p>
        <h6 style={{fontSize: '30px',margin: '3px'}}>{props.client}</h6>
        <h6 style={{fontSize: '30px',margin: '3px'}}>{props.position}</h6>
        <p style={{maxWidth: '35em'}}>{props.summary}</p>
      </div>
    </div>
  );
}

export default TimelineItem
