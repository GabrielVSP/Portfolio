import finance from '../../images/projects/finance.png'


export default function FinanceControl(props: any) {

    return (

        <section className="bg-light-purple rounded-sm p-3">

            <h3 className="mb-4 text-2xl text-light-pink border-b-2 border-licorice">Finance Control</h3>
            <img className="p-2 lg:w-2/3" src={finance} />

            <p className='my-1 indent-2'>In this project, the user can record expenses and profits, receiving the result at the end. Made to keep track of the user's finances.</p>

            <p>Link: <a className='underline font-bold' href="https://github.com/GabrielVSP/PHPLearn/tree/main/0-Projetos/financeControl" target='_blank' rel="external">Repository</a></p>

            <div className='my-2 p-1 bg-dark-purple rounded-md flex justify-around md:1/2 lg:w-1/2'>
                <img src={props.tech.php} />
                <img src={props.tech.js} />
                <img src={props.tech.mysql} />
                <img src={props.tech.sass} />
            </div>

        </section>

    )

}