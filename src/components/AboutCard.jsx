import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faListCheck,
  faThumbTack,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

export const AboutCard = ({ title, icon, description }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 p-8 shadow-xl rounded-xl">
      <FontAwesomeIcon
        icon={
          icon == "faListCheck"
            ? faListCheck
            : icon == "faThumbTack"
            ? faThumbTack
            : faCheck
        }
        className="w-4 p-2 rounded-full bg-text text-background"
      />
      <h3 className="text-xl font-bold sm:text-[1.5rem] mb-2 ">{title}</h3>
      <p className="text-sm sm:text-base xl:text-lg text-[#474747]">
        {description}
      </p>
    </div>
  );
};

AboutCard.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
  description: PropTypes.string.isRequired,
};
