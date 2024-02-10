import { Parallax } from "react-parallax";

const Cover = ({img,title,subTitle}) => {
  return (
    <Parallax
        blur={{ min: -70, max: 70 }}
        bgImage={img}
        bgImageAlt="the Menu"
        strength={-200}
        className="mb-10"
    >
    <div
      className="hero h-[500px] "
    >
      
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="w-[700px] bg-black opacity-50 m-6 p-10">
          <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
          <p className="mb-5">
           {subTitle}
          </p>
         
        </div>
      </div>
    </div>
    </Parallax>
  );
};

export default Cover;
