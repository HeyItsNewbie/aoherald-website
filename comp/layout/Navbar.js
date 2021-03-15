import Link from 'next/link'
import Select from '../select/Select'
import Profile from '../profile/Profile'

const Navbar = () => {
  return (
    <nav>
      <div className='logo'>
        <Link href='/'><a><b>Need a Logo</b></a></Link>
      </div>
      <div className='menuBtns'>
        <Link href='/killbot'><a className='menuBtn'>Kill Bot</a></Link>
        <Link href='/battlebot'><a className='menuBtn'>Battle Bot</a></Link>
        <Link href='/regearbot'><a className='menuBtn'>Regear Bot</a></Link>
        <Link href='/botadmin/killbot'><a className='menuBtn'>Managed</a></Link>
      </div>
      <Select />
      <Profile />
    </nav>
  )
}

export default Navbar
