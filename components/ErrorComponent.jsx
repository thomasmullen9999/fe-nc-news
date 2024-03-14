import React from 'react';

const ErrorComponent = (props) => {
  const { message } = props;
  if (message) {
    return (
      <div>
        <h2>Error: {message}</h2>
      </div>
    );
    }
};

export default ErrorComponent;