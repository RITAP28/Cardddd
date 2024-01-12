type UserFormProps = {
  coreValues: string,
  philosophies: string,
  environmentSocial: string,
  opinionsGlobal: string,
  weirdMsg: string,
};

type Update = UserFormProps & {
  updateFields: (fields: Partial<UserFormProps>) => void;
};

const FormSeven = ({ coreValues, philosophies, environmentSocial, opinionsGlobal, weirdMsg, updateFields }: Update) => {
  return (
    <>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Core Values:
        </label>
        <select
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-red-400 font-mono"
          id="coreValues"
          value={coreValues}
          onChange={e => updateFields({coreValues: e.target.value})}
        >
          <option selected>Choose</option>
          <option value="honesty">Honesty</option>
          <option value="respect">Respect</option>
          <option value="kindness">Kindness</option>
          <option value="integrity">Integrity</option>
        </select>
        <input
          className="mt-4 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="other"
          type="text"
          placeholder="Other (Optional)"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Philosophies I believe in:
        </label>
        <select
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-red-400 font-mono"
          id="philosophies"
          value={philosophies}
          onChange={e => updateFields({philosophies: e.target.value})}
        >
          <option selected>Choose</option>
          <option value="stoicism">Stoicism</option>
          <option value="existentialism">Existentialism</option>
          <option value="humanism">Humanism</option>
          <option value="nihilism">Nihilism</option>
        </select>
        <input
          className="mt-4 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="other"
          type="text"
          placeholder="Other (Optional)"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Environment/Social Causes I support:
        </label>
        <select
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-red-400 font-mono"
          id="environmentSocial"
          value={environmentSocial}
          onChange={e => updateFields({environmentSocial: e.target.value})}
        >
          <option selected>Choose</option>
          <option value="conservation">Environmental Conservation</option>
          <option value="humanRights">Human Rights</option>
          <option value="education">Education</option>
          <option value="animalWelfare">Animal Welfare</option>
        </select>
        <input
          className="mt-4 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="other"
          type="text"
          placeholder="Other (Optional)"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Opinions on Global Issues:
        </label>
        <textarea
          id="opinionsGlobal"
          value={opinionsGlobal}
          onChange={e => updateFields({opinionsGlobal: e.target.value})}
          rows={4}
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Comment here..."
        ></textarea>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Weirdest/Uncommon Belief I Hold:
        </label>
        <textarea
          id="weirdMsg"
          value={weirdMsg}
          onChange={e => updateFields({weirdMsg: e.target.value})}
          rows={4}
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Comment here..."
        ></textarea>
      </div>
    </>
  );
};

export default FormSeven;
