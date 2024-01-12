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
import { loginUser } from "@/redux/api/userApi";
import { useDispatch } from "react-redux";
import { userExist, userNotExist } from "../redux/reducer/userReducer";

const Login = () => {
    const formSchema = z.object({
        email: z.string()
            .email({
                message: "Please enter a valid email address."
            }),
        password: z.string()
            .min(8, {
                message: "Pssword must be at least 8 characters.",
            }),
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        const loginData = {
            email: values.email,
            password: values.password,
        }
        console.log(loginData)
        try {
            const data = await loginUser(loginData);
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
                    <Button className="w-[350px]" type="submit">Login</Button>
                </form>
            </Form>
            <Button variant="link">Forgot Password?</Button>
            <Button variant="link"><Link to="/register">Don't have an account? Register</Link></Button>
        </div>
    )
}

export default Login;