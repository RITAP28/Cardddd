import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import Loader from "@/components/rest/loader";
import { useState } from "react";
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { useDispatch } from "react-redux";
import { userExist, userNotExist } from "../redux/reducer/userReducer";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
    name: z.string()
        .min(8, {
            message: "Pssword must be at least 8 characters.",
        }),
    email: z.string()
        .email({
            message: "Please enter a valid email address."
        }),
    avatar: z.string()
});

const Profile = () => {

    const [avatar, setAvatar] = useState<any | null>("/Profile.png");

    const dispatch = useDispatch();

    const { user, loading } = useSelector(
        (state: RootState) => state.userReducer
    );

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: user?.name,
            email: user?.email,
            avatar: ""
        },
    });

    const registerDataChange = (e: any) => {
        if (e.target.name === "avatar") {
            const reader = new FileReader();

            reader.onload = () => {
                if (reader.readyState === 2) {
                    setAvatar(reader.result);
                }
            };

            reader.readAsDataURL(e.target.files[0]);
        }
    };

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        const updateData = {
            name: values.name,
            email: values.email,
            avatar
        }
        try {
            const {data} = await axios.put("http://localhost:7070/api/v1/user/me/update", updateData, { withCredentials: true });
            dispatch(userExist(data.user));
        } catch (error: any) {
            console.log(error.response.data);
        }
    }

    const handleRequestVerify = async () => {
        try {
            await axios.get(`http://localhost:7070/api/v1/user/request/verification`, {withCredentials: true});
        } catch (error: any) {
            console.log(error.response.data.message);
        }
    }

    const handleDeleteAccount = async () => {
        try {
            const {data} = await axios.delete(`http://localhost:7070/api/v1/user/delete/account`, {withCredentials: true});
            console.log(data);
            dispatch(userNotExist());
        } catch (error: any) {
            console.log(error.response.data.message);
        }
    }

    return (
        loading ? (
            <Loader />
        ) : (
            <div className='flex flex-row justify-center gap-8 items-center mt-8'>
                {
                    user ? (
                        <div className="flex flex-col items-center gap-5">
                            <div>
                                <Avatar>
                                    <AvatarImage src={user.avatar?.url} alt={user.avatar?.public_id} />
                                    <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                                </Avatar>
                            </div>
                            <p>UserId: {user._id}</p>
                            <p>Name : {user.name}</p>
                            <p>Email: {user.email}</p>
                            {!user?.isVerified && (
                                <div className="flex flex-col justify-center items-center space-y-4">
                                    <p className="text-red-600 font-semibold">You are not verified</p>
                                    <Button onClick={handleRequestVerify}>Verify Email</Button>
                                </div>
                            )}
                            <Button onClick={handleDeleteAccount} variant="destructive">Delete Account</Button>
                            <Dialog>
                                <DialogTrigger asChild>
                                    <Button variant="outline">Edit Profile</Button>
                                </DialogTrigger>
                                <DialogContent className="sm:max-w-[425px]">
                                    <DialogHeader>
                                        <DialogTitle>Edit profile</DialogTitle>
                                        <DialogDescription>
                                            Make changes to your profile here. Click save when you're done.
                                        </DialogDescription>
                                    </DialogHeader>
                                    <Form {...form}>
                                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                                            <FormField
                                                control={form.control}
                                                name="name"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Name</FormLabel>
                                                        <FormControl>
                                                            <Input className="w-[350px]" placeholder="Enter your Name" {...field} />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                            <FormField
                                                control={form.control}
                                                name="email"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Email</FormLabel>
                                                        <FormControl>
                                                            <Input className="w-[350px]" placeholder="Enter your Email" {...field} />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                            <FormField
                                                control={form.control}
                                                name="avatar"
                                                render={() => (
                                                    <Input 
                                                        className="w-[350px]" 
                                                        type="file" 
                                                        name="avatar"
                                                        accept="image/*" 
                                                        onChange={registerDataChange} 
                                                        placeholder="Enter your Email" 
                                                    />
                
                                                )}
                                            />
                                            <Button className="w-[350px]" type="submit">Save</Button>
                                        </form>
                                    </Form>
                                </DialogContent>
                            </Dialog>
                        </div>
                    ) : (
                        <div>
                            <p>You are not logged in</p>
                        </div>
                    )
                }
            </div>
        )
    )
}

export default Profile