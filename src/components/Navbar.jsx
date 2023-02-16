import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

import {useStateContext} from "../context"
import {CustomButton} from "./"
import {logo, menu, search, thirdweb} from "../assets"
import {navlinks} from "../constants"

const Navbar = () => {
  const navigate = useNavigate()
  const {address, connect} = useStateContext()

  const [isActive, setIsActive] = useState("dashboard")
  const [toggleDrawer, setToggleDrawer] = useState(false)

  return (
    <div className="flex md:flex-row flex-col-reverse justify-between mb-[35px] gap-6">
      <div className="lg:flex-1 flex flex-row max-w-[458px] py-2 pl-4 pr-2 h-[52px] bg-[#1c1c24] rounded-full">
        <input 
          type="text"
          placeholder="Search for campaigns"
          className="flex w-full font-epilogue font-normal text-sm placeholder:text-[#4b5264] text-white bg-transparent outline-none"
        />


        <div className="w-[72px] h-full rounded-3xl bg-[#4acd8d] flex justify-center items-center cursor-pointer">
          <img 
            src={search} 
            alt="search"
            className="w-4 h-4 object-contain"
          />
        </div>
      </div>


      <div className="sm:flex hidden flex-row items-center justify-end gap-4">
        <CustomButton 
          btnType="button"
          title={address ? "Create a campaign" : "Connect wallet"}
          styles={address ? "bg-[#1dc071]" : "bg-[#8c6dfd]"}
          handleClick={() => {
            if(address) navigate("create-campaign")
            else connect()
          }}
        />

        <Link to={"/profile"}>
          <div className="w-14 h-14 rounded-full bg-[#2c2f32] flex justify-center items-center cursor-pointer">
            <img 
              src={thirdweb} 
              alt="user"
              className="w-3/5 h-3/5 object-contain"
            />
          </div>
        </Link>
      </div>

      {/* Small screen navigation */}
      <div className="sm:hidden flex justify-between items-center relative">
        <div className="w-10 h-10 rounded-xl bg-[#2c2f32] flex justify-center items-center cursor-pointer">
            <img 
              src={logo} 
              alt="user"
              className="w-3/5 h-3/5 object-contain"
            />
        </div>


        <img 
          src={menu}
          alt="menu"
          className="w-9 h-9 object-contain cursor-pointer" 
          onClick={() => setToggleDrawer(prev => !prev)}
        />


        <div className={`absolute top-12 right-0 left-0 bg-[#1c1c24] z-10 shadow-secondary py-4 ${!toggleDrawer ? '-translate-y-[100vh]' : 'translate-y-0'} transition-all duration-700`}>
          <ul className="mb-4">
            {navlinks.map((link) => (
              <li
                key={link.name}
                className={`flex p-4 ${isActive === link.name && "bg-[#3a3a43]"}`}
                onClick={() => {
                  setIsActive(link.name)
                  setToggleDrawer(false)
                  navigate(link.link)
                }}
              >
                <img 
                  src={link.imgUrl}
                  alt={link.name}
                  className={`w-6 h-6 object-contain ${isActive === link.name ? "grayscale-0" : "grayscale"}`}
                />


                <p className={`ml-5 font-epilogue font-semibold text-sm ${isActive === link.name ? "text-[#1dc071]" : "text-[#808191]"}`}>
                  {link.name}
                </p>
              </li>
            ))}
          </ul>


          <div className="flex mx-4">
            <CustomButton 
              btnType="button"
              title={address ? "Create a campaign" : "Connect wallet"}
              styles={address ? "bg-[#1dc071]" : "bg-[#8c6dfd]"}
              handleClick={() => {
                if(address) navigate("create-campaign")
                else connect()
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Navbar