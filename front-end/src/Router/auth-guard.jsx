import React from 'react';
import jwt from 'jwt-decode';
import { Navigate } from 'react-router-dom';

// requireRoles = 'admin'
// requireRoles = ['admin', 'user']
function AuthGuard({ children, requireRoles }) {
  var passed = false;
  const token = localStorage.getItem('token');
  console.log(requireRoles);
  console.log(token);

  // Require login
  if (token == null) {
    console.log(0);
    return <Navigate to="/login" />;
  }

  // In case not require any role
  if (!requireRoles) {
    passed = true;
  }

  if (token) {
    // token 12ej21bebnjabdjhadjn1
    var payload = jwt(token);
    console.log(payload);

    // In case requireRole is an Array
    if (
      Array.isArray(requireRoles) &&
      Array.from(requireRoles).includes(payload['role'])
    ) {
      passed = true;

      // In case requireRole is a String
    } else if (
      Array.isArray(requireRoles) === false &&
      requireRoles === payload['role']
    ) {
      passed = true;
    }
  }
  console.log(passed);

  if (passed) {
    return <>{children}</>;
  } else {
    return <Navigate to="/pagenotfound" />;
  }
}

export default AuthGuard;
