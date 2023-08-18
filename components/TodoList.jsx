import RemoveBtn from "./RemoveBtn";
import Link from "next/link";
import { HiOutlinePencilAlt } from "react-icons/hi";

const getTodos = async() => {
    try {
        const res = await fetch('http://localhost:3000/api/todos', {
            cache: "no-store",
        });

        if (!res.ok) {
            throw new Error("Failed to fetch todos");
        }

        return res.json();
    } catch (error) {
        console.log("Error loading todos: ", error)
    }
}
export default async function TodoList() {
    const { todos } = await getTodos();

    return (
        <>
        {todos.map((t)=> (
            <div className= "p-7 border rounded-md border-orange-100 my-5 flex justify-between gap-5 items-start">
                <div>
                    <h2 className ="font-bold text-2xl">{t.title}</h2>
                    <h2>{t.description}</h2>
                </div>

                <div className ="flex gap-2">
                    <RemoveBtn id = {t._id} />
                    <Link href = {`/editTodo/${t._id}`}>
                        <HiOutlinePencilAlt size={24} />
                    </Link>
                </div>
            </div>
            ))}
        </>
    );
}