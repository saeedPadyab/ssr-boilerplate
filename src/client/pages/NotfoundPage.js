import React from "react";

const NotFoundPage = ({ staticContext = {} }) => {
  staticContext.notFound = true;
  return (
    <div className="center-align" style={{ marginTop: 200 }}>
      <h3>Ooops!Not Found Page.</h3>
      <p>Choose one of the pages exist on header</p>
    </div>
  );
};

export default {
  component: NotFoundPage
};
