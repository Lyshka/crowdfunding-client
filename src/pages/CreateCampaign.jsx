import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { ethers } from "ethers"

import {useStateContext} from "../context"
import { money } from "../assets"
import { CustomButton, FormField, Loader } from "../components"
import { checkIfImage } from "../utils"

const CreateCampaign = () => {
  const navigate = useNavigate()
  const {createCampaign} = useStateContext()

  const [isLoading, setIsLoading] = useState(false)
  const [form, setForm] = useState({
    name: "",
    title: "",
    description: "",
    target: "",
    deadline: "",
    image: ""
  })

  const handleFormFieldChange = (fieldName, e) => {
    setForm({
      ...form,
      [fieldName]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    checkIfImage(form.image, async (exists) => {
      if(exists) {
        setIsLoading(true)
        await createCampaign({...form, target: ethers.utils.parseUnits(form.target, 18)})
        setIsLoading(false)
        navigate("/")
      } else {
        alert("Provide valid image URL")
        setForm({...form, image: ""})
      }
    })


  }

  return (
    <div className="bg-[#1c1c24] flex justify-center items-center flex-col rounded-xl sm:p-10 p-4">
      {isLoading && <Loader />}


      <div className="flex justify-center items-center p-4 sm:min-w-[380px] bg-[#3a3a43] rounded-xl">
        <h1 className="font-epilogue font-bold sm:text-3xl text-lg leading-10 text-white">
          Start a Campaing
        </h1>
      </div>


      <form onSubmit={handleSubmit} className="w-full mt-16 flex flex-col gap-8">
        <div className="flex flex-wrap gap-10">
          <FormField
            labelName="Your Name *"
            placeholder="John Doe"
            inputType="text"
            value={form.name}
            handleChange={(e) => handleFormFieldChange("name", e)}
          />


          <FormField
            labelName="Campaign Title *"
            placeholder="Write a title"
            inputType="text"
            value={form.title}
            handleChange={(e) => handleFormFieldChange("title", e)}
          />
        </div>

        <FormField
          labelName="Story *"
          placeholder="Write your story"
          isTextArea
          value={form.description}
          handleChange={(e) => handleFormFieldChange("description", e)}
        />

        <div className="w-full flex justify-start items-center p-4 bg-[#8c6dfd] h-32 rounded-xl">
          <img src={money} alt="money" className="w-10 h-10 object-contain" />

          <h4 className="font-epilogue font-bold text-2xl text-white ml-5">
            You will get 100% of the raised amount
          </h4>
        </div>


        <div className="flex flex-wrap gap-10">
          <FormField
            labelName="Goal *"
            placeholder="ETH 0.50"
            inputType="number"
            value={form.target}
            handleChange={(e) => handleFormFieldChange("target", e)}
          />


          <FormField
            labelName="End Date *"
            placeholder="End Date"
            inputType="date"
            value={form.deadline}
            handleChange={(e) => handleFormFieldChange("deadline", e)}
          />


          <FormField
            labelName="Campaign image *"
            placeholder="Place image URL of your campaign"
            inputType="url"
            value={form.image}
            handleChange={(e) => handleFormFieldChange("image", e)}
          />
        </div>


        <div className="flex justify-center items-center mt-10">
          <CustomButton
            btnType={"submit"}
            title="Submit new campaign"
            styles={"bg-[#1dc071]"}
          />
        </div>
      </form>
    </div>
  )
}
export default CreateCampaign