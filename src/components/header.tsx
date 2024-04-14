import { Link } from "react-router-dom";

export default function Header() {

    return (

        <header style={{'height': '11vh'}} className="bg-russian px-2 py-5 flex justify-between items-center shadow-2xl">

            <h1 className="text-3xl text-amber-400" style={{'textShadow': '1px 1px orange'}}>&lt; GABRIEL /&gt;</h1>

            <nav className="p-2">
                <Link to="/Portfolio" translate="no" className="text-amber-400 text-xl p-1 duration-75 border-dashed hover:text-amber-400 hover:border-amber-400 hover:border-b-2">Home</Link>
                <Link to="/Portfolio/skills" translate="no" className="text-amber-400 text-xl p-1 duration-75 border-dashed hover:text-amber-400 hover:border-amber-400 hover:border-b-2">Skills</Link>
                <Link to="/Portfolio/projects" translate="no" className="text-amber-400 text-xl p-1 duration-75 border-dashed hover:text-amber-400 hover:border-amber-400 hover:border-b-2">Projects</Link>
            </nav>

        </header>

    )

}