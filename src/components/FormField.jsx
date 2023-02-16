const FormField = ({labelName, placeholder, inputType, isTextArea, value, handleChange}) => {
  return (
    <label className="flex-1 w-full flex flex-col">
        {labelName && (
            <span className="font-epilogue font-medium text-sm leading-6 text-[#808191] mb-3">
                {labelName}
            </span>
        )}


        {isTextArea ? (
            <textarea 
                required
                value={value}
                onChange={handleChange}
                rows={10}
                placeholder={placeholder}
                className="py-4 sm:px-6 px-4 outline-none border border-[#3a3a43] bg-transparent font-epilogue text-white text-sm placeholder:text-[#4b5264] rounded-xl sm:min-w-[300px]"
            />
        ) : (
            <input
                required
                value={value}
                onChange={handleChange}
                type={inputType}
                step="0.1" 
                placeholder={placeholder}
                className="py-4 sm:px-6 px-4 outline-none border border-[#3a3a43] bg-transparent font-epilogue text-white text-sm placeholder:text-[#4b5264] rounded-xl sm:min-w-[300px]"
            />
        )}
    </label>
  )
}
export default FormField