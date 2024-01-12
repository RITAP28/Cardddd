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
import { useNavigate } from "react-router-dom";
import { inputs } from "@/types/form-inputs";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { createTree } from "@/redux/api/treeApi";

const CreateTree = () => {

    const navigate = useNavigate();

    const { user } = useSelector(
        (state: RootState) => state.userReducer
    );

    const formSchema = z.object({
        name: z.string().min(2),
        scientificName: z.string().min(2),
        treeType: z.string().min(2),
        location: z.string().min(2),
        description: z.string().min(2),
        features: z.string().min(2),
        maintenance: z.string().min(2),
        benefits: z.string().min(2),
        funFact: z.string().min(2),
    });

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            scientificName: "",
            treeType: "",
            location: "",
            description: "",
            features: "",
            maintenance: "",
            benefits: "",
            funFact: "",
        },
    });

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        const treeData = {
            name: values.name,
            scientificName: values.scientificName,
            treeType: values.treeType,
            location: values.location,
            description: values.description,
            features: values.features,
            maintenance: values.maintenance,
            benefits: values.benefits,
            funFact: values.funFact,
            user: user?._id
        }
        try {
            const data = await createTree(treeData);
            console.log(data)
            navigate("/dashboard/tree");
        } catch (error: any) {
            console.log(error.response.data);
        }
    }

    return (
        <div className="flex flex-col justify-center items-center min-h-screen mb-8">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    {
                        inputs.map((input) => (
                            <FormField
                                key={input.name}
                                control={form.control}
                                name={input.name}
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>{input.label}</FormLabel>
                                        <FormControl>
                                            <Input className="w-[350px]" placeholder={input.text} {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        ))
                    }
                    <Button className="w-[350px]" type="submit">Save</Button>
                </form>
            </Form>
        </div>
    )
}

export default CreateTree;