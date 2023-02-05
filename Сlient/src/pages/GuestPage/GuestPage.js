import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import style from './GuestPage.module.css';
import Button from '@mui/material/Button';

const GuestPage = () => {

  return (
    <div>
      <Header></Header>

      <div className={style['guest-wrapper']}>
        <div>
          <h1>Task Manager</h1>
          <p>Do good tasks - from small things to something really important</p>
          <Button variant="contained">Get Started</Button>
        </div>
        <div className={style['guest-wrapper_img']}></div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default GuestPage;
