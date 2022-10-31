import slack from './images/slack.png';
import github from './images/github.png';
import './socials.css'

export const Socials = () => {
    return (
      <div className='socials__container'>
        <img src={slack} alt='icons' className='slack' />
        <img src={github} alt='icons' className='github' />
      </div>
    );
}