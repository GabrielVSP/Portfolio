
export default function Skills() {

    return (


        <section className="bg-dark-transp-purple flex flex-col p-3 text-white text-lg">

            <section className="flex justify-between items-stretch flex-col">

                <section className="flex items-center justify-center flex-col p-2 my-2 rounded-md border-b-2 border-amber-500">

                    <h3 className="text-3xl my-3 text-amber-400 text-center">Languages</h3>

                    <ul className="list-inside px-3 flex flex-wrap justify-center items-center gap-px lg:w-8/12 lg:gap-1">
                        <li className="w-1/4 basis-1/4 bg-purp flex justify-center rounded-md p-2 lg:basis-1/5"><img src={require("../images/logos/php.png")} alt="PHP Logo" /></li>
                        <li className="w-1/4 basis-1/4 bg-purp flex justify-center rounded-md p-2 lg:basis-1/5"><img src={require("../images/logos/js.png")} alt="JavScript Logo" /></li>
                        <li className="w-1/4 basis-1/4 bg-purp flex justify-center rounded-md p-2 lg:basis-1/5"><img src={require("../images/logos/html.png")} alt="HTML Logo" /></li>
                        <li className="w-1/4 basis-1/4 bg-purp flex justify-center rounded-md p-2 lg:basis-1/5"><img src={require("../images/logos/css.png")} alt="CSS Logo" /></li>
                        <li className="w-1/4 basis-1/4 bg-purp flex justify-center rounded-md p-2 lg:basis-1/5"><img src={require("../images/logos/ts.png")} alt="TypeScript Logo" /></li>
                        <li className="w-1/3 basis-1/4 bg-purp flex justify-center rounded-md p-2 lg:basis-1/5"><img src={require("../images/logos/sql.png")} alt="SQL Logo" /></li>
                        <li className="w-1/3 basis-1/4 bg-purp flex justify-center rounded-md p-2 lg:basis-1/5"><img src={require("../images/logos/graphql.png")} alt="GraphQL Logo" /></li>
                        <li className="w-1/3 basis-1/4 bg-purp flex justify-center rounded-md p-2 lg:basis-1/5"><img src={require("../images/logos/csharp.png")} alt="Csharp Logo" /></li>
                    </ul>

                </section>

                <section className="flex items-center justify-center flex-col p-2 my-2 rounded-md border-b-2 border-amber-500">

                    <h3 className="text-3xl my-3 text-amber-400 text-center">Frameworks and Libs</h3>

                    <ul className="list-inside px-3 flex flex-wrap justify-center items-center gap-px lg:w-8/12 lg:gap-1">
                        <li className="w-1/4 basis-1/4 bg-purp flex justify-center rounded-md p-2 lg:basis-1/5"><img src={require("../images/logos/react.png")} alt="ReactJS Logo" /></li>
                        <li className="w-1/4 basis-1/4 bg-purp flex justify-center rounded-md p-2 lg:basis-1/5"><img src={require("../images/logos/laravel.png")} alt="Laravel Logo" /></li>
                        <li className="w-1/4 basis-1/4 bg-purp flex justify-center rounded-md p-2 lg:basis-1/5"><img src={require("../images/logos/jest.png")} alt="Jest Logo" /></li>
                        <li className="w-1/4 basis-1/4 bg-purp flex justify-center rounded-md p-2 lg:basis-1/5"><img src={require("../images/logos/jquery.png")} alt="Jquery Logo" /></li>
                        <li className="w-1/4 basis-1/4 bg-purp flex justify-center rounded-md p-2 lg:basis-1/5"><img src={require("../images/logos/tailwind.png")} alt="Tailwind Logo" /></li>
                        <li className="w-1/3 basis-1/4 bg-purp flex justify-center rounded-md p-2 lg:basis-1/5"><img src={require("../images/logos/sass.png")} alt="Sass Logo" /></li>
                        <li className="w-1/3 basis-1/4 bg-purp flex justify-center rounded-md p-2 lg:basis-1/5"><img src={require("../images/logos/bootstrap.png")} alt="Bootstrap Logo" /></li>
                    </ul>

                </section>

                <section className="flex items-center justify-center flex-col p-2 my-2 rounded-md border-b-2 border-amber-500">

                    <h3 className="text-3xl my-3 text-amber-400 text-center">Others</h3>

                    <ul className="list-inside px-3 flex flex-wrap justify-center items-center gap-px lg:w-8/12 lg:gap-1">
                        <li className="w-1/4 basis-1/4 bg-purp flex justify-center rounded-md p-2 lg:basis-1/5"><img src={require("../images/logos/vscode.png")} alt="VsCode Logo" /></li>
                        <li className="w-1/4 basis-1/4 bg-purp flex justify-center rounded-md p-2 lg:basis-1/5"><img src={require("../images/logos/git.png")} alt="Git Logo" /></li>
                        <li className="w-1/4 basis-1/4 bg-purp flex justify-center rounded-md p-2 lg:basis-1/5"><img src={require("../images/logos/github.png")} alt="GitHub Logo" /></li>
                        <li className="w-1/4 basis-1/4 bg-purp flex justify-center rounded-md p-2 lg:basis-1/5"><img src={require("../images/logos/firebase.png")} alt="Firebase Logo" /></li>               
                    </ul>

                </section>

            </section>

        </section>


    )

}