import './header.css';
import image from './images/profile__img.png';

const Header = () => {
  return (
    <section>
      <div className='container__img'>
        <img src={image} alt='profile image' id='profile__img' />
      </div>
      <h1 className='name'>Miracle Ugorji</h1>
      <h2 className='hidden__name' id='slack'>
        Miracle
      </h2>
    </section>
  );
};
export default Header;
