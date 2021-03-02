import Image from 'next/image'
import styles from '../../styles/Profile.module.css'

const Profile = () => {
  return (
    <>
      <Image src='/inc/images/default-profile.webp' className={styles.profileImg} width='42px' height='42px' />
      <i class='material-icons' style={{ position: 'absolute', fontSize: '48px', top: '10px' }}>exit_to_app</i>
    </>
  )
}

export default Profile
