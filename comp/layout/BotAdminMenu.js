import Link from 'next/link'

const BotAdminMenu = () => {
  return (
    <div className="container">
      <ul>
        <li className="p-8"><Link href='/botadmin/killbot'><a className='adminMenuBtn'>Kill Bot</a></Link></li>
        <li className="p-8"><Link href='/botadmin/battlebot'><a className='adminMenuBtn'>Battle Bot</a></Link></li>
        <li className="p-8"><Link href='/botadmin/regearbot'><a className='adminMenuBtn'>Regear Bot</a></Link></li>
      </ul>
    </div>
  );
}
 
export default BotAdminMenu;