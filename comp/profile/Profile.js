import Image from 'next/image'

const Profile = () => {
  return (
    <>
      <Image src='/inc/images/default-profile.webp' className="" width='42px' height='42px' />
      <span className="ml-5">ItsNewbie</span>
      <span className="ml-5">
        <i className='material-icons text-red-500' style={{fontSize: 48}}>exit_to_app</i>
      </span>
    </>
  )
}

export default Profile
