import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Tree } from "../../types/types";
import { useNavigate } from "react-router-dom";

interface PropsType {
    tree: Tree | null;
}

export function TreeCard({ tree }: PropsType) {

    const navigate = useNavigate();

    return (
        <Card onClick={() => navigate(`/dashboard/tree/view?treeId=${tree?._id}`)} className="w-[300px] flex flex-col justify-center items-center">
            <CardHeader className="text-center">
                <CardTitle>{tree?.name}</CardTitle>
                <CardDescription>{tree?.scientificName}</CardDescription>
            </CardHeader>
            <CardContent>
                <img src={tree?.qrCode.url} alt={tree?.qrCode.public_id} />
            </CardContent>
        </Card>
    )
}
