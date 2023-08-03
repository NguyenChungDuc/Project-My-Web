import React from 'react';
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import classNames from 'classnames/bind';
import styles from './Login.module.scss';
import background from '../../Components/Assets/background.png';
import axios from 'axios';
import jwt from 'jwt-decode';

const cx = classNames.bind(styles);
const LoginPage = () => {
  //   const [formError, setFormError] = useState(null);
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Invalid Email')
        .required('You must fill in this section !'),
      password: Yup.string()
        .min(8, ' Your name must be at least 8 charactest')
        .max(16, 'Your name must be under 16 charactest')
        .required('You must fill in this section !'),
    }),
    onSubmit: async (values) => {
      try {
        const getValue = { email: values.email, password: values.password };
        const res = await axios.post('http://localhost:5000/login', getValue);

        var token = res.data;
        localStorage.setItem('token', token);

        var payload = jwt(token);
        if (payload['role'] === 'user') {
          navigate('/');
        } else {
          navigate('/homedashboard');
        }
      } catch (err) {
        alert('Email or password incorrect ! ');
      }
    },
  });
  return (
    <div className={cx('login')}>
      <div className={cx('background')}>
        <img src={background} alt="" />
      </div>
      <div className={cx('form-login')}>
        <h1>LogIn</h1>
        <div className={cx('input-log')}>
          <form onSubmit={formik.handleSubmit}>
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Enter your e-mail"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
            {formik.errors.email && formik.touched.email && (
              <p className={cx('error')}>{formik.errors.email}</p>
            )}
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
            />
            {formik.errors.password && formik.touched.password && (
              <p className={cx('error')}>{formik.errors.password}</p>
            )}
            <button type="submit">Log In</button>
          </form>
        </div>
        <div className={cx('function-log')}>
          <div className={cx('form-function')}>
            <p>Did you forget your password ?</p>
            <p className={cx('resert-pass')}>Reset Password</p>
          </div>
          <Link to="/register">
            <h3>Create Account</h3>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
