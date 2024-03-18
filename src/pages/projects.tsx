import FinanceControl from "../components/projects/financeControl";

import html from "../images/logos/html.png"
import php from "../images/logos/php.png"
import js from '../images/logos/js.png'
import sass from "../images/logos/sass.png"
import mysql from "../images/logos/mysql.png"

export default function Projects() {

    return (

            <section className="flex flex-col p-3 text-white text-lg">

                <section className="flex">

                    <FinanceControl tech={{php, js, mysql, sass}} />

                </section>

            </section>

    )

}