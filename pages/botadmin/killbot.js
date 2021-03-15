import Link from 'next/link'
import BotAdminLayout from '../../comp/layout/BotAdminLayout'

const KilLBot = () => {
  return (
    <BotAdminLayout>
      <div className="col-span-6">
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Kill Bot Guild Config
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              You can only track 1 guild. Premium subscribers will be able to define more guilds to monitor.
            </p>
          </div>
          <div className="border-t border-gray-200">
            <dl>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-5 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  <label for="first_name" class="block text-sm font-medium text-gray-700">Guild Name</label>
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  <input type="text" name="guild_name" id="guild_name" placeHolder="guild-name" className="inputBox" />
                  <button className="inputBtn ml-10">Add Guild</button>
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <div className="bg-white shadow overflow-hidden sm:rounded-lg mt-10">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Kill Bot Player Config
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              You can only track up to 5 players. Premium subscribers will be able to define more players to monitor.
            </p>
          </div>
          <div className="border-t border-gray-200">
            <dl>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-5 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Full name
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  Margot Foster
                </dd>
              </div>
            </dl>
          </div>
        </div>        
      </div>
    </BotAdminLayout>
  );
}
 
export default KilLBot;