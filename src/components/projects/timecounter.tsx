import time from '../../images/projects/timecounter.png'


export default function TimeCounter(props: any) {

    return (

        <section className="bg-dark-transp-purple rounded-sm p-3 my-2 border-2 border-amber-500">

            <h3 className="mb-4 text-2xl text-amber-500 border-b-2 border-licorice">Time Counter</h3>
            <img className="p-2 lg:w-2/3" src={time} />

            <p className='my-1 indent-2'>This project is used to count time of tasks, the user need to create an account, then he can create a timer, he can pause/resume the counting. After the user stops the counting, data as start time and duration will be saved on the History page and displayed to the user.</p>

            <p>Link: <a className='underline font-bold text-orange-400' href="https://github.com/GabrielVSP/PHPLearn/tree/main/0-Projetos/TimeCounter" target='_blank' rel="external">Repository</a></p>

            <ul className='my-2 p-1 bg-dark-purple rounded-md list-inside list-disc flex flex-wrap justify-start lg:w-1/2' translate="no">
                <li className='text-pink-500 basis-1/3'>PHP</li>
                <li className='text-pink-500 basis-1/3'>JavaScript</li>
                <li className='text-pink-500 basis-1/3'>MySql</li>
                <li className='text-pink-500 basis-1/3'>Tailwind</li>
            </ul>

        </section>

    )

}