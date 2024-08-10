import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire, faGamepad, faCrown } from "@fortawesome/free-solid-svg-icons";

const InfoCards = () => {
  const cards = [
    { icon: faFire, text: "Popular Games" },
    { icon: faGamepad, text: "New Releases" },
    { icon: faCrown, text: "Top Genres" },
  ];

  return (
    <div className="flex flex-col items-center justify-center gap-6 text-center min-[820px]:justify-start md:flex-row xl:gap-12">
      {cards.map((card, index) => (
        <div
          key={index}
          className="card min-[780px]:max-[1025px]:w-[170px] min-[780px]:max-[1025px]:h-[200px]"
        >
          <FontAwesomeIcon icon={card.icon} className="cardIcon text-[2rem]" />
          <p>{card.text}</p>
        </div>
      ))}
    </div>
  );
};

export default InfoCards;
