import React, { Redirect } from 'react';

function withAthCheck(Component, props) {
    if (localStorage.getItem('token')) {
      return <Component {...props} />
    }
    return <Redirect to='/' />;
  }

  export default withAthCheck;