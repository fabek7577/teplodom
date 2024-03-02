import React from "react";
import { Link } from "react-router-dom";

const SectionTitle = ({ children, to }) => {
  if (to) {
    return (
      <div className="flex items-center justify-between mb-8">
        <h1 className="sections-title">{children[0]}</h1>
        <Link to={to} className="text-sm text-[#0077B6] lg:text-lg">
          {children[1].props?.children}
        </Link>
      </div>
    );
  }
  return (
    <div className="mb-8">
      <h1 className="sections-title">{children}</h1>
    </div>
  );
};

export default SectionTitle;
