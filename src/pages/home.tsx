

export default function Home() {

    return (

        <section style={{'height': '88vh'}} className="flex justify-between items-center flex-row p-3 h-full bg-dark-transp-purp text-white text-lg">

            <section className="w-full lg:w-5/12 md:w-5/6">

                <h2 className="my-6 px-5 text-4xl text-amber-400 title">Full-Stack Web Developer</h2>

                <p className="my-3 indent-2 leading-7" style={{'textShadow': '1px 1px black'}}>Hello, my name is Gabriel Vergílio, im a <strong className="text-amber-400">full-stack</strong> web developer. I can help you with almost everything you want: landing pages, chats, blogs, dashboards, etc. I work mainly with <strong className="text-amber-400">JavaScript</strong> and <strong className="text-amber-400">PHP</strong> and i`ve got 1 year of experience on both of those.</p>
                
                <p className="my-3 indent-2 leading-7" style={{'textShadow': '1px 1px black'}}>I`ve earned a lot of <strong className="text-amber-400">experience</strong> designing and creating a plenty of projects and helping other people, with non-profit projects. Currently I`m searching for freelance projetcs to gain experience and improve my abilities. </p>
            </section>

            <section className="lg:block md:hidden hidden">
                {/* <img src={require('../images/assets/pc.png')} alt="Computer" /> */}
            </section>
            
        </section>

            

    )

}