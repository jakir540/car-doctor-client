import person1 from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div className="hero py-20 bg-base-200 my-5 rounded-2xl ">
      <div className="hero-content flex-col justify-between lg:flex-row">
        <div className="lg:w-1/2 relative">
          <img src={person1} className="w-3/4 rounded-lg shadow-2xl" />
          <img
            src={parts}
            className="w-1/2 rounded-lg shadow-2xl absolute right-16 top-1/2 border-8 border-white-700"
          />
        </div>

        <div className="lg:w-1/2 space-y-5">
          <div>
            <h1 className="text-3xl font-bold text-orange-500">About</h1>
            <h1 className="text-5xl font-bold ">
              We are qualified & of experience in this field
            </h1>
          </div>

          <p className="py-6">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which dont look even slightly
            believable.
          </p>
          <p>
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which dont look even slightly
            believable.
          </p>
          <button className="btn bg-[#ff6600]">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default About;
