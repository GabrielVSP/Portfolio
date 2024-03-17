import FinanceControl from "../components/projects/financeControl";

import html from "../images/logos/html.png"
import php from "../images/logos/php.png"
import js from '../images/logos/js.png'
import sass from "../images/logos/sass.png"
import mysql from "../images/logos/mysql.png"

export default function Projects() {

    return (

        <section className="flex justify-center items-center min-h-3/4 w-full">

            <section className="w-3/4 p-3 bg-dark-purple text-white text-lg rounded-md border-amber-500 border-dashed border-2">

                <h2 className="my-4 text-3xl text-amber-500">My Projects</h2>

                <section className="flex">

                    <FinanceControl tech={{php, js, mysql, sass}} />

                </section>

            </section>

        </section>

    )

}