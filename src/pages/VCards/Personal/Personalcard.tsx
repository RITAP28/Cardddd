import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DisplayPersonalCard from "./DisplayPersonalCard";

const Personalcard = () => {
    const [created, setCreated] = useState(false);
    const navigate = useNavigate();
  return (
    <>
    <div>
        {created ? (
          <DisplayPersonalCard />
        ) : (
          <Button className="top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] absolute" onClick={() => navigate("/dashboard/personalcard/create") }>Create New VCard</Button>
        )}
    </div>
    </>
  )
}

export default Personalcard