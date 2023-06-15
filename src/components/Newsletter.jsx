import React from 'react'

function Newsletter() {
  return (
    <section className='pt-8 pb-14'>

        <div className='flex-col sm:flex-row sm:flex justify-center  sm:justify-around gap-5 max-w-full mx-auto w-[1000px] items-center text-center '>
            <h3 className='frank font-[500] text-[30px] '>Subscribe</h3>
            <input type="text" placeholder='Email' className='font-[#474747] text-base email-input py-[16px] px-2' />
            <div>
            <button className='btn px-8 py-4 my-6 text-sm font-[700] lato w-[80%] sm:w-[113%]'>Join Now</button>

            </div>
        </div>
        <div className='mx-auto text-center text-lg font-[400] lato'>
        Sign up for our monthly newsletter of new ideas and knowledges.


        </div>
    </section>
  )
}

export default Newsletter