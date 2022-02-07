import './Footer.css'
import FacebookIcon from '@material-ui/icons/Facebook'
import TwitterIcon from '@material-ui/icons/Twitter'
import InstagramIcon from '@material-ui/icons/Instagram'
import { about } from '../../portfolio'


const Footer = () => {

  const {social} = about
  return (
<footer className='footer'>
    <a
      href={social.facebook}
      className='icon'
    >
      <FacebookIcon />
    </a>
    <a
      href={social.twitter}
      className='icon'
    >
      <TwitterIcon />
    </a>
    <a
      href={social.instagram}
      className='icon'
    >
      <InstagramIcon />
    </a>
  </footer>
  )
  }

export default Footer
