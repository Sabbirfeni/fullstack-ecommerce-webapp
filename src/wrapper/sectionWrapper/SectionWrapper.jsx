import React from "react";
import { Link } from "react-router-dom";

function SectionWrapper({ children, sectionTitle, filter = null, url = null }) {
  return (
    <div>
      {/* Section header */}
      <div className="flex items-center justify-between mb-3 md:mb-5">
        <h1 className="text-md md:text-xl">{sectionTitle}</h1>
        {filter}
        {url !== null && (
          <Link to={`${url}`} className="text-xs md:text-sm hover:underline">
            See all
          </Link>
        )}
      </div>
      {/* Section body */}
      {children}
    </div>
  );
}

export default SectionWrapper;
