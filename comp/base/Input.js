const Input = ({ type, name, id, placeholder, value, classes }) => {
  return (
    <>
      <input type={type} name={name} id={id} placeholder={placeholder} value={value} className={classes + ' inputBox'} />
    </>
  )
}

export default Input
