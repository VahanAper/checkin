import React from 'react';

const Header = ({ title }) => {
  return (
    <div className="row header">
      <div className="col-md-12">
        <h1>{title}</h1>
      </div>
    </div>
  );
};

export { Header };
