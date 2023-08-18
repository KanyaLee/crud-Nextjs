export default function EditTodo() {
    return (
        <form className="flex flex-col gap-2">
            <input 
                className="text-black border border-orange-100 px-8 py-2"
                type = "text" 
                placeholder = "todo title" 
            />

            <input 
                className="text-black border border-orange-100 px-8 py-2"
                type = "text" 
                placeholder = "todo Description" 
            />

            <button className="bg-orange-100 rounded text-teal-900 py-3 px-6 w-fit text-md font-bold ">Update Todo</button>

    </form>
    )
}