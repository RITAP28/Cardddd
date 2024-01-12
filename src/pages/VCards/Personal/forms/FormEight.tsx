type UserFormProps = {
  proSkills: string;
  occupation: string;
  careerAspirations: string;
  education: string;
  proExpertise: string;
};

type Update = UserFormProps & {
  updateFields: (fields: Partial<UserFormProps>) => void;
};

const FormEight = ({
  proSkills,
  occupation,
  careerAspirations,
  education,
  proExpertise,
  updateFields,
}: Update) => {
  return (
    <>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Professional Details:
        </label>
        <textarea
          id="proSkills"
          value={proSkills}
          onChange={(e) => updateFields({ proSkills: e.target.value })}
          rows={4}
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Comment here..."
        ></textarea>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Current Occupation/Industry:
        </label>
        <select
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-red-400 font-mono"
          id="occupation"
          value={occupation}
          onChange={(e) => updateFields({ occupation: e.target.value })}
        >
          <option selected>Choose</option>
          <option value="technology">Technology</option>
          <option value="healthcare">Healthcare</option>
          <option value="education">Education</option>
          <option value="finance">Finance</option>
          <option value="entertainment">Arts/Entertainment</option>
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
          Career Aspirations/Goals:
        </label>
        <select
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-red-400 font-mono"
          id="careerAspirations"
          value={careerAspirations}
          onChange={(e) => updateFields({ careerAspirations: e.target.value })}
        >
          <option selected>Choose</option>
          <option value="leadership">Leadership</option>
          <option value="entre">Entrepreneurship</option>
          <option value="creativity">Creativity</option>
          <option value="advancement">Advancement</option>
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
          Education Background/Degrees:
        </label>
        <select
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-red-400 font-mono"
          id="education"
          value={education}
          onChange={(e) => updateFields({ education: e.target.value })}
        >
          <option selected>Choose</option>
          <option value="highSchool">High School</option>
          <option value="bachelor">Bachelor's Degree</option>
          <option value="master">Master's Degree</option>
          <option value="doctorate">Doctorate</option>
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
          Professional Skills or Expertise:
        </label>
        <select
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-red-400 font-mono"
          id="proExpertise"
          value={proExpertise}
          onChange={(e) => updateFields({ proExpertise: e.target.value })}
        >
          <option selected>Choose</option>
          <option value="communication">Communication</option>
          <option value="probSolving">Problem Solving</option>
          <option value="teamwork">Teamwork</option>
          <option value="leadership">Leadership</option>
        </select>
        <input
          className="mt-4 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="other"
          type="text"
          placeholder="Other (Optional)"
        />
      </div>
    </>
  );
};

export default FormEight;
