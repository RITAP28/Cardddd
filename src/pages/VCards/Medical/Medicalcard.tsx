import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import DisplayMedicalCard from './DisplayMedicalCard';
import { Button } from '@/components/ui/button';

const Medicalcard = () => {
  const [created, setCreated] = useState(false);
    const navigate = useNavigate();
  return (
    <>
    <div>
        {created ? (
          <DisplayMedicalCard />
        ) : (
          <Button className="top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] absolute" onClick={() => navigate("/dashboard/medicalcard/create") }>Create New VCard</Button>
        )}
    </div>
    </>
  )
}

export default Medicalcard