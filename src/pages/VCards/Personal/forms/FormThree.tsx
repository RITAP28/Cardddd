type UserFormProps = {
  favSeason: string;
  lifestyle: string;
  maritalStatus: string;
  modeOfTravel: string;
  favQuotes: string;
  partyEnthusiast: string,
  petLover: string
};

type Update = UserFormProps & {
  updateFields: (fields: Partial<UserFormProps>) => void;
};

const FormThree = ({ favSeason, lifestyle, maritalStatus, modeOfTravel, favQuotes, petLover, partyEnthusiast, updateFields }: Update) => {
  return (
    <>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Favourite Season:
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="favSeason"
          type="text"
          placeholder="Favourite Season"
          value={favSeason}
          onChange={e => updateFields({favSeason: e.target.value})}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Preferred Mode of Travel:
        </label>
        <select
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-red-400 font-mono"
          id="modeOfTravel"
          value={modeOfTravel}
          onChange={e => updateFields({modeOfTravel: e.target.value})}
        >
          <option selected>Choose a mode</option>
          <option value="plane">Airplane</option>
          <option value="car">Car</option>
          <option value="train">Train</option>
          <option value="cruise">Cruise</option>
        </select>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline mt-4"
          id="otherTravelModes"
          type="text"
          placeholder="Other (Optional)"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Favourite Quotes/Mottos:
        </label>
        <select
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-red-400 font-mono"
          id="favQuotes"
          value={favQuotes}
          onChange={e => updateFields({favQuotes: e.target.value})}
        >
          <option selected>Choose any type</option>
          <option value="inspirational">Inspirational</option>
          <option value="funny">Funny</option>
          <option value="motivational">Motivational</option>
        </select>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline mt-4"
          id="other"
          type="text"
          placeholder="Other (Optional)"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Lifestyle:
        </label>
        <textarea
          id="lifestyle"
          rows={4}
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Lifestyle..."
          value={lifestyle}
          onChange={e => updateFields({lifestyle: e.target.value})}
        ></textarea>
      </div>
      {/* have to look for a way to store these boolean value */}
      <div className="mb-4 flex justify-between">
        <label className="block text-gray-700 text-sm font-bold mb-1">
          Pet Lover
        </label>
        <label className="flex-1/2 inline-flex items-center">
          <input
          id="petLover"
            type="radio"
            className="form-radio"
            name="petLover"
            value={petLover}
            onChange={e => updateFields({petLover: e.target.value})}
          />
          <span className="ml-2 font-mono">Yes</span>
          <input
          id="petLover"
            type="radio"
            className="form-radio ml-4"
            name="petLover"
            value={petLover}
            onChange={e => updateFields({petLover: e.target.value})}
          />
          <span className="ml-2 font-mono">No</span>
        </label>
      </div>
      <div className="mb-4 flex justify-between">
        <label className="flex-1/2 block text-gray-700 text-sm font-bold mb-1">
          Party Enthusiast
        </label>
        <label className="flex-1/2 inline-flex items-center">
          <input
            id="partyEnthusiast"
            type="radio"
            className="form-radio"
            name="partyEnthusiast"
            value={partyEnthusiast}
            onChange={e => updateFields({partyEnthusiast: e.target.value})}
          />
          <span className="ml-2 font-mono">Yes</span>
          <input
            id="partyEnthusiast"
            type="radio"
            className="form-radio ml-4"
            name="partyEnthusiast"
            value={partyEnthusiast}          
            onChange={e => updateFields({partyEnthusiast: e.target.value})}
          />
          <span className="ml-2 font-mono">No</span>
        </label>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Marital Status:
        </label>
        <select
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-red-400 font-mono"
          id="maritalStatus"
          value={maritalStatus}
          onChange={e => updateFields({maritalStatus: e.target.value})}
        >
          <option selected>Choose</option>
          <option value="single">Single</option>
          <option value="relationship">Relationship</option>
          <option value="engaged">Engaged</option>
          <option value="married">Married</option>
        </select>
      </div>
    </>
  );
};

export default FormThree;
