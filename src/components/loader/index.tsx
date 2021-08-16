import React from "react";

const Loader = React.forwardRef<HTMLDivElement>((_props, ref) => (
  <div className="spinner-border text-dark" role="status">
    <span className="visually-hidden">Loading...</span>
  </div>
));

export default Loader