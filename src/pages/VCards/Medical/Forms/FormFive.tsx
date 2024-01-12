type UserFormProps = {
  historyMentalCond: string;
  routineVaccines: string;
  insuranceProvider: string;
  policyNumber: string;
  groupNumber: string;
};

type Update = UserFormProps & {
  updateFields: (fields: Partial<UserFormProps>) => void;
};

const FormFive = ({
  historyMentalCond,
  routineVaccines,
  insuranceProvider,
  policyNumber,
  groupNumber,
  updateFields,
}: Update) => {
  return (
    <>
      <div className="mt-4 mb-4">
        <p className="font-mono text-md font-bold flex justify-center items-center">
          Mental Health History
        </p>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          History of Mental health Conditions:
        </label>
        <select
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-red-400 font-mono mb-2"
          id="historyMentalCond"
          value={historyMentalCond}
          onChange={e => updateFields({historyMentalCond: e.target.value})}
        >
          <option selected>Choose</option>
          <option value="depression">Depression</option>
          <option value="anxiety">Anxiety</option>
          <option value="bipolarDisorder">Bipolar Disorder</option>
          <option value="ptsd">PTSD</option>
          <option value="eatingDisorder">Eating Disorder</option>
          <option value="ocd">OCD</option>
        </select>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="other"
          type="text"
          placeholder="Other(Specify)"
        />
      </div>
      <div className="mt-4 mb-4">
        <p className="font-mono text-md font-bold flex justify-center items-center">
          Vaccination History
        </p>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Routine Vaccinations Received:
        </label>
        <select
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-red-400 font-mono mb-2"
          id="routineVaccines"
          value={routineVaccines}
          onChange={e => updateFields({routineVaccines: e.target.value})}
        >
          <option selected>Choose</option>
          <option value="influenza">Influenza</option>
          <option value="tetanus">Tetanus</option>
          <option value="hepatitis">Hepatitis</option>
          <option value="mmr">Measles, Mumps, Rubella (MMR)</option>
          <option value="covid">Covid-19</option>
        </select>
      </div>
      <div className="mt-4 mb-4">
        <p className="font-mono text-md font-bold flex justify-center items-center">
          Insurance Information
        </p>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Insurance Provider:
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="insuranceProvider"
          type="text"
          placeholder="Insurance Provider"
          value={insuranceProvider}
          onChange={e => updateFields({insuranceProvider: e.target.value})}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Policy Number:
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="policyNumber"
          type="text"
          placeholder="Policy Number"
          value={policyNumber}
          onChange={e => updateFields({policyNumber: e.target.value})}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Group Number(if applicable):
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="groupNumber"
          type="text"
          placeholder="Group Number"
          value={groupNumber}
          onChange={e => updateFields({groupNumber: e.target.value})}
        />
      </div>
    </>
  );
};

export default FormFive;
