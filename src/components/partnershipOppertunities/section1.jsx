import Img from "../../../public/16.png";

export default function Section1() {
  return (
    <section
      className="min-h-screen flex items-center justify-center relative bg-cover bg-center"
      style={{
        backgroundImage: ` url(${Img.src})`,
      }}
    >
      <div className="container-custom text-center text-white z-10">
        <div className="max-w-8xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <p className="">
              Partnership <span className=" text-[#FCAD1D]">Oppertunities</span>
            </p>
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Join our network of successful partners and unlock new opportunities
            for growth. We offer comprehensive support, innovative solutions,
            and proven strategies to help you achieve your business goals
            through strategic partnerships.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#FCAD1D] rounded hover:bg-orange-600 text-white px-6 py-4 text-lg font-semibold">
              <a href="#partnership">Start Partnership</a>
            </button>
            <button
              variant="outline"
              className="border-white border rounded text-white hover:bg-white hover:text-emerald-700  px-6 py-4 text-lg font-semibold"
            >
              <a href="#process">Explore Options</a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
