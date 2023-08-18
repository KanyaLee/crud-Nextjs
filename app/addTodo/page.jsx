"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";


export default function AddTodo() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!title || !description) {
            alert('title and description are required')
            return; 
        }

        try {
            const res = await fetch('http//localhost:3000/api/todos', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
            },
        
            body: JSON.stringify({title,description}),

        });

        if (res.ok) {
            router.push('/')
        } else {
            // throw new Error ("Failed to create a todo")
            router.push('/')
        }
        } catch (error) {
            
        }
    }




    return <form className="flex flex-col gap-2">
        <input 
        onChange={(e) => setTitle(e.target.value)}
        value = {title}
            className="text-black border border-orange-100 px-8 py-2"
            type = "text" 
            placeholder = "todo title" 
        />

        <input 
        onChange={(e) => setDescription(e.target.value)}
        value = {description}
            className="text-black border border-orange-100 px-8 py-2"
            type = "text" 
            placeholder = "todo Description" 
        />

        <button onSubmit= {handleSubmit} type ="submit" className="bg-orange-100 rounded text-teal-900 py-3 px-6 w-fit text-md font-bold ">Add Todo</button>

    </form>
}