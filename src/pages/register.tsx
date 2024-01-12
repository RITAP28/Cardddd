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
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "@/redux/api/userApi";
import { useDispatch } from "react-redux";
import { userExist, userNotExist } from "../redux/reducer/userReducer";

const formSchema = z.object({
    username: z.string()
        .min(2, {
            message: "Username must be at least 2 characters.",
        })
        .max(50, {
            message: "Username cannot exceed 50 characters.",
        }),
    email: z.string()
        .email({
            message: "Please enter a valid email address."
        }),
    password: z.string()
        .min(8, {
            message: "Pssword must be at least 8 characters.",
        }),
})

const Register = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            email: "",
            password: "",
        },
    });

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        const registerData = {
            name: values.username,
            email: values.email,
            password: values.password,
        }

        try {
            const data = await registerUser(registerData);
            dispatch(userExist(data.user));
            navigate("/dashboard");
        } catch (error: any) {
            console.log(error.response.data);
            dispatch(userNotExist());
        }
    }

    return (
        <div className="flex flex-col justify-center items-center min-h-screen">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Username</FormLabel>
                                <FormControl>
                                    <Input className="w-[350px]" placeholder="Enter your username" {...field} />
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
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input className="w-[350px]" placeholder="Enter your Password" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button className="w-[350px]" type="submit">Register</Button>
                </form>
            </Form>
            <Button variant="link"><Link to="/login">Already have an account? Login</Link></Button>
        </div>
    )
}

export default Register;