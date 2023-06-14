import {BsTwitter
,BsLinkedin,
BsInstagram
} from 'react-icons/bs'

function Footer() {
  return (
    <footer className="bg-[#f8f8f8] py-8">
        <div className="flex-col sm:flex-row sm:flex justify-between text-center mx-auto w-full max-w-[1000px]">
            <h3>Copyright © 2021 Prismania - All Rights Reserved.</h3>
            <div className='flex gap-8 items-center  text-center justify-center sm:justify-end'>
                <a href="/" className='border-1 rounded-full social'> <BsTwitter/></a>
                <a href="/" className='border-1 rounded-full social'> <BsLinkedin/></a>
                <a href="/" className='border-1 rounded-full social'> <BsInstagram/> </a>


            </div>
        </div>
    </footer>
  )
}

export default Footer