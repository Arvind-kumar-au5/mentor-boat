import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const PrivateRoute = ({
  component: Component,
  mentor : {misAuthenticated},
  ...rest
}) => (
  <Route
    {...rest}
    render={props =>
      
        misAuthenticated  ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);

PrivateRoute.propTypes = {
  mentor : PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  mentor : state.mentor
});

export default connect(mapStateToProps)(PrivateRoute);