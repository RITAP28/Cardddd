import { Button } from "@/components/ui/button";
import { getSingleTree, deleteTree } from "@/redux/api/treeApi";
import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { treeTemp } from "../redux/reducer/treeReducer";
import { useDispatch } from "react-redux";

const ViewTree = () => {

    const navigate = useNavigate();
    const [search] = useSearchParams();
    const id = search.get("treeId");
    const [treeData, setTreeData] = useState<object | any>(null);

    const dispatch = useDispatch();

    const gotTree = async () => {
        try {
            const data = await getSingleTree(id!);
            dispatch(treeTemp(data.tree));
            setTreeData(data.tree);
        } catch (error: any) {
            console.log(error.response.data);
        }
    }

    useEffect(() => {
        gotTree();
    }, [])

    const delTree = async () => {
        try {
            const data = await deleteTree(id!);
            console.log(data)
            navigate("/dashboard/tree")
        } catch (error: any) {
            console.log(error.response.data);
        }
    }

    const downloadFile = (linked: string, fileName: string) => {
        fetch(linked, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/pdf',
            },
        })
            .then(response => response.blob())
            .then(blob => {
                const url = window.URL.createObjectURL(new Blob([blob]));

                const link = document.createElement('a');
                link.href = url;
                link.download = fileName;

                document.body.appendChild(link);

                link.click();

                link.parentNode!.removeChild(link);
            });
    };

    return (
        <div className='flex flex-col justify-center gap-4 items-center mt-8'>
            <h1>Tree Details</h1>
            <div>
                <img src={treeData?.qrCode.url} alt={treeData?.qrCode.public_id} />
            </div>
            <div>
                <p>TreeId: {treeData?._id}</p>
                <p>Name: {treeData?.name}</p>
                <p>Scientific Name: {treeData?.scientificName}</p>
                <p>Tree Type: {treeData?.treeType}</p>
                <p>Location: {treeData?.location}</p>
                <p>Description: {treeData?.description}</p>
                <p>Special Features: {treeData?.features}</p>
                <p>Maintenance: {treeData?.maintenance}</p>
                <p>Benefits: {treeData?.benefits}</p>
                <p>Fun Facts: {treeData?.funFact}</p>
            </div>
            <div className="flex gap-6">
                <Button onClick={() => downloadFile(treeData?.qrCode.url, `${treeData?._id}.png`)}>Download</Button>
                <Button variant="outline" onClick={() => navigate(`/dashboard/tree/update?treeId=${treeData?._id}`)}>Edit</Button>
                <Button onClick={() => delTree()} variant="destructive">Delete</Button>
            </div>
        </div>
    )
}

export default ViewTree;