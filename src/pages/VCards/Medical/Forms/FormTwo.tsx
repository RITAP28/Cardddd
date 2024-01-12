type UserFormProps = {
  phoneNumber: string;
  email: string;
  emergencyContact: string;
  relationship: string;
};

type Update = UserFormProps & {
  updateFields: (fields: Partial<UserFormProps>) => void;
};

const FormTwo = ({
  phoneNumber,
  email,
  emergencyContact,
  relationship,
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
          Phone Number:
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="phoneNumber"
          type="text"
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={e => updateFields({phoneNumber: e.target.value})}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Email Address:
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={e => updateFields({email: e.target.value})}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Emergency Contact:
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="emergencyContact"
          type="text"
          placeholder="Emergency Contact"
          value={emergencyContact}
          onChange={e => updateFields({emergencyContact: e.target.value})}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Relationship:
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="relationship"
          type="text"
          placeholder="Relationship"
          value={relationship}
          onChange={e => updateFields({relationship: e.target.value})}
        />
      </div>
    </>
  );
};

export default FormTwo;
