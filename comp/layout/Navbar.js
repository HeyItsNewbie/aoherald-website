import Link from 'next/link'
import Select from '../select/Select'
import Profile from '../profile/Profile'

const Navbar = () => {
  return (
    <nav>
      <div className='logo'>
        <Link href='/'><a><b>Need a Logo</b></a></Link>
      </div>
      <Link href='/killbot'><a>Kill Bot</a></Link>
      <Link href='/battlebot'><a>Battle Bot</a></Link>
      <Link href='/regearbot'><a>Regear Bot</a></Link>
      <Select />
      <Profile />
    </nav>
  )
}

export default Navbar
