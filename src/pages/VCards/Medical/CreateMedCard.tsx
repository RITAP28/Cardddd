import { FormEvent, useState } from "react";
import useMultiStepForm from "../useMultiStepForm"
import FormOne from "./Forms/FormOne";
import FormTwo from "./Forms/FormTwo";
import FormThree from "./Forms/FormThree";
import FormFour from "./Forms/FormFour";
import FormFive from "./Forms/FormFive";

type FormData = {
    name: string,
    date: string,
    gender: string,
    street: string,
    city: string,
    state: string,
    postalCode: string
    phoneNumber: string,
    email: string,
    emergencyContact: string,
    relationship: string,
    knownAllegies: string,
    chronicMentalConditions: string,
    currentMedications: string,
    previousSurgeries: string,
    smoker: string,
    alcoholConsumption: string,
    exerciseRoutine: string,
    dietaryPreferences: string,
    historyMentalCond: string,
    routineVaccines: string,
    insuranceProvider: string,
    policyNumber: string,
    groupNumber: string
}

const INITIAL_DATA: FormData = {
    name: "",
    date: "",
    gender: "",
    street: "",
    city: "",
    state: "",
    postalCode: "",
    phoneNumber: "",
    email: "",
    emergencyContact: "",
    relationship: "",
    knownAllegies: "",
    chronicMentalConditions: "",
    currentMedications: "",
    previousSurgeries: "",
    smoker: "",
    alcoholConsumption: "",
    exerciseRoutine: "",
    dietaryPreferences: "",
    historyMentalCond: "",
    routineVaccines: "",
    insuranceProvider: "",
    policyNumber: "",
    groupNumber: "",
}

const CreateMedCard = () => {
    const [data, setData] = useState(INITIAL_DATA);
    function updateFields(fields: Partial<FormData>){
        setData(prev => {
            return {...prev, ...fields};
        });
    };
    const {activeStep, step, steps, Next, Previous} = useMultiStepForm([
        <FormOne {...data} updateFields={updateFields} />,
        <FormTwo {...data} updateFields={updateFields} />,
        <FormThree {...data} updateFields={updateFields} />,
        <FormFour {...data} updateFields={updateFields} />,
        <FormFive {...data} updateFields={updateFields} />
    ]);
    function handleSubmit(e: FormEvent){
        e.preventDefault();
        console.log(data);
    }
  return (
    <>
    <div className="w-full max-w-xs absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
  <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
  <p>
            {`${activeStep + 1}/${steps.length}`}
        </p>
        {step}
        <div className="flex items-center justify-between">
    </div>
  </form>
  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={Previous}>
        Back
      </button>
      {(activeStep !== steps.length - 1) ? (
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={Next}>
        Next
      </button>
      ) : (
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" onClick={handleSubmit}>
        Submit
      </button>
      )}
  <p className="text-center text-gray-500 text-xs">
    &copy;2020 Acme Corp. All rights reserved.
  </p>
</div>
    </>
  )
}

export default CreateMedCard
