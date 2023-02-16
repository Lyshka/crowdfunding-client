import { loader } from "../assets"

const Loader = () => {
  return (
    <div className="fixed inset-0 z-10 h-screen bg-[rgba(0,0,0,0.7)] flex items-center justify-center flex-col">
        <img src={loader} alt="loader" className="w-24 h-24 object-contain"/>


        <p className="mt-5 font-epilogue font-bold text-xl text-center text-white">
            Transaction in progress<br/>Please wait...
        </p>
    </div>
  )
}
export default Loader