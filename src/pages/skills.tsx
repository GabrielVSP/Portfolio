export default function Skills() {

    return (

        <section className="flex justify-center items-center min-h-3/4 w-full">

            <section className="w-3/4 p-3 bg-dark-purple text-white text-lg rounded-md border-amber-500 border-dashed border-2">

                <h2 className="my-4 text-3xl text-amber-500">Technologies I`m experienced with</h2>

                <section className="flex justify-between items-center flex-col">

                    <section className="border-b-2 my-2 w-1/4 shadow-lg border-licorice">

                        <h3 className="text-2xl mb-2 text-amber-400 text-center">Languages</h3>

                        {/* display: grid;
                            text-align: center;
                            justify-content: center;
                            justify-items: center;
                            align-items: center;
                            align-content: center;
                            gap: 5px 10px;
                            grid-template-rows: repeat(2, 2fr);
                            grid-template-columns: repeat(4, 1fr); */}

                        <ul className="list-inside px-3 grid justify-center justify-items-center items-center content-center gap-2" style={{'gridTemplateRows': 'repeat(2, 2fr)', 'gridTemplateColumns': 'repeat(4, 1fr)'}}>
                            <li className="border-b-2 border-violet-600">PHP</li>
                            <li className="border-b-2 border-yellow-400">JavaScript</li>
                            <li className="border-b-2 border-orange-400">HTML</li>
                            <li className="border-b-2 border-blue-400">CSS</li>
                            <li className="border-b-2 border-blue-600">TypeScript</li>
                            <li className="border-b-2 border-orange-600">MySql</li>
                            <li className="border-b-2 border-pink-700">GraphQl</li>
                            <li className="border-b-2 border-purple-900">CSharp</li>
                        </ul>

                    </section>

                    <section className="border-b-2 my-2 w-1/4 shadow-lg border-licorice">

                        <h3 className="text-2xl mb-2 text-amber-400 text-center">Frameworks and Libs</h3>

                        <ul className="list-disc list-inside px-3">
                            <li>ReactJS</li>
                            <li>Laravel</li>
                            <li>Jest</li>
                            <li>JQuery</li>
                            <li>TailwindCSS</li>
                            <li>Bootstrap</li>
                        </ul>

                    </section>

                    <section className="border-b-2 my-2 w-1/4 shadow-lg border-licorice">

                        <h3 className="text-2xl mb-2 text-amber-400 text-center">Others</h3>

                        <ul className="list-disc list-inside px-3">
                            <li>VS Code</li>
                            <li>Git</li>
                            <li>GitHub</li>
                            <li>Firebase</li>
                            <li>Sass</li>
                        </ul>

                    </section>

                </section>

            </section>

        </section>

    )

}