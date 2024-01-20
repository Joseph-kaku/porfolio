" use client "



export default function Projects() {
    return(
        <div id="projects" className="mb-40 grid grid-flow-row justify-center items-center scroll-mt-32">

<div className="mb-20 scroll-mt-20 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="https://macawmanager.onrender.com/api-docs/">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> Backend API project (Macaw Manager) </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"> An API that can be connected to a frontend application to make an app or a website that handles categorization of requests for projects for a company. </p>
        <a href="https://joseph-kaku.github.io/BasicSite/frontendwebsite/index.html" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Go to page
            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
</div>


<div className="mb-20 scroll-mt-20 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="https://shoeproject.onrender.com/api-docs/">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> Backend API project (Shoelog) </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"> This Backend API project is more fun. It simply keeps a log of Owners and whether or not they are shoe collectors. It also keeps a log of who owns what and details about the shoes showcased. A frontend application could be developed to showoff they shoes that are logged. </p>
        <a href="https://joseph-kaku.github.io/BasicSite/frontendwebsite/index.html" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Go to page
            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>

        </div>
    )
}