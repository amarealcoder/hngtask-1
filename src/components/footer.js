import './footer.css';
import zuri from './images/zuri.png';
import i4g from './images/I4G.png';
// import text from './images/text.png';

export const Footer = () => {
    return (
      <footer>
        <img src={zuri} alt='zuri logo' />
        {/* <img src={text} alt='text' /> */}
        <p>HNG Internship 9 Frontend Track</p>
        <img src={i4g} alt='i4g logo' />
      </footer>
    );
}