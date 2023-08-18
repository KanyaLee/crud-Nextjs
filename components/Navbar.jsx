import Link from "next/link";

export default function Navbar() {
    return (
        <nav className = "flex justify-between items-center bg-teal-950 px-8 py-3 font-sans">
            <Link className = "text-white font-bold "href= {'/'}>List</Link>
            <Link className = "bg-orange-100 rounded px-3 py-2 text-teal-950 text-sm font-bold"href= {'/addTodo'}>Add</Link>
        </nav>
    )
}