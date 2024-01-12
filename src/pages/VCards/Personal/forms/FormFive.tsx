type UserFormProps = {
  artisticMode: string,
  gaming: string,
  collectingHobby: string,
  unusualSkills: string,
  foodDrinks: string,
};

type Update = UserFormProps & {
  updateFields: (fields: Partial<UserFormProps>) => void;
};

const FormFive = ({ artisticMode, gaming, collectingHobby, unusualSkills, foodDrinks, updateFields }: Update) => {
  return (
    <>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Artistic Pursuits/Hobbies:
        </label>
        <select
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-red-400 font-mono"
          id="artisticMode"
          value={artisticMode}
          onChange={e => updateFields({artisticMode: e.target.value})}
        >
          <option selected>Choose</option>
          <option value="drawing">Drawing/Painting</option>
          <option value="photography">Photography</option>
          <option value="writing">Writing</option>
          <option value="crafts">Crafts</option>
          <option value="music">Music</option>
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
          Gaming Preferences
        </label>
        <select
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-red-400 font-mono"
          id="gaming"
          value={gaming}
          onChange={e => updateFields({gaming: e.target.value})}
        >
          <option selected>Choose</option>
          <option value="action">Action</option>
          <option value="adventure">Adventure</option>
          <option value="puzzle">Puzzle</option>
          <option value="rolePlaying">Role-Playing</option>
          <option value="simulation">Simulation</option>
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
          Collecting Hobby/Interest:
        </label>
        <select
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-red-400 font-mono"
          id="collectingHobby"
          value={collectingHobby}
          onChange={e => updateFields({collectingHobby: e.target.value})}
        >
          <option selected>Choose</option>
          <option value="stamps">Coins/Stamps</option>
          <option value="comics">Comics/Figurines</option>
          <option value="antiques">Antiques</option>
          <option value="trading">trading Cards</option>
          <option value="memorabilia">Memorabilia</option>
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
          Unusual or Unique Skills:
        </label>
        <textarea
          id="unusualSkills"
          rows={4}
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Comment here..."
          value={unusualSkills}
          onChange={e => updateFields({unusualSkills: e.target.value})}
        ></textarea>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Food & Drink:
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline mt-4"
          id="foodDrinks"
          type="text"
          placeholder="Food & Drink"
          value={foodDrinks}
          onChange={e => updateFields({foodDrinks: e.target.value})}
        />
      </div>
    </>
  );
};

export default FormFive;
