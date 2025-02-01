import { useState, useEffect } from 'react'
import { X } from "lucide-react"
// import { Link } from 'lucide-react'

const Modal = ({ onClose, onDataReceive }) => {

    const [companyName, setCompanyName] = useState('')
    const [websiteUrl, setWebsiteUrl] = useState('')
    const [description, setDescription] = useState('')
    const [data, setData] = useState([])


    return (
        <div className="fixed inset-0  bg-opacity-30 backdrop-blur-sm flex items-center justify-center">

            <div className="mt-10 flex flex-col gap-5  p-5 ">

                <button className="place-self-end cursor-pointer" onClick={onClose}><X /></button>

                <div className='bg-white rounded-xl px-20 py-10 flex flex-col gap-5 items-center mx-4 text-black shadow-lg shadow-indigo-900/50'>

                    <h1 className="text-xl font-semibold mb-4">Update Form</h1>

                    <div className='flex flex-col gap-5'>

                        <div>
                            <label htmlFor="company-name" className="block text-sm font-medium text-gray-700  mb-1">
                                Company Name
                            </label>
                            <input
                                type="text"
                                id="company-name"
                                placeholder="Company Name"
                                className="w-full px-3 py-2 border text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                required
                                value={companyName}
                                onChange={(e) => setCompanyName(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="website-url" className="block text-sm font-medium text-gray-700 mb-1">
                                Website URL
                            </label>
                            <input
                                type="url"
                                id="website-url"
                                placeholder="Website URL"
                                className="w-full px-3 py-2 border  text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                required
                                value={websiteUrl}
                                onChange={(e) => setWebsiteUrl(e.target.value)}
                            />
                        </div>

                        <div>
                            <label htmlFor="company-description" className="block text-sm font-medium text-gray-700 mb-1">
                                Company Description
                            </label>
                            <textarea
                                id="company-description"
                                placeholder="Company Description"
                                rows="4"
                                className="w-full px-3 py-2 border  text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                required
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            ></textarea>
                        </div>

                        <button
                            onClick={sendDataToParent}
                            type="submit"
                            className="cursor-pointer w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal
