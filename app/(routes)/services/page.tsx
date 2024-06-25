import AvatarServices from "@/components/avatar-services";
import CircleImage from "@/components/circle-image";
import SliderServices from "@/components/slider-services";
import TransitionPage from "@/components/transition-page";

const ServicesPage = () => {
  return (
    <>
      <TransitionPage />
      <CircleImage />
      <AvatarServices />
      <div className="grid items-center justify-center h-screen max-w-5xl gap-6 mx-auto md:grid-cols-2">
        <div className="max-w-[450px]">
          <h1 className="text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-5">
            Mis <span className="font-bold text-secondary"> Skills.</span>
          </h1>
          <p className="mb-3 text-xl text-gray-300">
            Ofrezco servicios como Backend Developer, especializado en la
            creación de sitios web y aplicaciones atractivas y funcionales.
            Utilizo Python, JavaScript, PostgreSQL y MongoDB para diseñar
            servidores seguros y robustos, comprometiéndome a ofrecer soluciones
            escalables y de alto rendimiento.
          </p>
          <button className="px-3 py-2 rounded-lg bg-secondary hover:bg-secondary/65">
            Contacta conmigo
          </button>
        </div>

        {/* SLIDER */}
        <div>
          <SliderServices />
        </div>
      </div>
    </>
  );
};

export default ServicesPage;