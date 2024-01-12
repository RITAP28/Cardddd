type UserFormProps = {
  cuisingFood: string,
  beverages: string,
  dessert: string,
  cookingSkills: string,
  valuesOrBeliefs: string,
  spiritualOrReligiousBeliefs: string,
  coffeeTea: string
};

type Update = UserFormProps & {
  updateFields: (fields: Partial<UserFormProps>) => void;
};

const FormSix = ({ cuisingFood, beverages, dessert, cookingSkills, valuesOrBeliefs, spiritualOrReligiousBeliefs, coffeeTea, updateFields }: Update) => {
  return (
    <>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Favourite Cuisine/Food:
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="cuisingFood"
          type="text"
          placeholder="Favourite Cuisine/Food"
          value={cuisingFood}
          onChange={e => updateFields({cuisingFood: e.target.value})}
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Preferred Beverages
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="beverages"
          type="text"
          placeholder="Preferred Beverages"
          value={beverages}
          onChange={e => updateFields({beverages: e.target.value})}
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Coffee or Tea Lover:
        </label>
        <select
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-red-400 font-mono"
          id="coffeeTea"
          value={coffeeTea}
          onChange={e => updateFields({coffeeTea: e.target.value})}
        >
          <option selected>Choose</option>
          <option value="tea">Tea Enthusiast</option>
          <option value="coffee">Coffee Addict</option>
          <option value="both">Both</option>
          <option value="neither">None, prefer other beverage</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Favourite Dessert
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="dessert"
          type="text"
          placeholder="Favourite Desset"
          value={dessert}
          onChange={e => updateFields({dessert: e.target.value})}
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Cooking Skills:
        </label>
        <select
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-red-400 font-mono"
          id="cookingSkills"
          value={cookingSkills}
          onChange={e => updateFields({cookingSkills: e.target.value})}
        >
          <option selected>Choose</option>
          <option value="novice">Novice</option>
          <option value="intermediate">Intermediate</option>
          <option value="expert">Expert</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Values or Beliefs:
        </label>
        <textarea
          id="valuesOrBeliefs"
          rows={4}
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Comment here..."
          value={valuesOrBeliefs}
          onChange={e => updateFields({valuesOrBeliefs: e.target.value})}
        ></textarea>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Spiritual or Religious Beliefs:
        </label>
        <select
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-red-400 font-mono"
          id="spiritualOrReligiousBeliefs"
          value={spiritualOrReligiousBeliefs}
          onChange={e => updateFields({spiritualOrReligiousBeliefs: e.target.value})}
        >
          <option selected>Choose</option>
          <option value="spititual">Spiritual</option>
          <option value="religious">Religious</option>
          <option value="atheist">Atheist</option>
          <option value="agnostic">Agnostic</option>
        </select>
      </div>
    </>
  );
};

export default FormSix;
