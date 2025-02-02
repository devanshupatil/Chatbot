import { useState, useEffect } from 'react';
import { Globe } from 'lucide-react';
import { useParams } from 'react-router-dom';

export function Details() {

  const [selectedPage, setSelectedPage] = useState(null);

  const { index } = useParams();
  
  useEffect(() => {
    const token = localStorage.getItem('sb-bnkirpzbgaxuikwgrmse-auth-token');
    if (!token) {
     window.location.href = '/login';
    }
   }, []);


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

  const item = JSON.parse(localStorage.getItem('data') || '[]')[index];


  return (
    <div className="mx-auto max-w-4xl pt-20 ">
      <div className="animate-fadein rounded-lg bg-white p-8 shadow ">

          <dl className="grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2">
            <div className="bg-gray-50 px-4 py-2 rounded-lg">
              <dt className="text-sm font-medium text-gray-500">Company Name</dt>
              <dd className="mt-1 text-sm text-gray-900">{item.companyName}</dd>
            </div>
            <div className="bg-white px-4 py-2 rounded-lg">
              <dt className="text-sm font-medium text-gray-500">Website URL</dt>
              <dd className="mt-1 text-sm text-gray-900 hover:underline">
                <a href={item.websiteUrl} target="_blank" rel="noopener noreferrer">{item.websiteUrl}</a>
              </dd>
            </div>
            <div className="bg-gray-50 px-4 py-2 rounded-lg col-span-2">
              <dt className="text-sm font-medium text-gray-500">Description</dt>
              <dd className="mt-1 text-sm text-gray-900">{item.description}</dd>
            </div>
          </dl>


        <div className="rounded-lg bg-gray-50 p-6">
          <h3 className="text-lg font-medium text-gray-900">Website Scanning Progress</h3>
          <div className="mt-6 space-y-4">
            {webPages.map((page) => (
              <div
                key={page.url}
                className={`flex cursor-pointer items-center justify-between rounded-lg border p-4 hover:bg-gray-50 ${selectedPage?.url === page.url ? 'border-indigo-500 bg-indigo-50' : 'border-gray-200'
                  }`}
                onClick={() => setSelectedPage(page)}
              >
                <div className="flex items-center space-x-3">
                  <Globe className="h-5 w-5 text-gray-400" />
                  <span className="font-medium text-gray-900">{page.url}</span>
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

          {selectedPage?.chunks && (
            <div className="mt-6">
              <h4 className="text-sm font-medium text-gray-900">Content Chunks</h4>
              <div className="mt-2 space-y-2">
                {selectedPage.chunks.map((chunk, index) => (
                  <div
                    key={index}
                    className="rounded-md bg-white p-3 text-sm text-gray-700 shadow-sm ring-1 ring-gray-200"
                  >
                    {chunk}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="flex justify-end space-x-4">
          <button
          onClick={() => { window.location.href = `/chatbot-integration/${index}` }}
            type="submit"
            className="cursor-pointer inline-flex items-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-blue-500 focus:ring-offset-2"
          >
            Continue to Integration
          </button>
        </div>

      </div>

    </div>
  );
}

export default Details;