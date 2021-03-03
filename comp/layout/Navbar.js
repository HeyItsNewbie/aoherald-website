import Link from 'next/link'
import Select from '../select/Select'
import Profile from '../profile/Profile'

const Navbar = () => {
  return (
    <nav>
      <div className='logo'>
        <Link href='/'><a><b>Need a Logo</b></a></Link>
      </div>
      <Link href='/killbot'><a className="bg-gray-100 p-2 border-gray-500 border-4 rounded-xl hover:bg-gray-700 hover:text-white">Kill Bot</a></Link>
      <Link href='/battlebot'><a className="p-2 border-grey-500 border-4 rounded-xl">Battle Bot</a></Link>
      <Link href='/regearbot'><a className="p-2 border-grey-500 border-4 rounded-xl">Regear Bot</a></Link>
      <Select />
      <Profile />
    </nav>
  )
}

export default Navbar
