import { useSearchParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { userExist } from "../redux/reducer/userReducer";
import { useEffect } from "react";
import Loader from "@/components/rest/loader";

const Verify = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [search] = useSearchParams();
    const token = search.get("token");

    const handleVerify = async () => {
        try {
            const { data } = await axios.put(`http://localhost:7070/api/v1/user/verify/${token}`, {withCredentials: true});
            dispatch(userExist(data.user));
            navigate("/dashboard");
        } catch (error: any) {
            console.log(error.response.data.message);
        }
    }

    useEffect(() => {
        handleVerify();
    });

    return (
        <div className="flex justify-center items-center mt-8">
            <Loader />
        </div>
    )
}

export default Verify;