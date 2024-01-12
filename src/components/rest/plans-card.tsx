import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { togglePaid } from "@/redux/reducer/userReducer";
import { RootState } from "../../redux/store";

export function PlansCard({ plan } : any) {

    const dispatch = useDispatch();

    const { isPaid, user } = useSelector(
        (state: RootState) => state.userReducer
    );

    const handlePayment = async () => {
        try {
            const paymentInfo = {
                amount: plan.price,
                planType: plan.name,
                validity: plan.validity
            }
            console.log(paymentInfo)
            const config = { headers: { "Content-Type": "multipart/form-data" }, withCredentials: true };
            const { data } = await axios.post("http://localhost:7070/api/v1/pay/checkout", paymentInfo, config);
            console.log(data.razInfo);
            const options = {
                key: "rzp_test_XEchPNMaUE5wVC",
                amount: data.order.amount,
                currency: data.order.currency,
                name: "Shivaji",
                description: "just fine",
                order_id: data.order.id,
                callback_url: `http://localhost:7070/api/v1/pay/verify/${data.razInfo.validity}/${data.razInfo.amount}/${data.razInfo.planType}`,
                prefill: {
                    name: user?.name,
                    email: user?.email,
                    contact: "9000090000"
                },
                notes: {
                    "address": "Razorpay Corporate Office"
                },
                theme: {
                    "color": "#3399cc"
                }
            }
            const razor = new (window as any).Razorpay(options);
            razor.open();
            dispatch(togglePaid(data.user));
        } catch (error: any) {
            console.log(error.response.data.message)
        }
    }

    return (
        <Card className="w-[300px]">
            {isPaid && <p className="text-center">I will update this later</p>}
            <CardHeader className="items-center">
                <CardTitle>{plan.name}</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
                <div className="space-y-4">
                    <p>Plan Validity: {plan.validity} minutes</p>
                    <p>Plan Price: {plan.price}</p>
                </div>
            </CardContent>
            <CardFooter>
                <Button onClick={handlePayment} className="w-full" disabled={isPaid}>Buy Plan</Button>
            </CardFooter>
        </Card>
    )
}
