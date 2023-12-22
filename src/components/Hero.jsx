import Button from "./Button";
import Transparent from "./Transparent";

export const Hero = () => {
  return (
    <>
      <div className="w-[100%] h-custom p-[10%] flex">
        <div>
          <h1 className="font-poppins text-[108px] w-[590px] leading-none font-extrabold pb-4">YOUR FEET DESERVE THE BEST</h1>
          <p className="w-[404px] font-poppins pb-4">YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
        <div className="flex gap-20"> 
            <Button text="Shop Now" />
            <Transparent text="Catogry"/>
        </div>
        <h6 className="text-gray-600 mt-4">Also Available On</h6>
        <div className="flex gap-4 font-poppins">
            <img src="/images/flipkart.png" alt="flipkart logo" className="w-[30px]"/>
            <img src="/images/amazon.png" alt="brand logo"  className="w-[30px]"/>
        </div>
        </div>
        <div>
            <img src="/images/shoe_image.png" alt="hero" className="w-[500px]"/>
        </div>
      </div>
    </>
  );
};
