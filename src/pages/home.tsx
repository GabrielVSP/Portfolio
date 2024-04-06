import { Link } from "react-router-dom";
import Typewriter from 'typewriter-effect'

export default function Home() {

    const text = {
        'first': "<p>G</p><p>a</p><p>b</p><p>r</p><p>i</p><p>e</p><p>l</p>",
        'second': "<p>V</p><p>e</p><p>r</p><p>g</p><p>í</p><p>l</p><p>i</p><p>o</p>",
        'third': "<p>W</p><p>e</p><p>b</p>",
        'fourth': "<p>D</p><p>e</p><p>v</p><p>e</p><p>l</p><p>o</p><p>p</p><p>e</p><p>r</p>"
    }

    return (

        <section style={{'height': '88vh'}} className="flex justify-between items-center flex-row p-3 h-full bg-dark-transp-purp text-white text-lg">

            <section className="w-full lg:w-5/12 md:w-5/6">

                <h2 className="my-6 px-5 text-4xl text-amber-400 title">Full-Stack Web Developer</h2>

                <p className="my-3 indent-2 leading-7" style={{'textShadow': '1px 1px black'}}>Hello, my name is Gabriel Vergílio, im a <strong className="text-amber-400">full-stack</strong> web developer. I can help you with almost everything you want: landing pages, chats, blogs, dashboards, etc. I work mainly with <strong className="text-amber-400">JavaScript</strong> and <strong className="text-amber-400">PHP</strong> and i`ve got 1 year of experience on both of those.</p>
                
                <p className="my-3 indent-2 leading-7" style={{'textShadow': '1px 1px black'}}>I`ve earned a lot of <strong className="text-amber-400">experience</strong> designing and creating a plenty of projects and helping other people, with non-profit projects. Currently I`m searching for freelance projetcs to gain experience and improve my abilities. </p>
            </section>

            {/* <section className="lg:block md:hidden hidden bg-dark-purple p-3">
               
                <h2 className="text-2xl mb-2">Useful Links</h2>

                <div className="flex flex-col">
                    <Link to="/skills" className="text-amber-400 text-lg p-1 duration-75 border-dashed hover:text-amber-400 hover:text-xl">Skills</Link>
                    <Link to="/projects" className="text-amber-400 text-lg p-1 duration-75 border-dashed hover:text-amber-400 hover:text-xl">Projects</Link>
                </div>

                <div>
                    <a href="#">Linkedin</a>
                    <a href="#">Github</a>
                </div>

            </section> */}

            <section className="lg:block md:hidden hidden text-amber-400 text-3xl w-1/3 p-3">
                <Typewriter
                    options={{'loop': true}}
                    onInit={(typewriter) => {
                        typewriter.typeString(text.first)    
                          .pauseFor(2500)
                          .deleteAll()
                          .start()
                          .typeString(text.second)
                          .pauseFor(2500)
                          .deleteAll()
                          .start()
                          .typeString(text.third)
                          .pauseFor(2500)
                          .deleteAll()
                          .start()
                          .typeString(text.fourth)
                          .pauseFor(2500)
                          .deleteAll()
                          .start()
                      }}
                />
            </section>
            
        </section>

            

    )

}