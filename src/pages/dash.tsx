import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { RootState } from "../redux/store";
// import axios from "axios";
// import Loader from "@/components/rest/loader";

const Dashboard = () => {

    const navigate = useNavigate();

    // const { user, loading } = useSelector(
    //     (state: RootState) => state.userReducer
    // );

    // const handleRequestVerify = async () => {
    //     try {
    //         await axios.get(`http://localhost:7070/api/v1/user/request/verification`, {withCredentials: true});
    //         navigate("/dashboard");
    //     } catch (error: any) {
    //         console.log(error.response.data.message);
    //     }
    // }

    return (
        <div className='flex flex-col justify-center gap-8 items-center mt-8'>
            {/* {loading ? (
                <Loader />
            ) : ( */}
                <>
                    <h1 className="text-3xl">Dashboard Page</h1>
                    {/* {!user?.isVerified && ( */}
                        <div className="flex flex-col justify-center items-center space-y-4">
                            <p className="text-red-600 font-semibold">You are not verified</p>
                            <Button>Verify Email</Button>
                        </div>
                    {/* )} */}
                    <p>Only Tree VCard is available for now</p>
                    <div className="flex flex-wrap justify-center">
                        <Button variant="link"  onClick={() => navigate("/dashboard/tree")}>Tree VCard</Button>
                        <Button variant="link" onClick={() => navigate("/dashboard/personalcard")}>Personal VCard</Button>
                        <Button variant="link" onClick={() => navigate("/dashboard/medicalcard")}>Medical VCard</Button>
                        <Button variant="link" onClick={() => navigate("/dashboard/socialcard")}>Socials VCard</Button>
                    </div>
                </>
            {/* )} 
            disabled={!user?.isVerified} */}
        </div>
    )
}

export default Dashboard;