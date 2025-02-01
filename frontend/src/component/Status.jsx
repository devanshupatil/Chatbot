import { useState } from 'react'
import { Globe, X } from 'lucide-react'

const Status = ({ onClose }) => {

  const [selectedPage, setSelectedPage] = useState(null);


  //  Dummy data for detected pages

  const webPages = [
    {
      url: '/about',
      status: 'scraped',
      chunks: [
        'Our company was founded in 2020',
        'We specialize in AI solutions',
        'Meet our talented team of experts'
      ]
    },
    {
      url: '/services',
      status: 'scraped',
      chunks: [
        'We offer consulting services',
        'Custom AI development',
        'Training and workshops'
      ]
    },
    {
      url: '/contact',
      status: 'pending'
    },
    {
      url: '/blog',
      status: 'failed'
    }

  ];
  return (



    <div className="fixed inset-0  bg-opacity-30 backdrop-blur-sm flex items-center justify-center">

      <div className="animate-modal mt-10 flex flex-col gap-5  p-5 ">

        <button className="place-self-end cursor-pointer" onClick={onClose}><X /></button>

        <div className='bg-white rounded-2xl px-10 py-10 flex flex-col gap-5 items-center mx-4 text-black shadow-lg shadow-indigo-900/50 animate-modal-content'>

          <h1 className="text-2xl font-semibold mb-4">Website Scanning Progress</h1>


          <h3 className="text-lg font-medium text-gray-900">Website Scanning Progress</h3>
          <div className="mt-6 space-y-4">

            {webPages.map((page) => (

              <div
                key={page.url}
                className={`flex cursor-pointer items-center justify-between rounded-lg border p-4 hover:bg-gray-50 ${selectedPage?.url === page.url ? 'border-indigo-500 bg-indigo-50' : 'border-gray-200'
                  }`}
                onClick={() => {

                  setSelectedPage(page)
                }}
              >

                <div className="flex items-center space-x-3">
                  <Globe className="h-5 w-5 text-gray-400" />
                  <span

                    className="font-medium text-gray-900"
                  >{page.url}</span>
                </div>

                <span
                  className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${page.status === 'scraped'
                    ? 'bg-green-100 text-green-800'
                    : page.status === 'pending'
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-red-100 text-red-800'
                    }`}
                >
                  {page.status}
                </span>


              </div>
            ))}
          </div>



        </div>
      </div>





    </div>
  )
}

export default Status
