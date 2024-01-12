import useMultiStepForm from "../useMultiStepForm";
import FormOne from "./forms/FormOne";
import FormTwo from "./forms/FormTwo";
import FormThree from "./forms/FormThree";
import FormFour from "./forms/FormFour";
import FormFive from "./forms/FormFive";
import FormSix from "./forms/FormSix";
import FormSeven from "./forms/FormSeven";
import FormEight from "./forms/FormEight";
import FormNine from "./forms/FormNine";
import { FormEvent, useState } from "react";

type FormData = {
  name: string;
  mobileNumber: string;
  personalEmail: string;
  workNumber: string;
  homeNumber: string;
  workEmail: string;
  Facebook: string;
  Instagram: string;
  Twitter: string;
  LinkedIn: string;
  birthdate: string;
  hometown: string;
  currentCity: string;
  languages: string;
  music: string;
  color: string;
  city: string;
  dreamTravel: string;
  travelModes: string;
  relationship: string;
  fitnessRoutine: string;
  morningorNight: string;
  anyHealthOrDietaryPreferences: string;
  sleepingHabits: string;
  interestsHobbies: string;
  favouriteMovies: string;
  sports: string;
  favSeason: string;
  modeOfTravel: string;
  favQuotes: string;
  lifestyle: string;
  petLover: string; //check it once as they are boolean yes/no
  partyEnthusiast: string; //check it once as they are boolean yes/no
  maritalStatus: string;
  artisticMode: string;
  gaming: string;
  collectingHobby: string;
  unusualSkills: string;
  foodDrinks: string;
  cuisingFood: string;
  beverages: string;
  dessert: string;
  cookingSkills: string;
  valuesOrBeliefs: string;
  spiritualOrReligiousBeliefs: string;
  coffeeTea: string;
  coreValues: string;
  philosophies: string;
  environmentSocial: string;
  opinionsGlobal: string;
  weirdMsg: string;
  proSkills: string;
  occupation: string;
  careerAspirations: string;
  education: string;
  proExpertise: string;
  otherInterests: string;
  futureGoals: string;
  learning: string;
  unusualExperience: string;
  strangeHabit: string;
};

const INIT_DATA: FormData = {
  name: "",
  mobileNumber: "",
  personalEmail: "",
  workNumber: "",
  homeNumber: "",
  workEmail: "",
  Facebook: "",
  Instagram: "",
  Twitter: "",
  LinkedIn: "",
  birthdate: "",
  hometown: "",
  currentCity: "",
  languages: "",
  music: "",
  color: "",
  city: "",
  dreamTravel: "",
  travelModes: "",
  relationship: "",
  fitnessRoutine: "",
  morningorNight: "",
  anyHealthOrDietaryPreferences: "",
  sleepingHabits: "",
  interestsHobbies: "",
  favouriteMovies: "",
  sports: "",
  favSeason: "",
  modeOfTravel: "",
  favQuotes: "",
  lifestyle: "",
  petLover: "", //check it once as they are boolean yes/no
  partyEnthusiast: "", //check it once as they are boolean yes/no
  maritalStatus: "",
  artisticMode: "",
  gaming: "",
  collectingHobby: "",
  unusualSkills: "",
  foodDrinks: "",
  cuisingFood: "",
  beverages: "",
  dessert: "",
  cookingSkills: "",
  valuesOrBeliefs: "",
  spiritualOrReligiousBeliefs: "",
  coffeeTea: "",
  coreValues: "",
  philosophies: "",
  environmentSocial: "",
  opinionsGlobal: "",
  weirdMsg: "",
  proSkills: "",
  occupation: "",
  careerAspirations: "",
  education: "",
  proExpertise: "",
  otherInterests: "",
  futureGoals: "",
  learning: "",
  unusualExperience: "",
  strangeHabit: "",
};

const CreateCard = () => {
  const [data, setData] = useState(INIT_DATA);
  function updateFields(fields: Partial<FormData>) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }
  const { activeStep, steps, Next, Previous, step } = useMultiStepForm([
    <FormOne {...data} updateFields={updateFields} />,
    <FormTwo {...data} updateFields={updateFields} />,
    <FormThree {...data} updateFields={updateFields} />,
    <FormFour {...data} updateFields={updateFields} />,
    <FormFive {...data} updateFields={updateFields} />,
    <FormSix {...data} updateFields={updateFields} />,
    <FormSeven {...data} updateFields={updateFields} />,
    <FormEight {...data} updateFields={updateFields} />,
    <FormNine {...data} updateFields={updateFields} />,
  ]);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    console.log(data);
  }

  return (
    <>
      <div className="w-full max-w-xs absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <p>{`${activeStep + 1}/${steps.length}`}</p>
          {step}
          <div className="flex items-center justify-between"></div>
        </form>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
          onClick={Previous}
        >
          Back
        </button>
        {activeStep !== steps.length - 1 ? (
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={Next}
          >
            Next
          </button>
        ) : (
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            onClick={handleSubmit}
          >
            Submit
          </button>
        )}
      </div>
    </>
  );
};

export default CreateCard;
