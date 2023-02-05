import React from 'react';
import { Link } from 'react-router-dom';
import style from './Header.module.css';
import { Button } from '@mui/material';

const Header = () => {

  return (
    <div className={style['wrapper']}>
      <Link to={'/'}>
        <h1 className={style['logo']}>tasks.</h1>
      </Link>

      <div className={style['nav-links-right']}>
        <Link to={'/login'} className={style['nav-link']}>
          <Button variant="default">Login</Button>
        </Link>

        <Link to={'/register'}>
          <Button variant="outlined" color="primary">
            Sign up
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
