import blog from '../../images/projects/blog0.png'

export default function Blog(props: any) {

    return (

        <section className="bg-dark-transp-purple rounded-sm p-3 my-2 border-2 border-amber-500">

            <h3 className="mb-4 text-2xl text-amber-500 border-b-2 border-licorice">Blog WebApp</h3>
            <img className="p-2 lg:w-2/3" src={blog} />

            <p className='my-1 indent-2'>The user can create posts and like posts from other peoples, a pretty simple blog app. Created with firebase..</p>

            <p>Link: <a className='underline font-bold text-orange-400' href="https://github.com/GabrielVSP/ReactJS/tree/main/Exerc%C3%ADcios/authentication" target='_blank' rel="external">Repository</a></p>

            <ul className='my-2 p-1 bg-dark-purple rounded-md list-inside list-disc flex flex-wrap justify-start lg:w-1/2' translate="no">
                <li className='text-pink-500 basis-1/3'>ReactJS</li>
                <li className='text-pink-500 basis-1/3'>TypeScript</li>
                <li className='text-pink-500 basis-1/3'>Firebase</li>
                <li className='text-pink-500 basis-1/3'>TailwindCSS</li>
            </ul>

        </section>

    )

}