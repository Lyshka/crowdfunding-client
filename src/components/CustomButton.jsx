const CustomButton = ({btnType, title, handleClick, styles}) => {
  return (
    <button
      type={btnType}
      className={`font-epilogue font-semibold text-base leading-[26px] text-white min-h-[56px] px-4 rounded-xl ${styles}`}
      onClick={handleClick}
    >
      {title}
    </button>
  )
}
export default CustomButton