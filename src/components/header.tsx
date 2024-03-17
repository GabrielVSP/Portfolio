import { Link } from "react-router-dom";

export default function Header() {

    return (

        <header className="bg-russian px-2 py-5 mb-10 flex justify-between items-center shadow-2xl opacity-90">

            <h1 className="text-3xl text-amber-400" style={{'textShadow': '1px 1px orange'}}>&lt; GABRIEL /&gt;</h1>

            <nav className="p-1">
                <Link to="/" className="text-amber-400 text-lg p-1 rounded-md duration-75 border-dashed hover:text-amber-300 hover:border-amber-400 hover:border-b-2">Home</Link>
                <Link to="/skills" className="text-amber-400 text-lg p-1 rounded-md duration-75 border-dashed hover:text-amber-300 hover:border-amber-400 hover:border-b-2">Skills</Link>
                <Link to="/projects" className="text-amber-400 text-lg p-1 rounded-md duration-75 border-dashed hover:text-amber-300 hover:border-amber-400 hover:border-b-2">Projects</Link>
            </nav>

        </header>

    )

}