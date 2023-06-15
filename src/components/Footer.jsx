import {BsTwitter
,BsLinkedin,
BsTelegram
} from 'react-icons/bs'

function Footer() {
  return (
    <footer className="bg-[#f8f8f8] py-8">
        <div className="flex-col sm:flex-row sm:flex justify-between text-center mx-auto w-full max-w-[1000px]">
            <h3>Copyright © 2023 BUIDL - All Rights Reserved.</h3>
            <div className='flex gap-8 items-center  text-center justify-center sm:justify-end'>
                <a href="https://twitter.com/Mzn_Rahi" target='_blank' rel="noreferrer" className='border-1 rounded-full social'> <BsTwitter/></a>
                <a href="https://www.linkedin.com/in/mzn-rahi/" target='_blank' rel="noreferrer" className='border-1 rounded-full social'> <BsLinkedin/></a>
                <a href="https://t.me/BUIDLAE" target='_blank' rel="noreferrer" className='border-1 rounded-full social'> <BsTelegram/> </a>


            </div>
        </div>
    </footer>
  )
}

export default Footer