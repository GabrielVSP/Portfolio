import finance from '../../images/projects/finance.png'


export default function FinanceControl(props: any) {

    return (

        <section className="bg-dark-transp-purple rounded-sm p-3 my-2 border-2 border-amber-500">

            <h3 className="mb-4 text-2xl text-amber-500 border-b-2 border-licorice">Finance Control</h3>
            <img className="p-2 lg:w-2/3" src={finance} />

            <p className='my-1 indent-2'>In this project, the user can record expenses and profits, receiving the result at the end. Made to keep track of the user's finances.</p>

            <p>Link: <a className='underline font-bold text-orange-400' href="https://github.com/GabrielVSP/PHPLearn/tree/main/0-Projetos/financeControl" target='_blank' rel="external">Repository</a></p>

            <ul className='my-2 p-1 bg-dark-purple rounded-md list-inside list-disc flex flex-wrap justify-start lg:w-1/2' translate="no">
                <li className='text-pink-500 lg:basis-1/3 basis-1/2'>PHP</li>
                <li className='text-pink-500 lg:basis-1/3 basis-1/2'>JavaScript</li>
                <li className='text-pink-500 lg:basis-1/3 basis-1/2'>MySql</li>
                <li className='text-pink-500 lg:basis-1/3 basis-1/2'>Sass</li>
            </ul>

        </section>

    )

}