import { Link } from 'react-router-dom';
import { useState } from 'react';
import student from './Registry.module.css';
import { TextField, FormControl, Input, InputLabel, InputAdornment, IconButton, Button } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const Registry = () => {

  const [form, setForm] = useState({
    name: '',
    surname: '',
    email: '',
    password: '',
    role: 1,
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
    <div className={student['student']}>
      <div className={student['content']}>
        <div className={student['mycontain']}>
          <div className={student['block-logo-student']}>
            <h2>Create your account</h2>
          </div>
          <div className={student['block-student']}>
            <TextField variant="standard" name="name" onChange={changeForm} label="Name" />
            <TextField variant="standard" name="surname" onChange={changeForm} label="Surname" />
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
          <div className={student['block-bottom']}>
            <div
              onClick={async () => {
                alert('ok')
              }}
            >
              <Button variant="contained">Next</Button>
            </div>
          </div>
          <p className={student['mycontain--log']}>
            Already have an account?
            <Link to={'/login'} className={student['reg-link']}>
              Log In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Registry;
