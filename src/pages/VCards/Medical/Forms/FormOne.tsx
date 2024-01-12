type UserFormProps = {
  name: string;
  date: string;
  gender: string;
  street: string;
  city: string;
  state: string;
  postalCode: string;
};

type Update = UserFormProps & {
  updateFields: (fields: Partial<UserFormProps>) => void;
};

const FormOne = ({
  name,
  date,
  gender,
  street,
  city,
  state,
  postalCode,
  updateFields,
}: Update) => {
  return (
    <>
      <div>
        <p className="font-mono text-md font-bold flex justify-center items-center">
          Personal Information
        </p>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Name:
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="name"
          type="text"
          placeholder="Name"
          value={name}
          onChange={e => updateFields({name: e.target.value})}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Date Of Birth:
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="date"
          type="date"
          placeholder="date"
          value={date}
          onChange={e => updateFields({date: e.target.value})}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Gender:
        </label>
        <select
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-red-400 font-mono"
          id="collectingHobby"
          value={gender}
          onChange={e => updateFields({gender: e.target.value})}
        >
          <option selected>Choose</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Address:
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
          id="street"
          type="text"
          placeholder="Street Address"
          value={street}
          onChange={e => updateFields({street: e.target.value})}
        />
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
          id="city"
          type="text"
          placeholder="City"
          value={city}
          onChange={e => updateFields({city: e.target.value})}
        />
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
          id="state"
          type="text"
          placeholder="State"
          value={state}
          onChange={e => updateFields({state: e.target.value})}
        />
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
          id="postalCode"
          type="text"
          placeholder="Postal Code"
          value={postalCode}
          onChange={e => updateFields({postalCode: e.target.value})}
        />
      </div>
    </>
  );
};

export default FormOne;
