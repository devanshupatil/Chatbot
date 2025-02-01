// import React from 'react'
import { useState, useEffect } from 'react'
import { X } from "lucide-react"
import { toast } from 'react-hot-toast'



const UpdateItemModal = ({ onClose, index }) => {

    const [companyName, setCompanyName] = useState('')
    const [websiteUrl, setWebsiteUrl] = useState('')
    const [description, setDescription] = useState('')

    useEffect(() => {

        const data = getDataFromLocalStorage()

        const item = data[index];

        if (item) {
            setCompanyName(item.companyName)
            setWebsiteUrl(item.websiteUrl)
            setDescription(item.description)
        }
    }, [index])

    const getDataFromLocalStorage = () => {
        const data = localStorage.getItem('data')
        return data ? JSON.parse(data) : []
    }

    const saveDataToLocalStorage = (data) => {
        localStorage.setItem('data', JSON.stringify(data))
    }

    const onSubmit = (e) => {

        e.preventDefault()
        const data = getDataFromLocalStorage()
        console.log(data)
        data[index] = { companyName, websiteUrl, description }
        saveDataToLocalStorage(data)
        toast.success('Item updated successfully')
        onClose()
    }

    // console.log(index)



    return (
        <div className="fixed inset-0  bg-opacity-30 backdrop-blur-sm flex items-center justify-center">

            <div className="animate-modal mt-10 flex flex-col gap-5  p-5 ">

                <button className="place-self-end cursor-pointer" onClick={onClose}><X /></button>

                <div className='bg-white rounded-2xl px-10 py-10 flex flex-col gap-5 items-center mx-4 text-black shadow-lg shadow-indigo-900/50 animate-modal-content'>

                    <h1 className="text-2xl font-semibold mb-4">Update Item</h1>

                    <form className='flex flex-col gap-5 w-full'>

                        <div className='flex flex-col gap-1'>
                            <label htmlFor="company-name" className="block text-sm font-medium text-gray-700">
                                Company Name
                            </label>
                            <input
                                type="text"
                                id="company-name"
                                placeholder="Company Name"
                                className="w-full px-4 py-2 border  text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                required
                                value={companyName}
                                onChange={(e) => setCompanyName(e.target.value)}
                            />
                        </div>
                        <div className='flex flex-col gap-1'>
                            <label htmlFor="website-url" className="block text-sm font-medium text-gray-700">
                                Website URL
                            </label>
                            <input
                                type="url"
                                id="website-url"
                                placeholder="Website URL"
                                className="w-full px-4 py-2 border  text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                required
                                value={websiteUrl}
                                onChange={(e) => setWebsiteUrl(e.target.value)}
                            />
                        </div>

                        <div className='flex flex-col gap-1'>
                            <label htmlFor="company-description" className="block text-sm font-medium text-gray-700">
                                Company Description
                            </label>
                            <textarea
                                id="company-description"
                                placeholder="Company Description"
                                rows="4"
                                className="w-full px-4 py-2 border  text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                required
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            ></textarea>    
                        </div>

                        <button
                            onClick={onSubmit}
                            type="submit"
                            className="cursor-pointer w-full flex justify-center py-2 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default UpdateItemModal
