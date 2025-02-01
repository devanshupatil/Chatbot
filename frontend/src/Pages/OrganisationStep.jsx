import { useState } from 'react';
import { Plus, Trash2,ChartNoAxesCombined } from 'lucide-react';
import AddItemModal from '../Modal/AddItemModal';
import Status from '../component/Status';
import { PencilLine } from 'lucide-react';
import { toast } from 'react-hot-toast';
import UpdateItemModal from '../Modal/UpdateItemModal';

function OrganizationSetup() {

  const [showModal, setIsModalOpen] = useState(false);
  const [showStatus, setIsStatusOpen] = useState(false);
  const [showUpdateModal, setIsUpdateModalOpen] = useState(false);
  const [updateIndex, setUpdateIndex] = useState(null);

  const handleDelete = (index) => {

    console.log(index)

    const data = JSON.parse(localStorage.getItem('data') || '[]');

    localStorage.setItem('data', JSON.stringify(data.filter((item, i) => i !== index)));

    window.location.reload();
    toast.success('Item deleted successfully')

  };




  return (
    <div className="mx-auto max-w-8xl shadow pt-10">

      <div className="rounded-lg bg-white p-8 shadow">

        <h2 className="text-3xl text-gray-900 flex justify-center font-serif font-bold">
          Organization Setup
        </h2>

        <div className="mt-8 space-y-6" >


          <div className="pl-6 space-x-4">
            <button
              onClick={() => { setIsModalOpen(true) }}
              type="submit"
              className="w-40 cursor-pointer rounded-lg bg-blue-500 px-1.5 py-2 font-semibold text-white shadow-sm hover:bg-blue-600 focus:outline-none  focus:ring-blue-500 focus:ring-offset-2"
            >
              <Plus className="h-5 w-5 inline-block mr-2" />
              Add New Item

            </button>
            {showModal && <AddItemModal onClose={() => { setIsModalOpen(false) }} />}

          </div>



          {
            JSON.parse(localStorage.getItem('data') || '[]').map((item, index) => (
              <div
                key={index}
                className='item-card bg-white shadow-lg rounded-lg p-6 mb-6 w-[400px] hover:bg-gray-50 transition duration-300 ease-in-out hover:scale-105 flex flex-col justify-between'
              >

                <div className="flex justify-end mb-4 space-x-2">

                  <button
                    className="cursor-pointer p-2 rounded-[0.2rem] bg-white border border-[#c7c7c7]  hover:bg-transparent group hover:border-gray-500"
                    onClick={() => { setIsUpdateModalOpen(true), setUpdateIndex(index) }}
                  >
                    <PencilLine
                      className="text-gray-900 group-hover:text-gray-700"
                      size={20}
                    />
                  </button>



                  <button
                    className="cursor-pointer p-2 rounded-[0.2rem] bg-white border border-[#c7c7c7]  hover:bg-transparent group hover:border-gray-500"
                    onClick={() => handleDelete(index)}
                  >
                    <Trash2
                      className="text-gray-900 group-hover:text-gray-700"
                      size={20}
                    />
                  </button>

                  <button
                    className="cursor-pointer p-2 rounded-[0.2rem] bg-white border border-[#c7c7c7]  hover:bg-transparent group hover:border-gray-500"
                    onClick={() => {window.location.href = `/company-details/${index}`}}
                  >
                    <ChartNoAxesCombined
                      className="text-gray-900 group-hover:text-gray-700"
                      size={20}
                    />
                  </button>

  


                </div>

                <div className="grid grid-rows-3 mb-4">

                  <p className="text-gray-700 mb-1 font-semibold">Company Name: &nbsp;<span className="text-black">{item.companyName}</span></p>

                  <p className="item-url text-gray-700 mb-2">
                    Company URL: &nbsp;
                    <a href={item.websiteUrl} target="_blank" rel="noopener noreferrer" className='item-product_url hover:underline hover:text-blue-400 text-black mb-2'>
                      <span className="break-words">
                        {item.websiteUrl}
                      </span>
                    </a>
                  </p>

                  <p className="text-gray-700 mb-1">Description: &nbsp;<span className="text-black-500 font-semibold">{item.description}</span></p>

                </div>
              </div>
            ))
            
          }

          
          {showStatus && <Status onClose={() => { setIsStatusOpen(false) }} />}
          {showUpdateModal && <UpdateItemModal index={updateIndex} onClose={() => { setIsUpdateModalOpen(false) }} />}




        </div>

      </div>
    </div>
  );
}



export default OrganizationSetup