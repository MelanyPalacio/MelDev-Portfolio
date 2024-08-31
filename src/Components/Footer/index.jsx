import TwitterLogo from '../../Assets/Twitter.svg'
import GithubLogo from '../../Assets/Github.svg'
import LinkedinLogo from '../../Assets/Linkedin.svg'
import BehanceLogo from '../../Assets/Behance.svg'
import DribbbleLogo from '../../Assets/Dribbble.svg'
import MediumLogo from '../../Assets/Medium.svg'
import './index.css'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='social-media'>
        <a href="https://github.com/MelanyPalacio" target="_blank" className='social-media__link'>
          <img src={GithubLogo} alt="Github logo" className='social-media__icon' />
        </a>
        <a href="https://www.linkedin.com/in/melanypalaciof/" target="_blank" className='social-media__link'>
          <img src={LinkedinLogo} alt="Linkedin logo" className='social-media__icon' />
        </a>
        <a href="https://medium.com/@melanypalacio.dev" target="_blank" className='social-media__link'>
          <img src={MediumLogo} alt="Medium logo" className='social-media__icon' />
        </a>
      </div>
      <p className='footer__text'>
        <span>
          © 2024. All Rights Reserved to Melany Palacio F.
        </span>
      </p>
    </div>
  )
}

export default Footer