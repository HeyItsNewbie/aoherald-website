import Input from '../base/Input'

const InputList = ({ name, list }) => {
  const showList = () => {
    return (
      list.map(element => {
        return (
          <div key={element.name}>
            {element.name}
          </div>
        )
      })
    )
  }

  return (
    <>
      <dt className='text-sm font-medium text-gray-500'>
        <label htmlFor='first_name' className='block text-sm font-medium text-gray-700'>{name} Name</label>
      </dt>
      <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
        <Input type='text' name='guild_name' id='guild_name' placeholder='guild-name' classes='' />
        <button className='inputBtn ml-10'>Add Guild</button>
      </dd>
      <dd>
        {showList()}
      </dd>
    </>
  )
}

export default InputList
