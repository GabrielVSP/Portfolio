import chat from '../../images/projects/chatapp.png'

export default function ChatApp(props: any) {

    return (

        <section className="bg-dark-transp-purple rounded-sm p-3 my-2 border-2 border-amber-500">

            <h3 className="mb-4 text-2xl text-amber-500 border-b-2 border-licorice">Blog WebApp</h3>
            <img className="p-2 lg:w-2/3" src={chat} />

            <p className='my-1 indent-2'>The user needs to sign-in to use the app, then he type the room name in the input and join the room. Many people can join the same chat room.</p>

            <p>Link: <a className='underline font-bold text-orange-400' href="https://github.com/GabrielVSP/ReactJS/tree/main/Exerc%C3%ADcios/chat-app-" target='_blank' rel="external">Repository</a></p>

            <ul className='my-2 p-1 bg-dark-purple rounded-md list-inside list-disc flex flex-wrap justify-start lg:w-1/2'>
                <li className='text-pink-500 basis-1/3'>ReactJS</li>
                <li className='text-pink-500 basis-1/3'>TypeScript</li>
                <li className='text-pink-500 basis-1/3'>Firebase</li>
                <li className='text-pink-500 basis-1/3'>TailwindCSS</li>
            </ul>

        </section>

    )

}