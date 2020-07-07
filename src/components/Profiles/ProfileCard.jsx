import React from "react";

export default function ProfileCard({item,right}) {
  return (
    <div className={`${right? "profileCard-right":"profileCard "}`}>
      <img
        src={`${process.env.PUBLIC_URL}/images/elements/news.jpg`}
        alt="Background of hero yce"
        className={`${right? "profileCard-right__image":"profileCard__image  "}`}
      />
      <div className={`${right? "profileCard-right__text":"profileCard__text  "}`}>
        <h1>Mohammed Ali</h1>
        <p>
          {item
            ? item.text
            : "Lorem ipsum dolor sit amet consectetur, orem ipsum dolor sit amet consectetur, orem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat,odio! Itaque, nulla rem. Voluptatum, blanditiis rem exercitationem"}
        </p>
      </div>
    </div>
  );
}
