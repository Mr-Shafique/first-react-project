
const Button = (props) => {
    const text = props.text;


    return (
        <button className={`text-white py-1 font-poppins w-[150px] bg-red-500`}>{text}</button>
    )
}

export default Button;