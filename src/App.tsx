import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./redux/store";
import { getUser } from "./redux/api/userApi";
import { userExist, userNotExist } from "./redux/reducer/userReducer";

import Header from "./components/rest/header";
import ProtectedRoute from "./components/rest/protected-route";
import Personalcard from "./pages/VCards/Personal/Personalcard";
import Medicalcard from "./pages/VCards/Medical/Medicalcard";
import Socialcard from "./pages/VCards/Socials/Socialcard";
import Test from "./pages/Test";
import CreateCard from "./pages/VCards/Personal/CreateCard";
import CreateMedCard from "./pages/VCards/Medical/CreateMedCard";
import DisplayPersonalCard from "./pages/VCards/Personal/DisplayPersonalCard";
import DisplayMedicalCard from "./pages/VCards/Medical/DisplayMedicalCard";

const Home = lazy(() => import("./pages/home"));
const Login = lazy(() => import("./pages/login"));
const Register = lazy(() => import("./pages/register"));
const NotFound = lazy(() => import("./pages/not-found"));
const Dashboard = lazy(() => import("./pages/dash"));
const Profile = lazy(() => import ("./pages/profile"));
const Tree = lazy(() => import ("./pages/tree"));
const CreateTree = lazy(() => import ("./pages/create-tree"));
const ViewTree = lazy(() => import ("./pages/view-tree"));
const UpdateTree = lazy(() => import ("./pages/update-tree"));
const Display = lazy(() => import ("./pages/display"));
const Plans = lazy(() => import ("./pages/plans"));
const Verify = lazy(() => import ("./pages/verify"));

const App = () => {

    // const { user, loading } = useSelector(
    //     (state: RootState) => state.userReducer
    // );

    // const dispatch = useDispatch();

    // const gotUser = async () => {
    //     try {
    //         const data = await getUser();
    //         dispatch(userExist(data.user));
    //     } catch (error: any) {
    //         console.log(error.response.data);
    //         dispatch(userNotExist());
    //     }
    // }
    
    // useEffect(() => {
    //     gotUser();
    // }, []);

    return (
        // loading ? (
        //     <Loader />
        // ) : (
        <BrowserRouter>
            {/* <Header user={user} /> */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/display" element={<Display />} />
                    {/* Not logged In Route */}
                    {/* <Route
                        path="/login"
                        element={
                            <ProtectedRoute isAuthenticated={user ? false : true}>
                                <Login />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/register"
                        element={
                            <ProtectedRoute isAuthenticated={user ? false : true}>
                                <Register />
                            </ProtectedRoute>
                        }
                    /> */}

                    {/* Logged In User Routes */}
                    {/* <Route
                        element={<ProtectedRoute isAuthenticated={user ? true : false} />}
                    > */}
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/dashboard/tree" element={<Tree />} />
                        <Route path="/test" element={<Test />} />
                        <Route path="/dashboard/personalcard" element={<Personalcard />} />
                        <Route path="/dashboard/personalcard/create" element={<CreateCard />} />
                        <Route path="/dashboard/personalcard/display" element={<DisplayPersonalCard />} />
                        <Route path="/dashboard/medicalcard" element={<Medicalcard />} />
                        <Route path="/dashboard/medicalcard/create" element={<CreateMedCard />} />
                        <Route path="/dashboard/medicalcard/display" element={<DisplayMedicalCard />} />
                        <Route path="/dashboard/socialcard" element={<Socialcard />} />
                        <Route path="/dashboard/tree/create" element={<CreateTree />} />
                        <Route path="/dashboard/tree/view" element={<ViewTree />} />
                        <Route path="/dashboard/tree/update" element={<UpdateTree />} />
                        <Route path="/plans" element={<Plans />} />
                        <Route path="/verify" element={<Verify />} />
                    {/* </Route> */}

                    <Route path="*" element={<NotFound />} />
                </Routes>
            {/* </Suspense> */}
        </BrowserRouter>
     )
    // )
}

export default App;