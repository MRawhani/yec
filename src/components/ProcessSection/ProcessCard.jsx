import React from "react";

export default function ProcessCard({ item, next, prev }) {
  return (
    <div
      id={`processCard-${item.index}`}
      className={`processCard ${next ? "next" :prev ? "prev":""}
        
      `}
    >
      <div className="processCard__data">
        <h1 className="processCard__title">{item.title || "Compain"}</h1>
        <div className="processCard__details">
          <p>{item.headline || "Compain"}</p>
          <h5>Outhput:</h5>
          <p>{item.output || "Compain"}</p>
        </div>
        <div className="processCard__number">{item.number || "01"}</div>
      </div>
    </div>
  );
}
