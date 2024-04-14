import FinanceControl from "../components/projects/financeControl";

import Blog from "../components/projects/blog";
import ChatApp from "../components/projects/chatapp";
import TimeCounter from "../components/projects/timecounter";

export default function Projects() {

    return (

            <section className="flex flex-col p-3 text-white text-lg">

                <section className="flex flex-col text-xl">

                    <FinanceControl />
                    <Blog />
                    <ChatApp />
                    <TimeCounter />

                </section>

            </section>

    )

}