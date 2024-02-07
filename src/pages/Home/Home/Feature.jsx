import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import feature from "../../../assets/home/featured.jpg";
import "./Feature.css";

const Feature = () => {
  return (
    <section className="featured-item bg-fixed text-white my-10">
      <SectionTitle
        SubHeading={"check it out "}
        heading={"Feature Item"}
      ></SectionTitle>
      <div className="md:flex justify-center items-center gap-2 px-8 py-8 bg-slate-500 bg-opacity-40">
        <div>
          <img src={feature}></img>
        </div>
        <div className="md:ml-10">
          <p>March 20, 2023</p>
          <p> WHERE CAN I GET SOME?</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            voluptate facere, deserunt dolores maiores quod nobis quas quasi.
            Eaque repellat recusandae ad laudantium tempore consequatur
            consequuntur omnis ullam maxime tenetur. Read More
          </p>
          <button className="btn btn-outline border-0 border-b-4">
            Order Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Feature;
