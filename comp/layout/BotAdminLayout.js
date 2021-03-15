import BotAdminMenu from './BotAdminMenu'

const BotAdminLayout = ({ children }) => {
  return (
    <div className="grid grid-cols-7 gap-4">
      <BotAdminMenu />
      {children}
    </div>
  )
}

export default BotAdminLayout