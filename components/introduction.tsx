import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const Introduction = () => {
  return (
    <div className="z-20 w-full bg-darkBg/60">
      <div className="z-20 grid items-center h-full p-6 py-20 md:py-0 md:grid-cols-2">
        <Image
          src="/avatar-13-3d.png"
          priority
          width="600"
          height="600"
          alt="Avatar"
        />
        <div className="flex flex-col justify-center max-w-md">
          <h1 className="mb-5 text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-10">
            Full Stack Developer, <br />
            <TypeAnimation
              sequence={[
                "Diseño Web.",
                1000,
                "Diseño responsivo.",
                1000,
                "Desarrolla Servidores.",
                1000,
                "Lógica de Aplicación.",
                1000,
                "Crea y Optimiza APIs.",
                1000,
                "Bases de Datos.",
                1000,
                "Seguridad del Sistema.",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="font-bold text-secondary"
            />
          </h1>

          <p className="mx-auto mb-2 text-xl md:text-xl md:mx-0 md:mb-8">
            Como Full Stack Developer, me apasiona crear soluciones tecnológicas
            completas, especializándome en aplicaciones web robustas, escalables
            y seguras con las tecnologías más avanzadas.
          </p>

          <div className="flex items-center justify-center gap-3 md:justify-start md:gap-10">
            <a
              href="/portfolio"
              className="px-3 py-2 my-2 transition-all border-2 cursor-pointer text-md w-fit rounded-xl hover:shadow-xl hover:shadow-white/50"
            >
              Ver proyectos
            </a>
            <a
              href="https://drive.google.com/file/d/1cieNptbaNM566zSIBkXezVuG5m5pF5tu/view?usp=sharing"
              className="px-3 py-2 my-5 transition-all border-2 cursor-pointer text-md w-fit text-secondary border-secondary rounded-xl hover:shadow-xl hover:shadow-secondary"
            >
              Descargar CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
