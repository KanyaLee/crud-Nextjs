import { HiOutlineTrash } from "react-icons/hi"

export default function RemoveBtn( { id }) {
    // const router = user
    // const handleRemove = async () => {
    //     try {
    //         const res = await fetch(`http://localhost:3000/api/todos?id=${id}`, {
    //             method: "DELETE",
    //         });
    //         if (res.status === 204) window.location.reload();
    //     } catch (error) {
    //         console.log("Error deleting todo: ", error);
    //     }
    // };


    return (
        <button className="text-teal-100" >
            <HiOutlineTrash size= {24} />
        </button>
    );
}