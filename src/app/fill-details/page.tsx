import React from 'react'

export default function FillDetails() {
  return (
    <div className='p-10'>
      <h1 className='text-2xl font-bold mb-4'>Fill the details</h1>
      <div className='mt-5 grid grid-cols-2 gap-10'>
        <form className="space-y-6" action="#" method="POST">
          <div>
            <label htmlFor="heading" className="block text-sm font-medium leading-6 text-gray-900">Heading</label>
            <div className="mt-2">
              <input id="heading" name="heading" type="heading" autocomplete="heading" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div>
            <label htmlFor="subheading" className="block text-sm font-medium leading-6 text-gray-900">Sub Heading</label>
            <div className="mt-2">
              <input id="subheading" name="subheading" type="subheading" autocomplete="current-subheading" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div>
            <label htmlFor="cta" className="block text-sm font-medium leading-6 text-gray-900">CTA Button URL</label>
            <div className="mt-2">
              <input id="cta" name="cta" type="cta" autocomplete="current-cta" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div>
            <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Make My Site Live</button>
          </div>
        </form>

        <img className="w-full h-96 object-cover" src="https://picsum.photos/200/300?random=10" />
      </div>
    </div>
  )
}
