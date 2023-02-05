import { useState } from 'react';
import { Link } from 'react-router-dom';
import style from './Login.module.css';
import { TextField, FormControl, Input, InputLabel, InputAdornment, IconButton, Button } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const Login = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const [values, setValues] = useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const changeForm = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className={style['login']}>
      <div className={style['content']}>
        <div className={style['mycontain']}>
          <div className={style['block-logo-login']}>
            <h2>Log In</h2>
          </div>
          <div className={style['block-login']}>
            <TextField variant="standard" name="email" onChange={changeForm} label="Email" />

            <FormControl variant="standard">
              <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
              <Input
                name="password"
                type={values.showPassword ? 'text' : 'password'}
                value={values.password}
                onChange={handleChange('password')}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {values.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
          </div>
          <div className={style['block-bottom']}>
            <Button
              variant="contained"
              onClick={async () => {
                alert('ok')
              }}
            >
              Log In
            </Button>
          </div>
          <p className={style['mycontain--reg']}>
            Don't have an account?
            <Link to={'/register'} className={style['mycontain--reg-link']}>
              <Button>Register</Button>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Login;
