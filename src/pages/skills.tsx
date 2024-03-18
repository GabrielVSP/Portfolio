import php from "../images/php.png"

export default function Skills() {

    return (


        <section className="bg-dark-transp-purple flex flex-col p-3 text-white text-lg">

            <section className="flex justify-between items-stretch flex-col">

                <section className="p-2 my-2 rounded-md border-b-2 border-amber-500">

                    <h3 className="text-2xl mb-2 text-amber-400 text-center">Languages</h3>

                    <ul className="list-inside px-3 flex flex-wrap justify-around items-center gap-4" >
                        <li className="w-1/4 border-b-2 border-violet-600">PHP</li>
                        <li className="w-1/4 border-b-2 border-yellow-400">JavaScript</li>
                        <li className="w-1/4 border-b-2 border-orange-400">HTML</li>
                        <li className="w-1/4 border-b-2 border-blue-400">CSS</li>
                        <li className="w-1/4 border-b-2 border-blue-600">TypeScript</li>
                        <li className="w-1/4 border-b-2 border-orange-600">SQL</li>
                        <li className="w-1/4 border-b-2 border-pink-700">GraphQl</li>
                        <li className="w-1/4 border-b-2 border-purple-900">CSharp</li>
                    </ul>

                </section>

                <section className="p-2 my-2 rounded-md border-b-2 border-amber-500">

                    <h3 className="text-2xl mb-2 text-amber-400 text-center">Frameworks and Libs</h3>

                    <ul className="list-inside px-3 flex flex-wrap justify-around items-center gap-4">
                        <li className="w-1/4 border-b-2 border-y-sky-600">ReactJS</li>
                        <li className="w-1/4 border-b-2 border-red-700">Laravel</li>
                        <li className="w-1/4 border-b-2 border-red-500">Jest</li>
                        <li className="w-1/4 border-b-2 border-blue-900">JQuery</li>
                        <li className="w-1/4 border-b-2 border-cyan-500">Tailwind</li>
                        <li className="w-1/4 border-b-2 border-pink-800">Sass</li>
                        <li className="w-1/4 border-b-2 border-purple-600">Bootstrap</li>
                    </ul>

                </section>

                <section className="p-2 my-2 rounded-md border-b-2 border-amber-500">

                    <h3 className="text-2xl mb-2 text-amber-400 text-center">Others</h3>

                    <ul className="list-inside px-3 flex flex-wrap justify-around items-center gap-4">
                        <li className="w-1/4 border-b-2 border-blue-800">VSCode</li>
                        <li className="w-1/4 border-b-2 border-gray-800">Git</li>
                        <li className="w-1/4 border-b-2 border-amber-700">GitHub</li>
                        <li className="w-1/4 border-b-2 border-amber-500">Firebase</li>
                        
                    </ul>

                </section>

            </section>

        </section>


    )

}