
export default function Skills() {

    return (


        <section className="bg-dark-transp-purple flex flex-col p-3 text-white text-lg">

            <section className="flex justify-between items-stretch flex-col">

                <section className="flex items-center justify-center flex-col p-2 my-2 rounded-md border-b-2 border-amber-500">

                    <h3 className="text-3xl my-3 text-amber-400 text-center">Languages</h3>

                    <ul className="list-inside px-3 flex flex-wrap justify-center items-center gap-px lg:w-8/12 lg:gap-1" translate="no">
                        <li className="w-1/4 basis-1/4 bg-purp flex justify-center flex-col items-center rounded-md p-2 lg:basis-1/5">
                            <img title="php" src={require("../images/logos/php.png")} alt="PHP Logo" /> 
                            <p className="text-lightpink text-lg" >PHP</p> 
                        </li>
                        <li className="w-1/4 basis-1/4 bg-purp flex justify-center flex-col items-center rounded-md p-2 lg:basis-1/5">
                            <img src={require("../images/logos/js.png")} alt="JavaScript Logo" />
                            <p className="text-lightpink text-lg" >JavaScript</p> 
                        </li>
                        <li className="w-1/4 basis-1/4 bg-purp flex justify-center flex-col items-center rounded-md p-2 lg:basis-1/5">
                            <img src={require("../images/logos/html.png")} alt="HTML Logo" />
                            <p className="text-lightpink text-lg" >HTML</p> 
                        </li>
                        <li className="w-1/4 basis-1/4 bg-purp flex justify-center flex-col items-center rounded-md p-2 lg:basis-1/5">
                            <img src={require("../images/logos/css.png")} alt="CSS Logo" />
                            <p className="text-lightpink text-lg" >CSS</p> 
                        </li>
                        <li className="w-1/4 basis-1/4 bg-purp flex justify-center flex-col items-center rounded-md p-2 lg:basis-1/5">
                            <img src={require("../images/logos/ts.png")} alt="TypeScript Logo" />
                            <p className="text-lightpink text-lg" >TypeScript</p> 
                        </li>
                        <li className="w-1/3 basis-1/4 bg-purp flex justify-center flex-col items-center rounded-md p-2 lg:basis-1/5">
                            <img src={require("../images/logos/sql.png")} alt="SQL Logo" />
                            <p className="text-lightpink text-lg" >SQL</p> 
                        </li>
                        <li className="w-1/3 basis-1/4 bg-purp flex justify-center flex-col items-center rounded-md p-2 lg:basis-1/5">
                            <img src={require("../images/logos/graphql.png")} alt="GraphQL Logo" />
                            <p className="text-lightpink text-lg" >GraphQL</p> 
                        </li>
                        <li className="w-1/3 basis-1/4 bg-purp flex justify-center flex-col items-center rounded-md p-2 lg:basis-1/5">
                            <img src={require("../images/logos/csharp.png")} alt="Csharp Logo" />
                            <p className="text-lightpink text-lg" >CSharp</p> 
                        </li>
                    </ul>

                </section>

                <section className="flex items-center justify-center flex-col p-2 my-2 rounded-md border-b-2 border-amber-500">

                    <h3 className="text-3xl my-3 text-amber-400 text-center">Frameworks and Libs</h3>

                    <ul className="list-inside px-3 flex flex-wrap justify-center items-center gap-px lg:w-8/12 lg:gap-1" translate="no">
                        <li className="w-1/4 basis-1/4 bg-purp flex justify-center flex-col items-center rounded-md p-2 lg:basis-1/5">
                            <img src={require("../images/logos/react.png")} alt="ReactJS Logo" />
                            <p className="text-lightpink text-lg">ReactJS</p> 
                        </li>
                        <li className="w-1/4 basis-1/4 bg-purp flex justify-center flex-col items-center rounded-md p-2 lg:basis-1/5">
                            <img src={require("../images/logos/laravel.png")} alt="Laravel Logo" />
                            <p className="text-lightpink text-lg">Laravel</p> 
                        </li>
                        <li className="w-1/4 basis-1/4 bg-purp flex justify-center flex-col items-center rounded-md p-2 lg:basis-1/5">
                            <img src={require("../images/logos/jest.png")} alt="Jest Logo" />
                            <p className="text-lightpink text-lg">Jest</p> 
                        </li>
                        <li className="w-1/4 basis-1/4 bg-purp flex justify-center flex-col items-center rounded-md p-2 lg:basis-1/5">
                            <img src={require("../images/logos/jquery.png")} alt="Jquery Logo" />
                            <p className="text-lightpink text-lg">Jquery</p> 
                        </li>
                        <li className="w-1/4 basis-1/4 bg-purp flex justify-center flex-col items-center rounded-md p-2 lg:basis-1/5">
                            <img src={require("../images/logos/tailwind.png")} alt="Tailwind Logo" />
                            <p className="text-lightpink text-lg">Tailwind</p> 
                        </li>
                        <li className="w-1/3 basis-1/4 bg-purp flex justify-center flex-col items-center rounded-md p-2 lg:basis-1/5">
                            <img src={require("../images/logos/sass.png")} alt="Sass Logo" />
                            <p className="text-lightpink text-lg">Sass</p> 
                        </li>
                        <li className="w-1/3 basis-1/4 bg-purp flex justify-center flex-col items-center rounded-md p-2 lg:basis-1/5">
                            <img src={require("../images/logos/bootstrap.png")} alt="Bootstrap Logo" />
                            <p className="text-lightpink text-lg">Bootstrap</p> 
                        </li>
                    </ul>

                </section>

                <section className="flex items-center justify-center flex-col p-2 my-2 rounded-md border-b-2 border-amber-500">

                    <h3 className="text-3xl my-3 text-amber-400 text-center">Others</h3>

                    <ul className="list-inside px-3 flex flex-wrap justify-center items-center gap-px lg:w-8/12 lg:gap-1" translate="no">
                        <li className="w-1/4 basis-1/4 bg-purp flex justify-center flex-col items-center rounded-md p-2 lg:basis-1/5">
                            <img src={require("../images/logos/vscode.png")} alt="VsCode Logo" />
                            <p className="text-lightpink text-lg">VsCode</p> 
                        </li>
                        <li className="w-1/4 basis-1/4 bg-purp flex justify-center flex-col items-center rounded-md p-2 lg:basis-1/5">
                            <img src={require("../images/logos/git.png")} alt="Git Logo" />
                            <p className="text-lightpink text-lg">Git</p> 
                        </li>
                        <li className="w-1/4 basis-1/4 bg-purp flex justify-center flex-col items-center rounded-md p-2 lg:basis-1/5">
                            <img src={require("../images/logos/github.png")} alt="GitHub Logo" />
                            <p className="text-lightpink text-lg">GitHub</p> 
                        </li>
                        <li className="w-1/4 basis-1/4 bg-purp flex justify-center flex-col items-center rounded-md p-2 lg:basis-1/5">
                            <img src={require("../images/logos/firebase.png")} alt="Firebase Logo" />
                            <p className="text-lightpink text-lg">Firebase</p> 
                        </li>               
                    </ul>

                </section>

            </section>

        </section>


    )

}