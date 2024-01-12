type UserFormProps = {
  smoker: string;
  alcoholConsumption: string;
  exerciseRoutine: string;
  dietaryPreferences: string;
};

type Update = UserFormProps & {
  updateFields: (fields: Partial<UserFormProps>) => void;
};

const FormFour = ({
  smoker,
  alcoholConsumption,
  exerciseRoutine,
  dietaryPreferences,
  updateFields,
}: Update) => {
  return (
    <>
      <div>
        <p className="font-mono text-md font-bold flex justify-center items-center">
          Health Habits
        </p>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Smoker:
        </label>
        <select
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-red-400 font-mono mb-2"
          id="smoker"
          value={smoker}
          onChange={e => updateFields({smoker: e.target.value})}
        >
          <option selected>Choose</option>
          <option value="yes">Yes, currently</option>
          <option value="no">No</option>
          <option value="between">Used to, but quit</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Alcohol Consumption:
        </label>
        <select
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-red-400 font-mono mb-2"
          id="alcoholConsumption"
          value={alcoholConsumption}
          onChange={e => updateFields({alcoholConsumption: e.target.value})}
        >
          <option selected>Choose</option>
          <option value="regularly">Regularly</option>
          <option value="occasionally">Occasionally</option>
          <option value="rarely">Rarely</option>
          <option value="never">Never</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Exercise Routine:
        </label>
        <select
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-red-400 font-mono mb-2"
          id="exerciseRoutine"
          value={exerciseRoutine}
          onChange={e => updateFields({exerciseRoutine: e.target.value})}
        >
          <option selected>Choose</option>
          <option value="regularly">Regularly</option>
          <option value="occasionally">Occasionally</option>
          <option value="sedentary">Sedentary Lifestyle</option>
        </select>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="other"
          type="text"
          placeholder="Other(Specify)"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Dietary Preferences:
        </label>
        <select
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-red-400 font-mono mb-2"
          id="dietaryPreferences"
          value={dietaryPreferences}
          onChange={e => updateFields({dietaryPreferences: e.target.value})}
        >
          <option selected>Choose</option>
          <option value="vegetarian">Vegetarian</option>
          <option value="vegan">Vegan</option>
          <option value="glutenFree">Gluten-Free</option>
          <option value="dairyFree">Dairy-Free</option>
        </select>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="other"
          type="text"
          placeholder="Other(Specify)"
        />
      </div>
    </>
  );
};

export default FormFour;
