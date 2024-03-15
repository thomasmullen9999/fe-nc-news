import React from 'react';

const ErrorComponent = (props) => {
  const { message } = props;
  if (message) {
    return (
      <div id="error-message">
        <h3>Error: {message}</h3>
      </div>
    );
    }
};

export default ErrorComponent;