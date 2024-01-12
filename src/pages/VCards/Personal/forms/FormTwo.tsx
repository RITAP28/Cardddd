type UserFormProps = {
  birthdate: string,
  hometown: string,
  currentCity: string,
  languages: string,
  music: string,
  color: string,
  city: string,
  dreamTravel: string,
};

type Update = UserFormProps & {
  updateFields: (fields: Partial<UserFormProps>) => void;
};


const FormTwo = ({ birthdate, hometown, currentCity, languages, 
music, color, city, dreamTravel, updateFields }: Update) => {
  return (
    <>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Birthdate
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="birthdate"
          type="date"
          placeholder="BirthDate"
          value={birthdate}
          onChange={e => updateFields({birthdate: e.target.value})}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Hometown
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="hometown"
          type="text"
          placeholder="Hometown"
          value={hometown}
          onChange={e => updateFields({hometown: e.target.value})}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Current City
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="currentCity"
          type="text"
          placeholder="City"
          value={currentCity}
          onChange={e => updateFields({currentCity: e.target.value})}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Languages Spoken:
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="languages"
          type="text"
          placeholder="Languages"
          value={languages}
          onChange={e => updateFields({languages: e.target.value})}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Favourite Music/Artist/Genre:
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="music"
          type="text"
          placeholder="Music/Artist/Genre"
          value={music}
          onChange={e => updateFields({music: e.target.value})}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Favourite Color(s):
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="color"
          type="text"
          placeholder="Favourite Color"
          value={color}
          onChange={e => updateFields({color: e.target.value})}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Favourite City/Cities:
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="city"
          type="text"
          placeholder="Favourite City/Cities"
          value={city}
          onChange={e => updateFields({city: e.target.value})}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Dream Travel Destinations:
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="dreamTravel"
          type="text"
          placeholder="Dream Travel Destinations"
          value={dreamTravel}
          onChange={e => updateFields({dreamTravel: e.target.value})}
        />
      </div>
    </>
  );
};

export default FormTwo;
