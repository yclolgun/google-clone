import './Home.css';
import { Link } from 'react-router-dom';
import AppsIcon from '@mui/icons-material/Apps';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Search from '../components/Search';

function Home() {
  return (
    <div className='home'>
      <div className='home__header'>
        <div className='home__header-left'>
          <Link to='/about'>About</Link>
          <Link to='/store'>Store</Link>
        </div>
        <div className='home__header-right'>
          <Link to='/gmail'>Gmail</Link>
          <Link to='/images'>Images</Link>
          <AppsIcon />
          <AccountCircleIcon />
        </div>
      </div>

      <div className='home__body'>
        <img
          src='https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
          alt='Google Logo'
        />

        <div className='home__input-container'>
          <Search />
        </div>
      </div>
    </div>
  );
}

export default Home;
