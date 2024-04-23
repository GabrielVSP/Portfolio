import { Link } from "react-router-dom";
import Typewriter from 'typewriter-effect'

export default function Home() {

    return (

        <section style={{'height': '88vh'}} className="flex lg:justify-between justify-evenly items-center lg:flex-row flex-col p-3 h-full bg-dark-transp-purp text-white text-lg">

            <section className="w-full lg:w-5/12 md:w-5/6 text-justify">

                <h2 className="my-6 px-5 text-4xl text-amber-400 title">Full-Stack Web Developer</h2>

                <p className="my-3 indent-2 leading-7" style={{'textShadow': '1px 1px black'}}>Hello, my name is Gabriel Vergílio, im a <strong className="text-amber-400">full-stack</strong> web developer. I can help you with almost everything you want: landing pages, chats, blogs, dashboards, etc. I work mainly with <strong className="text-amber-400">JavaScript</strong> and <strong className="text-amber-400">PHP</strong> and i`ve got 1 year of experience on both of those.</p>
                
                <p className="my-3 indent-2 leading-7" style={{'textShadow': '1px 1px black'}}>I`ve earned a lot of <strong className="text-amber-400">experience</strong> designing and creating a plenty of projects and helping other people, with non-profit projects. Currently I`m searching for freelance projetcs to gain experience and improve my abilities. </p>
            </section>

            <section className="lg:flex lg:w-1/4 w-3/4 p-3 bg-russian rounded-md shadow-lg">
                
                <div>

                    <h2 className="text-amber-400 text-3xl my-3">Contact</h2>

                    <p>You can contact me through: </p>

                    <div className="my-5 w-2/3 flex justify-evenly items-center">
                        <a href="https://github.com/GabrielVSP/" target="_blank"><img src={require("../images/assets/github.png")} alt="GitHub Logo" className="hover:border border-amber-500 rounded-full border-1" /></a>
                        <a href="https://www.linkedin.com/in/gabriel-verg%C3%ADlio-77768a28b/" target="_blank"><img src={require("../images/assets/linkedin.png")} alt="Linkedin Logo" className="hover:border border-amber-500 rounded-full border-1" /></a>
                        <a href="https://wa.me/qr/K4ZYQHFCOG6XL1" target="_blank"><img src={require("../images/assets/wpp.png")} alt="WhatsApp Logo" className="hover:border border-amber-500 rounded-full border-1" /></a>
                    </div>

                    <p>You can also contact me through email: <strong className="break-words">gabrielverg134s@gmail.com</strong></p>

                </div>

                <div className="bg-amber-300 w-1/12 rounded-tl-full rounded-br-full"></div>

            </section>
            
        </section>

            

    )

}