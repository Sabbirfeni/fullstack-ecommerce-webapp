import React from "react";
import { Link } from "react-router-dom";

function SectionWrapper({ children, sectionTitle, filter = null, url = null }) {
  return (
    <div>
      {/* Section header */}
      <div
        className={`flex ${
          filter && url
            ? "flex-col md:flex-row items-start md:items-center"
            : "flex-row items-center"
        }  justify-between gap-2 md:gap-0 mb-3 md:mb-5`}
      >
        <h1 className="text-md md:text-xl">{sectionTitle}</h1>
        <div
          className={`flex items-center justify-between gap-3 ${
            filter && url ? "w-full md:w-[fit-content]" : "w-[fit-content]"
          } `}
        >
          {filter}
          {url !== null && (
            <Link to={`${url}`} className="text-xs md:text-sm hover:underline">
              See all
            </Link>
          )}
        </div>
      </div>
      {/* Section body */}
      {children}
    </div>
  );
}

export default SectionWrapper;
