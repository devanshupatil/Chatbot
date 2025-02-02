import { useEffect, useState } from 'react';
import { Code, Mail, Bot, AlertCircle, PartyPopper, Settings, MessageSquare, Share2 } from 'lucide-react';
import { useParams } from 'react-router-dom';



export function ChatbotIntegration() {

  const [showPreview, setShowPreview] = useState(false);
  const [showInstructions, setShowInstructions] = useState(false);
  const [showTestIntegration, setShowTestIntegration] = useState(false);
  const [randomBool, setRandomBool] = useState(false);
  const [integrationMethod, setIntegrationMethod] = useState(null);

  const dummyCode = `
  window.beyondChatsConfig = {
    apiKey: 'YOUR_API_KEY',
    theme: 'light',
    position: 'bottom-right'
  };
  `;

  const generateRandomBoolean = () => {

    setRandomBool(Math.random() >= 0.5);
  };

  // const { index } = useParams();

  // const item = JSON.parse(localStorage.getItem('data') || '[]')[index];


  useEffect(() => {
    const token = localStorage.getItem('sb-bnkirpzbgaxuikwgrmse-auth-token');
    if (!token) {
      window.location.href = '/login';
    }
  }, []);


  const successMessage = (
    <div className="mx-auto max-w-2xl text-center">
      <div className="rounded-lg bg-white p-8 shadow">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
          <PartyPopper className="h-6 w-6 text-green-600" />
        </div>
        <h2 className="mt-4 text-2xl font-bold text-gray-900">
          Congratulations!
        </h2>
        <p className="mt-2 text-gray-500">
          Your chatbot has been successfully integrated with your website.
        </p>

        <div className="mt-8 grid grid-cols-2 gap-4">
          <button
            className="flex flex-col items-center rounded-lg border-2 border-dashed border-gray-300 p-6 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            <Settings className="h-8 w-8 text-gray-400" />
            <span className="mt-2 block font-medium text-gray-900">
              Explore Admin Panel
            </span>
          </button>

          <button
            className="flex flex-col items-center rounded-lg border-2 border-dashed border-gray-300 p-6 text-center hover:border-gray-400 focus:outline-none focus:ring -2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            <MessageSquare className="h-8 w-8 text-gray-400" />
            <span className="mt-2 block font-medium text-gray-900">
              Start Talking to Chatbot
            </span>
          </button>
        </div>

        <div className="mt-8">
          <h3 className="text-sm font-medium text-gray-900">Share your success</h3>
          <div className="mt-4 flex justify-center space-x-4">
            <button
              className="inline-flex items-center rounded-md bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600"
            >
              <Share2 className="mr-2 h-4 w-4" />
              Twitter
            </button>
            <button
              className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
            >
              <Share2 className="mr-2 h-4 w-4" />
              LinkedIn
            </button>
          </div>
        </div>
      </div>
    </div>
  )

  const errorMessage = (
    <div className="mx-auto max-w-2xl text-center">
      <div className="rounded-lg bg-white p-8 shadow">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
          <AlertCircle className="h-6 w-6 text-red-600" />
        </div>
        <h2 className="mt-4 text-2xl font-bold text-gray-900">
          Oops! Something went wrong.
        </h2>
        <p className="mt-2 text-gray-500">
          Please try again later or contact support.
        </p>
      </div>
    </div>
  )

  return (
    <div className="mx-auto max-w-4xl pt-10">

      <div className="rounded-lg bg-white p-8 shadow">
        <h2 className="text-2xl font-bold text-gray-900">
          Chatbot Integration
        </h2>

        <div className="mt-8 space-y-6">
          {!showPreview && !showInstructions && !showTestIntegration && (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              <button
                onClick={() => setShowPreview(true)}
                className="cursor-pointer flex flex-col items-center rounded-lg border-2 border-dashed border-gray-300 p-6 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <Bot className="h-8 w-8 text-gray-400" />
                <h3 className="mt-2 font-medium text-gray-900">Test Chatbot</h3>
                <p className="mt-1 text-sm text-gray-500">
                  Preview how your chatbot will look on your website
                </p>
              </button>

              <button
                onClick={() => {
                  setShowInstructions(true);
                  setIntegrationMethod('code');
                }}
                className="cursor-pointer flex flex-col items-center rounded-lg border-2 border-dashed border-gray-300 p-6 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <Code className="h-8 w-8 text-gray-400" />
                <h3 className="mt-2 font-medium text-gray-900">Integration Code</h3>
                <p className="mt-1 text-sm text-gray-500">
                  Get the code to add to your website
                </p>
              </button>

              <button
                onClick={() => {
                  setShowTestIntegration(true), generateRandomBoolean();
                }}
                className="cursor-pointer flex flex-col items-center rounded-lg border-2 border-dashed border-gray-300 p-6 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <Mail className="h-8 w-8 text-gray-400" />
                <h3 className="mt-2 font-medium text-gray-900">Test integration</h3>
                <p className="mt-1 text-sm text-gray-500">
                  Test if the chatbot is working correctly on your website
                </p>
              </button>
            </div>
          )}

          {showPreview && (
            <div className="space-y-4">
              <div className="relative h-[600px] rounded-lg border-2 border-gray-200">
                <div className="absolute inset-0 flex items-center justify-center bg-gray-50">
                  <p className="text-gray-500">Website Preview</p>
                </div>
                <div className="absolute bottom-4 right-4 w-80">
                  <div className="rounded-lg bg-white p-4 shadow-lg ring-1 ring-gray-200">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium text-gray-900">Chat with us</h4>
                      <button className="text-gray-500 hover:text-gray-800 cursor-pointer">
                        <span className="sr-only">Close</span>
                        ×
                      </button>
                    </div>
                    <div className="mt-4 h-80 rounded-md bg-gray-50 p-4">
                      <div className="flex items-center space-x-2">
                        <div className="h-8 w-8 rounded-full bg-blue-600" />
                        <div className="rounded-lg bg-white p-2 shadow-sm">
                          Hello! How can I help you today?
                        </div>
                      </div>
                    </div>
                    <div className="mt-4">
                      <input
                        type="text"
                        className="w-full p-3 border rounded-lg transition-all duration-300 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 hover:border-blue-300"
                        placeholder="Type your message..."
                      />
                    </div>
                  </div>
                </div>
                <div className="absolute left-0 top-0 flex w-full items-center justify-center bg-yellow-50 p-2">
                  <AlertCircle className="mr-2 h-5 w-5 text-yellow-600" />
                  <span className="text-sm text-yellow-800">
                    Chatbot not working as intended?{' '}
                    <button className="font-medium underline">Share feedback</button>
                  </span>
                </div>
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  onClick={() => setShowPreview(false)}
                  className="cursor-pointer rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none  focus:ring-blue-500 focus:ring-offset-2"
                >
                  Back
                </button>
                <button
                  onClick={() => setShowInstructions(true)}
                  className="cursor-pointer rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-blue-500 focus:ring-offset-2"
                >
                  Continue to Integration
                </button>
              </div>
            </div>
          )}

          {showInstructions && (

            <div className="space-y-6">
              {integrationMethod === 'code' && (
                <div>
                  <div className="rounded-lg bg-gray-50 p-6">
                    <h3 className="text-lg font-medium text-gray-900">
                      Add this code to your website
                    </h3>
                    <p className="mt-2 text-sm text-gray-500">
                      Copy and paste this code just before the closing &lt;/head&gt; tag of your website.
                    </p>
                    <div className="mt-4">
                      <pre className="rounded-lg bg-gray-900 p-4">
                        <code className="text-sm text-white">{dummyCode}</code>
                      </pre>
                    </div>
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(dummyCode);
                      }}
                      className="cursor-pointer mt-4 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      Copy to Clipboard
                    </button>
                  </div>

                  <div className="rounded-lg bg-gray-50 p-6">
                    <h3 className="text-lg font-medium text-gray-900">
                      Email Instructions to Developer
                    </h3>
                    <div className="mt-4">
                      <label htmlFor="developer-email" className="block text-sm font-medium text-gray-700">
                        Developer&apos;s Email
                      </label>
                      <input
                        type="email"
                        id="developer-email"
                        className="w-full p-1 border rounded-lg transition-all duration-300 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 hover:border-blue-300"
                        placeholder="developer@example.com"
                      />
                    </div>
                    <button
                      className="cursor-pointer mt-4 inline-flex items-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none  focus:ring-blue-500 focus:ring-offset-2"
                    >
                      Send Instructions
                    </button>

                  </div>
                </div>

              )}



            </div>
          )}

          {showTestIntegration && (
            <div>
              {randomBool ? successMessage : errorMessage}
            </div>
          )}
        </div>
      </div>

    </div>
  );
}