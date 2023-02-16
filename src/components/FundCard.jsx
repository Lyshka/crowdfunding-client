import { tagType, thirdweb } from "../assets"
import { daysLeft } from "../utils"

const FundCard = ({ owner, title, description, target, deadline, amountCollected, image, handleClick }) => {
    const remainingDays = daysLeft(deadline)

    return (
        <div className="sm:w-[288px] w-full rounded-2xl bg-[#1c1c24] cursor-pointer" onClick={handleClick}>
            <img src={image} alt="fund" className="w-full h-[158px] object-cover rounded-2xl" />


            <div className="flex flex-col p-4">
                <div className="flex flex-row items-center mb-5">
                    <img src={tagType} alt="tag" className="w-4 h-4 object-contain" />


                    <p className="ml-3 mr-1 font-epilogue font-medium text-xs text-[#808191]">
                        Education
                    </p>
                </div>


                <div className="block">
                    <h3 className="font-epilogue font-semibold text-base text-white text-left leading-7 truncate">
                        {title}
                    </h3>


                    <p className="mt-1 font-epilogue font-normal text-xs text-[#808191] text-left leading-5 truncate">
                        {description}
                    </p>
                </div>

                <div className="flex justify-between flex-wrap mt-4 gap-1">
                    <div className="flex flex-col">
                        <h4 className="font-epilogue font-semibold text-sm text-[#b2b3bd] leading-5">
                            {amountCollected}
                        </h4>


                        <p className="mt-1 font-epilogue font-normal text-xs leading-5 text-[#808191] sm:max-w-[120px] truncate">
                            Raised of {target}
                        </p>
                    </div>


                    <div className="flex flex-col">
                        <h4 className="font-epilogue font-semibold text-sm text-[#b2b3bd] leading-5">
                            {remainingDays}
                        </h4>


                        <p className="mt-1 font-epilogue font-normal text-xs leading-5 text-[#808191] sm:max-w-[120px] truncate">
                            Days left
                        </p>
                    </div>
                </div>


                <div className="flex items-center mt-5 gap-3">
                    <div className="w-8 h-8 rounded-full flex justify-center items-center bg-[#13131a]">
                        <img src={thirdweb} alt="user" className="w-1/2 h-1/2 object-contain"/>
                    </div>


                    <p className="flex-1 font-epilogue font-normal text-xs text-[#808191] truncate">
                        <span>by {owner}</span>
                    </p>
                </div>
            </div>
        </div>
    )
}
export default FundCard