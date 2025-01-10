import React from "react";
import { Helmet } from "react-helmet";
const HelmetReact = ({ title }) => {
  return (
    <Helmet>
      <title>{title} || SKYLYTICS</title>
      <meta name="description" content="SKYLYTICS " />
    </Helmet>
  );
};

export default HelmetReact;
