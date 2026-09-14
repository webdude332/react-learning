import { Bookmark } from "lucide-react";
import amazonLogo from '../assets/amazon.png'


export default function Card() {
  return <>
  <div className="bg-white w-[300px] h-[400px] rounded-3xl p-6 flex flex-col">
    <div className="flex justify-between">
      <div className="rounded-full border border-gray-400 p-4">
        <img className="w-5" src={amazonLogo} alt="amazon-logo" />
      </div>
      <button className="flex gap-2 border border-gray-300 rounded-md items-center bg-white shadow-md text-black p-2 font-bold">Save <Bookmark /> </button>
    </div>
    <div className="mt-12">
      <h2 className="text-lg font-semibold text-black">Amazon <span className="text-gray-300 text-sm">5 days ago</span></h2>
      <h1 className="text-xl font-bold text-black">Senior UI/UX Designer</h1>
      <div className="flex gap-2 mt-4">
        <button className="text-black bg-gray-200 rounded-sm p-2 text-md font-semibold"> Part-Time </button>
        <button className="text-black bg-gray-200 rounded-sm p-2 text-md font-semibold"> Full-Time </button>
      </div>
    </div>
    <div className="border-t border-gray-300 mt-16 pt-4 flex justify-between items-center">
      <div>
              <h1 className="text-xl font-semibold text-black">$120/hr</h1>
      <p className="text-md text-gray-500 ">Mumbai, India</p>
      </div>
      <button className="text-white bg-black rounded-lg p-3 font-semibold"> Apply Now </button>
    </div>
  </div>
  </>
}
