type UserFormProps = {
  name: string;
  mobileNumber: string;
  workNumber: string,
  homeNumber: string,
  personalEmail: string,
  workEmail: string,
  Facebook: string,
  Instagram: string,
  Twitter: string,
  LinkedIn: string
};

type Update = UserFormProps & {
  updateFields: (fields: Partial<UserFormProps>) => void;
};

const FormOne = ({
  name,
  mobileNumber,
  workNumber,
  homeNumber,
  personalEmail,
  workEmail,
  Facebook,
  Instagram,
  Twitter,
  LinkedIn,
  updateFields,
}: Update) => {
  return (
    <>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Name
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
          Phone Number
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="mobileNumber"
          type="number"
          placeholder="Mobile"
          value={mobileNumber}
          onChange={e => updateFields({mobileNumber: e.target.value})}
        />
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="workNumber"
          type="number"
          placeholder="Work"
          value={workNumber}
          onChange={e => updateFields({workNumber: e.target.value})}
        />
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="homeNumber"
          type="number"
          placeholder="Home"
          value={homeNumber}
          onChange={e => updateFields({homeNumber: e.target.value})}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Email Address
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="personalEmail"
          type="text"
          placeholder="Personal"
          value={personalEmail}
          onChange={e => updateFields({personalEmail: e.target.value})}

        />
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="workEmail"
          type="text"
          placeholder="Work"
          value={workEmail}
          onChange={e => updateFields({workEmail: e.target.value})}
        />
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="other"
          type="text"
          placeholder="Other (Optional)"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Social Media Handles:
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="Facebook"
          type="text"
          placeholder="Facebook"
          value={Facebook}
          onChange={e => updateFields({Facebook: e.target.value})}
        />
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="Twitter"
          type="text"
          placeholder="Twitter"
          value={Instagram}
          onChange={e => updateFields({Instagram: e.target.value})}
        />
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="Instagram"
          type="text"
          placeholder="Instagram"
          value={Twitter}
          onChange={e => updateFields({Twitter: e.target.value})}
        />
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="LinkedIn"
          type="text"
          placeholder="LinkedIn"
          value={LinkedIn}
          onChange={e => updateFields({LinkedIn: e.target.value})}
        />
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="other"
          type="text"
          placeholder="Other (Optional)"
        />
      </div>
    </>
  );
};

export default FormOne;
