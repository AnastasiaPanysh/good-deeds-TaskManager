import { Link } from 'react-router-dom';
import footer from './Footer.module.css';
import Button from '@mui/material/Button';

const Footer = () => {
  return (
    <div className={footer['footer-wrapper']}>
      <div className={footer['footer-wrapper_nav']}>
        <Button variant="text">About</Button>
        <Button variant="text">Contacts</Button>
        <Button variant="text">Users</Button>
      </div>

      <p>nastya.panysh@gmail.com</p>
    </div>
  );
};

export default Footer;
