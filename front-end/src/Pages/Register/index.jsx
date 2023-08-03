import React from 'react';
import classNames from 'classnames/bind';
import styles from './Register.module.scss';
import background from '../../Components/Assets/background.png';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
const cx = classNames.bind(styles);

function Register() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: '',
      name: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Invalid Email')
        .required('You must fill in this section !'),
      name: Yup.string()
        .min(5, ' Your name must be at least 5 charactest')
        .max(20, 'Your name must be under 20 charactest')
        .required('You must fill in this section !'),
      password: Yup.string()
        .min(8, ' Your name must be at least 8 charactest')
        .max(16, 'Your name must be under 16 charactest')
        .required('You must fill in this section !'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password')], 'Password does not match !')
        .required('You must fill in this section !'),
    }),
    onSubmit: async (values) => {
      try {
        const newValue = {
          name: values.name,
          email: values.email,
          password: values.password,
        };
        const res = await axios.post(
          'http://localhost:5000/register',
          newValue
        );
        var token = res.data;
        // localStorage.setItem('token', token);
        navigate('/');
      } catch (err) {}
    },
  });

  return (
    <div className={cx('register')}>
      <div className={cx('background')}>
        <img src={background} alt="" />
      </div>
      <div className={cx('form-register')}>
        <h1>Register</h1>
        <div className={cx('input-log')}>
          <form onSubmit={formik.handleSubmit}>
            <label for="">Email</label>
            <input
              type="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              placeholder="Enter your e-mail"
            />
            {formik.errors.email && formik.touched.email && (
              <p className={cx('error')}>{formik.errors.email}</p>
            )}
            <label for="">Name</label>
            <input
              type="text"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              placeholder="Enter your name"
            />
            {formik.errors.name && formik.touched.name && (
              <p className={cx('error')}>{formik.errors.name}</p>
            )}
            <label for="">Password</label>
            <input
              type="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              placeholder="Enter your password"
            />
            {formik.errors.password && formik.touched.password && (
              <p className={cx('error')}>{formik.errors.password}</p>
            )}
            <label for="">Repeat Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              placeholder="Confirm your password"
            />
            {formik.errors.confirmPassword &&
              formik.touched.confirmPassword && (
                <p className={cx('error')}>{formik.errors.confirmPassword}</p>
              )}
            <button type="submit">Register</button>
            {/* <input type="submit" value="Submit Form" /> */}
          </form>
        </div>
        <div className={cx('function-log')}>
          <Link to="/login">
            <h3>Sign-In</h3>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Register;
