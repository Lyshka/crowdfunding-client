import { useNavigate } from "react-router-dom"

import { loader } from "../assets"
import {FundCard }from "./"

const DisplayCampaigns = ({ title, isLoading, campaigns }) => {
    const navigate = useNavigate()

    const handleNavigate = (campaign) => {
        navigate(`/campaign-details/${campaign.title}`, {
            state: campaign
        })
    }

    return (
        <div>
            <h1 className="font-epilogue font-semibold text-lg text-white text-left">
                {title} ({campaigns.length})
            </h1>

            <div className="flex flex-wrap mt-5 gap-7">
                {isLoading && (
                    <img 
                        src={loader} 
                        alt="loader"
                        className="w-24 h-24 object-contain"
                    />
                )}


                {!isLoading && campaigns.length === 0 && (
                    <p className="font-epilogue font-semibold text-sm leading-8 text-[#818183]">
                        You have not created any campaigns yet
                    </p>
                )}


                {!isLoading && campaigns.length > 0 && campaigns.map((campaign) => (
                    <FundCard
                        key={campaign.id}
                        {...campaign}
                        handleClick={() => handleNavigate(campaign)}
                    />
                ))}
            </div>
        </div>
    )
}
export default DisplayCampaigns