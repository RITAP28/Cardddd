import { getSingleTree } from "@/redux/api/treeApi";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const Display = () => {

    const [search] = useSearchParams();
    const id = search.get("treeId");
    const [treeData, setTreeData] = useState<object | any>(null);

    const gotTree = async () => {
        try {
            const data = await getSingleTree(id!);
            setTreeData(data.tree);
        } catch (error: any) {
            console.log(error.response.data);
        }
    }

    useEffect(() => {
        gotTree();
    }, [])

    return (
        <div className='flex flex-col justify-center gap-4 items-center mt-8'>
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
    )
}

export default Display;