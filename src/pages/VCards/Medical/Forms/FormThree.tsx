type UserFormProps = {
  knownAllegies: string;
  chronicMentalConditions: string;
  currentMedications: string;
  previousSurgeries: string;
};

type Update = UserFormProps & {
  updateFields: (fields: Partial<UserFormProps>) => void;
};

const FormThree = ({
  knownAllegies,
  chronicMentalConditions,
  currentMedications,
  previousSurgeries,
  updateFields
}: Update) => {
  return (
    <>
      <div>
        <p className="font-mono text-md font-bold flex justify-center items-center">
          Health History
        </p>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Known Allergies:
        </label>
        <select
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-red-400 font-mono mb-2"
          id="knownAllegies"
          value={knownAllegies}
          onChange={e => updateFields({knownAllegies: e.target.value})}
        >
          <option selected>Choose</option>
          <option value="medication">Medication</option>
          <option value="foods">Foods</option>
          <option value="insects">Insects</option>
          <option value="latex">Latex</option>
          <option value="pollen">Pollen</option>
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
          Chronic Medical Conditions:
        </label>
        <select
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-red-400 font-mono mb-2"
          id="chronicMentalConditions"
          value={chronicMentalConditions}
          onChange={e => updateFields({chronicMentalConditions: e.target.value})}
        >
          <option selected>Choose</option>
          <option value="medication">Diabetes</option>
          <option value="foods">Hypertension</option>
          <option value="insects">Asthma</option>
          <option value="latex">Thyroid Disorder</option>
          <option value="pollen">Chronic Pain</option>
          <option value="pollen">Respiratory Issues</option>
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
          Current Medications:
        </label>
        <textarea
          id="currentMedications"
          rows={4}
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Comment here..."
          value={currentMedications}
          onChange={e => updateFields({currentMedications: e.target.value})}
        ></textarea>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Previous Surgeries:
        </label>
        <textarea
          id="previousSurgeries"
          rows={4}
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Comment here..."
          value={previousSurgeries}
          onChange={e => updateFields({previousSurgeries: e.target.value})}
        ></textarea>
      </div>
    </>
  );
};

export default FormThree;
