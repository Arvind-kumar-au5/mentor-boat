import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../Layout/Spinner';

const PrivateRoute = ({
  component: Component,
  auth: { isAuthenticated, loading },
  mentor : {misAuthenticated,mloading},
  ...rest
}) => (
  <Route
    {...rest}
    render={props =>
      
       isAuthenticated || misAuthenticated   ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);

PrivateRoute.propTypes = {
  auth: PropTypes.object.isRequired,
  mentor : PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  auth: state.register,
  mentor : state.mentor
});

export default connect(mapStateToProps)(PrivateRoute);