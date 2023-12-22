import Button from "./Button"
export const Navo = () => {
  return (
    <>
    <div className=" flex justify-between px-[10%] items-center h-20">
        <div>
            <img src="/images/brand_logo.png" alt="brand logo" />
        </div>
        <div>
            <ul className="flex gap-4 font-poppins text-xl">
                <li href="#" className=""> Manu</li>
                <li href="#"> Location</li>
                <li href="#"> About</li>
                <li href="#"> contact</li>
            </ul>
        </div>
        <Button text="Login" />

    </div>
    </>
  )
}
