type UserFormProps = {
  relationship: string,
  fitnessRoutine: string,
  morningorNight: string,
  anyHealthOrDietaryPreferences: string,
  sleepingHabits: string,
  interestsHobbies: string,
  favouriteMovies: string,
  sports: string,
};

type Update = UserFormProps & {
  updateFields: (fields: Partial<UserFormProps>) => void;
};

const FormFour = ({ relationship, fitnessRoutine, morningorNight, anyHealthOrDietaryPreferences, sleepingHabits, interestsHobbies, favouriteMovies, sports, updateFields }: Update) => {
  return (
    <>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Relationship status:
        </label>
        <select
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-red-400 font-mono"
          id="relationship"
          value={relationship}
          onChange={e => updateFields({relationship: e.target.value})}
        >
          <option selected>Choose</option>
          <option value="single">Single and Happy</option>
          <option value="exploring">Just Exploring</option>
          <option value="committed">Committed</option>
          <option value="complicated">It's complicated</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Fitness Routine/Hobbies:
        </label>
        <select
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-red-400 font-mono"
          id="fitnessRoutine"
          value={fitnessRoutine}
          onChange={e => updateFields({fitnessRoutine: e.target.value})}
        >
          <option selected>Choose</option>
          <option value="daily">Daily fitness regime</option>
          <option value="few">A few times a week</option>
          <option value="sometimes">Sometimes when I can</option>
          <option value="notMuch">Not much into fitness</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Morning or Night person:
        </label>
        <select
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-red-400 font-mono"
          id="morningorNight"
          value={morningorNight}
          onChange={e => updateFields({morningorNight: e.target.value})}
        >
          <option selected>Choose</option>
          <option value="morning">Morning person</option>
          <option value="night">Night Owl</option>
          <option value="between">Somewhere in between</option>
          <option value="depends">Depends on the day</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Any Health or Dietary Preferences:
        </label>
        <select
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-red-400 font-mono"
          id="anyHealthOrDietaryPreferences"
          value={anyHealthOrDietaryPreferences}
          onChange={e => updateFields({anyHealthOrDietaryPreferences: e.target.value})}
        >
          <option selected>Choose</option>
          <option value="veget">Vegetarian</option>
          <option value="vegan">Vegan</option>
          <option value="omnivore">Omnivore</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Sleeping Habits:
        </label>
        <select
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-red-400 font-mono"
          id="sleepingHabits"
          value={sleepingHabits}
          onChange={e => updateFields({sleepingHabits: e.target.value})}
        >
          <option selected>Choose</option>
          <option value="morning">Morning person</option>
          <option value="night">Night Owl</option>
          <option value="between">Somewhere in between</option>
          <option value="depends">Depends on the day</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Interests & Hobbies:
        </label>
        {/* <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="lifestyle" type="text" placeholder="Lifestyle" /> */}
        <textarea
          id="interestsHobbies"
          value={interestsHobbies}
          onChange={e => updateFields({interestsHobbies: e.target.value})}
          rows={4}
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Comment here..."
        ></textarea>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Favourite Movies/TV Shows/Genres:
        </label>
        <select
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-red-400 font-mono"
          id="favouriteMovies"
          value={favouriteMovies}
          onChange={e => updateFields({favouriteMovies: e.target.value})}
        >
          <option selected>Choose</option>
          <option value="action">Action</option>
          <option value="comedy">Comedy</option>
          <option value="drama">Drama</option>
          <option value="scifi">Sci-Fi Fantasy</option>
          <option value="documentary">Documentary</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Sports/Outdoor Activities:
        </label>
        <select
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-red-400 font-mono"
          id="sports"
          value={sports}
          onChange={e => updateFields({sports: e.target.value})}
        >
          <option selected>Choose</option>
          <option value="basketball">Basketball</option>
          <option value="tennis">Tennis</option>
          <option value="hiking">Hiking</option>
          <option value="cycling">Cycling</option>
          <option value="swimming">Swimming</option>
        </select>
      </div>
    </>
  );
};

export default FormFour;
