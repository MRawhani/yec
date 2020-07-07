import React from "react";

export default function NewsCard({item}) {
  return (
    <div className="newsCard">
      <img
        src={`${process.env.PUBLIC_URL}/images/elements/news.jpg`}
        alt="Background of hero yce"
        className={`newsCard__image`}
      />
      <div className="newCard__text">
        <p>
          {item?item.text :"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat,odio! Itaque, nulla rem. Voluptatum, blanditiis rem exercitationem"}
         
        </p>
      </div>
    </div>
  );
}
