import image from './profile__img.png';
const Header = () => {
  return (
    <section>
      <div>
        <div className='container__img'>
          <img src={image} alt='profile image' id='profile__img' />
        </div>
        <h1>Miracle Ugorji</h1>
        <h2 id='slack'>Miracle</h2>
      </div>
    </section>
  );
};
export default Header;
