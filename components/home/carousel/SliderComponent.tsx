import Image from "next/image";
import React from "react";
interface ColorProps {
  image: string;

}

const SliderComponent: React.FC<ColorProps> = ({  image}) => {
  return (
    <div className="slider-component">
      <Image src={image} alt={`all type of image like${image}`}  height={800} width={800} className="carousel-image"/>
    </div>
  );
};

export default SliderComponent;

