import {Bot} from 'lucide-react'


const Navbar = () => {


    return (
        <div className="fixed top-0 left-0 right-0 z-50 bg-white text-black px-4 py-2 flex justify-between shadow-md md:flex-row flex-col md:space-x-4 space-x-0">
            <div className="flex items-center justify-center w-full md:w-auto md:order-first order-last">

                <ul className="flex items-center justify-center space-x-4 md:flex-row flex-col font-bold font-serif text-2xl">
                    BeyondChats
                </ul>


            </div>

            <div className="flex justify-end"> 

                <button
                    // onClick={() => { setIsModalOpen(true) }}
                    type="submit"
                    className="w-50 cursor-pointer rounded-lg bg-blue-500 px-1.5 py-2 font-semibold text-white shadow-sm hover:bg-blue-600 focus:outline-none  focus:ring-blue-500 focus:ring-offset-2"
                >
                    <Bot className="h-5 w-5 inline-block mr-2" />
                    Chatbot Integration

                </button>

            </div>
        </div>
    )
}

export default Navbar
