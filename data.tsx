import {
  BookText,
  CodeSquare,
  HomeIcon,
  UserRound,
  Linkedin,
  Twitter,
  Rss,
  Twitch,
  Youtube,
  Crop,
  Pencil,
  Computer,
  Book,
  Rocket,
  Speech,
} from "lucide-react";

export const socialNetworks = [
  {
    // whatsApp
    id: 1,
    logo: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="2em"
        height="2em"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M19.05 4.91A9.816 9.816 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.264 8.264 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.183 8.183 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07c0 1.22.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28"
        />
      </svg>
    ),
    src: "https://wa.me/+5492215047727",
  },
  {
    // linkedIn
    id: 2,
    logo: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="2em"
        height="2em"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M5 1.25a2.75 2.75 0 1 0 0 5.5a2.75 2.75 0 0 0 0-5.5M3.75 4a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0m-1.5 4A.75.75 0 0 1 3 7.25h4a.75.75 0 0 1 .75.75v13a.75.75 0 0 1-.75.75H3a.75.75 0 0 1-.75-.75zm1.5.75v11.5h2.5V8.75zM9.25 8a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 .75.75v.434l.435-.187a7.792 7.792 0 0 1 2.358-.595C20.318 7.4 22.75 9.58 22.75 12.38V21a.75.75 0 0 1-.75.75h-4a.75.75 0 0 1-.75-.75v-7a1.25 1.25 0 0 0-2.5 0v7a.75.75 0 0 1-.75.75h-4a.75.75 0 0 1-.75-.75zm1.5.75v11.5h2.5V14a2.75 2.75 0 1 1 5.5 0v6.25h2.5v-7.87c0-1.904-1.661-3.408-3.57-3.234a6.31 6.31 0 0 0-1.904.48l-1.48.635a.75.75 0 0 1-1.046-.69V8.75z"
          clipRule="evenodd"
        />
      </svg>
    ),
    src: "https://www.linkedin.com/in/jonny-fernandez-65a959277/",
  },
  {
    // GitHub
    id: 3,
    logo: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="2em"
        height="2em"
        viewBox="0 0 24 24"
      >
        <g fill="none">
          <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
          <path
            fill="currentColor"
            d="M6.315 6.176c-.25-.638-.24-1.367-.129-2.034a6.8 6.8 0 0 1 2.12 1.07c.28.214.647.283.989.18A9.3 9.3 0 0 1 12 5c.961 0 1.874.14 2.703.391c.342.104.709.034.988-.18a6.8 6.8 0 0 1 2.119-1.07c.111.667.12 1.396-.128 2.033c-.15.384-.075.826.208 1.14C18.614 8.117 19 9.04 19 10c0 2.114-1.97 4.187-5.134 4.818c-.792.158-1.101 1.155-.495 1.726c.389.366.629.882.629 1.456v3a1 1 0 0 0 2 0v-3c0-.57-.12-1.112-.334-1.603C18.683 15.35 21 12.993 21 10c0-1.347-.484-2.585-1.287-3.622c.21-.82.191-1.646.111-2.28c-.071-.568-.17-1.312-.57-1.756c-.595-.659-1.58-.271-2.28-.032a9 9 0 0 0-2.125 1.045A11.4 11.4 0 0 0 12 3c-.994 0-1.953.125-2.851.356a9 9 0 0 0-2.125-1.045c-.7-.24-1.686-.628-2.281.031c-.408.452-.493 1.137-.566 1.719l-.005.038c-.08.635-.098 1.462.112 2.283C3.484 7.418 3 8.654 3 10c0 2.992 2.317 5.35 5.334 6.397A4 4 0 0 0 8 17.98l-.168.034c-.717.099-1.176.01-1.488-.122c-.76-.322-1.152-1.133-1.63-1.753c-.298-.385-.732-.866-1.398-1.088a1 1 0 0 0-.632 1.898c.558.186.944 1.142 1.298 1.566c.373.448.869.916 1.58 1.218c.682.29 1.483.393 2.438.276V21a1 1 0 0 0 2 0v-3c0-.574.24-1.09.629-1.456c.607-.572.297-1.568-.495-1.726C6.969 14.187 5 12.114 5 10c0-.958.385-1.881 1.108-2.684c.283-.314.357-.756.207-1.14"
          />
        </g>
      </svg>
    ),
    src: "https://github.com/JonnyFernandez",
  },
  {
    // gmail
    id: 4,
    logo: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="2em"
        height="2em"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M5.856 6.84a.75.75 0 0 0-1.106.66V17a.75.75 0 0 0 1.5 0V8.756l5.394 2.904c.222.12.49.12.712 0l5.394-2.904V17a.75.75 0 0 0 1.5 0V7.5a.75.75 0 0 0-1.106-.66L12 10.148z"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M17.31 3.722a59.632 59.632 0 0 0-10.62 0l-1.518.135a3.53 3.53 0 0 0-3.179 3.006a35.508 35.508 0 0 0 0 10.274a3.53 3.53 0 0 0 3.18 3.005l1.516.136c3.534.316 7.088.316 10.622 0l1.517-.136a3.53 3.53 0 0 0 3.179-3.005a35.508 35.508 0 0 0 0-10.274a3.53 3.53 0 0 0-3.18-3.006zM6.824 5.216a58.133 58.133 0 0 1 10.354 0l1.517.136a2.03 2.03 0 0 1 1.829 1.728a34.005 34.005 0 0 1 0 9.84a2.03 2.03 0 0 1-1.829 1.728l-1.517.136c-3.444.308-6.91.308-10.354 0l-1.517-.136a2.03 2.03 0 0 1-1.829-1.728a34.008 34.008 0 0 1 0-9.84a2.03 2.03 0 0 1 1.829-1.728z"
          clipRule="evenodd"
        />
      </svg>
    ),
    src: "mailto:arcancode@gmail.com",
  },
  {
    // twitter
    id: 5,
    logo: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1.8em"
        height="1.8em"
        viewBox="0 0 16 16"
      >
        <path
          fill="currentColor"
          d="M9.294 6.928L14.357 1h-1.2L8.762 6.147L5.25 1H1.2l5.31 7.784L1.2 15h1.2l4.642-5.436L10.751 15h4.05zM7.651 8.852l-.538-.775L2.832 1.91h1.843l3.454 4.977l.538.775l4.491 6.47h-1.843z"
        />
      </svg>
    ),
    src: "https://x.com/Fernandezcode",
  },
];

export const itemsNavbar = [
  {
    id: 1,
    title: "Home",
    icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
    link: "/",
  },
  {
    id: 2,
    title: "User",
    icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
    link: "/about-me",
  },
  {
    id: 3,
    title: "Book",
    icon: <BookText size={25} color="#fff" strokeWidth={1} />,
    link: "/services",
  },
  {
    id: 4,
    title: "Target",
    icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
    link: "/portfolio",
  },
  {
    id: 5,
    title: "Home",
    icon: <Speech size={25} color="#fff" strokeWidth={1} />,
    link: "/testimonials",
  },
];

export const dataAboutPage = [
  {
    id: 1,
    title: "Python",
    subtitle: "Coderhouse",
    description:
      "Adquirí los conocimientos necesarios sobre Class-Based Views, login, registro de cuentas, CRUD y ModelForms para desarrollar aplicaciones web estilo blog utilizando Python con el framework Django.",
    date: "Jun 2024 ",
  },
  {
    id: 2,
    title: "Full Stack Developer",
    subtitle: "Soy Henry",
    description:
      "Bootcamp de Soy Henry enfocado en el desarrollo full stack, perfeccionando el manejo de tecnologías como Node.js, PostgreSQL, SQL, Sequelize y JavaScript para el backend, y React, Redux, JavaScript, HTML y CSS para el frontend. También se adquirieron habilidades en el uso de Git y GitHub para el control de versiones y la colaboración en proyectos.",
    date: "Jan 2023",
  },
  {
    id: 3,
    title: "Desarrollo Web",
    subtitle: "Elearning-Total",
    description:
      "Desarrollo web con las tecnologías básicas para la creación de aplicaciones: HTML, CSS y JavaScript.",
    date: "Ago 2019",
  },
  // {
  //   id: 4,
  //   title: "Estudiante de Ingeniería en Sistemas",
  //   subtitle: "UTN",
  //   description:
  //     "Estudiante de segundo año de Ingeniería en Sistemas en la Universidad Tecnológica Nacional (La Plata).",
  //   date: "Mar 2019",
  // },
  {
    id: 5,
    title: "Estudio de lenguas extranjeras: Inglés (B1)",
    subtitle: "Instituto Anglo Frances",
    description:
      "Completé un curso de inglés alcanzando el nivel B1 según el MCER, permitiéndome comunicarme eficazmente en situaciones cotidianas y manejar textos y conversaciones de complejidad moderada.",
    date: "Mar 2017",
  },
];

export const dataCounter = [
  {
    id: 0,
    endCounter: 4,
    text: "Años de experiencia",
    lineRight: true,
    lineRightMobile: true,
  },
  {
    id: 1,
    endCounter: 5,
    text: "Clientes satisfechos",
    lineRight: true,
    lineRightMobile: false,
  },
  {
    id: 2,
    endCounter: 12,
    text: "Proyectos finalizados",
    lineRight: true,
    lineRightMobile: true,
  },
  // {
  //   id: 3,
  //   endCounter: 30,
  //   text: "Premios ganadores",
  //   lineRight: false,
  //   lineRightMobile: false,
  // },
];

export const serviceData = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M12.887 1.362a1.75 1.75 0 0 0-1.774 0L3.363 5.92A1.75 1.75 0 0 0 2.5 7.429v9.142c0 .62.328 1.194.863 1.508l2.623 1.543C7.319 20.408 9 19.446 9 17.9V7.747H7v10.152l-2.5-1.471V7.572L12 3.16l7.5 4.412v8.856L12 20.84l-1.768-1.04l-1.014 1.723l1.895 1.115a1.75 1.75 0 0 0 1.774 0l7.75-4.559a1.75 1.75 0 0 0 .863-1.508V7.429a1.75 1.75 0 0 0-.863-1.508zM14 7.5c-1.363 0-2.329.351-2.95.97a2.5 2.5 0 0 0-.737 1.761c0 .555.157 1.058.482 1.474c.313.4.725.649 1.12.81c.72.297 1.62.394 2.344.471l.087.01c.831.09 1.454.167 1.88.345c.193.08.272.154.305.197c.021.028.062.09.062.26c0 .264-.09.434-.373.595c-.347.197-.96.347-1.883.347c-.915 0-1.553-.17-1.918-.422c-.283-.196-.492-.497-.437-1.15l-1.993-.167c-.108 1.289.359 2.316 1.292 2.962c.851.59 1.97.777 3.056.777c1.077 0 2.092-.165 2.873-.61c.846-.48 1.383-1.282 1.383-2.332c0-.557-.155-1.061-.477-1.48c-.31-.404-.722-.656-1.118-.822c-.728-.305-1.64-.403-2.368-.481l-.07-.008c-.833-.09-1.456-.165-1.885-.341c-.194-.08-.273-.152-.303-.192c-.02-.024-.059-.08-.059-.243c0-.077.023-.219.15-.345c.122-.122.499-.386 1.537-.386c.99 0 1.567.105 1.897.3c.215.128.448.363.48 1.133l1.998-.08c-.05-1.246-.506-2.208-1.458-2.772C16.08 7.583 15.01 7.5 14 7.5"
        />
      </svg>
    ),
    title: "Node js",
    description:
      "Ideal para construir servidores web, manejar múltiples conexiones simultánea y eficiencia en la gestión de recursos",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M24 18.588a1.53 1.53 0 0 1-1.895-.72l-3.45-4.771l-.5-.667l-4.003 5.444a1.466 1.466 0 0 1-1.802.708l5.158-6.92l-4.798-6.251a1.595 1.595 0 0 1 1.9.666l3.576 4.83l3.596-4.81a1.435 1.435 0 0 1 1.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 0 0 0 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27c1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.08 4.08 0 0 0 2.582-2.876c.207-.666.548-.78 1.174-.588a5.42 5.42 0 0 1-2.589 3.957a6.27 6.27 0 0 1-7.306-.933a6.58 6.58 0 0 1-1.64-3.858c0-.235-.08-.455-.134-.666A88 88 0 0 1 0 11.577zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278c-2.882-.04-4.944 2.094-5.071 5.264z"
        />
      </svg>
    ),
    title: "Express js",
    description:
      "Express.js es un framework esencial para el desarrollo de aplicaciones web con Node.js",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M23.56 14.723a.5.5 0 0 0-.057-.12q-.21-.395-1.007-.231c-1.654.34-2.294.13-2.526-.02c1.342-2.048 2.445-4.522 3.041-6.83c.272-1.05.798-3.523.122-4.73a1.6 1.6 0 0 0-.15-.236C21.693.91 19.8.025 17.51.001c-1.495-.016-2.77.346-3.116.479a10 10 0 0 0-.516-.082a8 8 0 0 0-1.312-.127c-1.182-.019-2.203.264-3.05.84C8.66.79 4.729-.534 2.296 1.19C.935 2.153.309 3.873.43 6.304c.041.818.507 3.334 1.243 5.744q.69 2.26 1.433 3.582q.83 1.493 1.714 1.79c.448.148 1.133.143 1.858-.729a56 56 0 0 1 1.945-2.206c.435.235.906.362 1.39.377v.004a11 11 0 0 0-.247.305c-.339.43-.41.52-1.5.745c-.31.064-1.134.233-1.146.811a.6.6 0 0 0 .091.327c.227.423.922.61 1.015.633c1.335.333 2.505.092 3.372-.679c-.017 2.231.077 4.418.345 5.088c.221.553.762 1.904 2.47 1.904q.375.001.829-.094c1.782-.382 2.556-1.17 2.855-2.906c.15-.87.402-2.875.539-4.101c.017-.07.036-.12.057-.136c0 0 .07-.048.427.03l.044.007l.254.022l.015.001c.847.039 1.911-.142 2.531-.43c.644-.3 1.806-1.033 1.595-1.67M2.37 11.876c-.744-2.435-1.178-4.885-1.212-5.571c-.109-2.172.417-3.683 1.562-4.493c1.837-1.299 4.84-.54 6.108-.13l-.01.01C6.795 3.734 6.843 7.226 6.85 7.44c0 .082.006.199.016.36c.034.586.1 1.68-.074 2.918c-.16 1.15.194 2.276.973 3.089q.12.126.252.237c-.347.371-1.1 1.193-1.903 2.158c-.568.682-.96.551-1.088.508c-.392-.13-.813-.587-1.239-1.322c-.48-.839-.963-2.032-1.415-3.512m6.007 5.088a1.6 1.6 0 0 1-.432-.178c.089-.039.237-.09.483-.14c1.284-.265 1.482-.451 1.915-1a8 8 0 0 1 .367-.443a.4.4 0 0 0 .074-.13c.17-.151.272-.11.436-.042c.156.065.308.26.37.475c.03.102.062.295-.045.445c-.904 1.266-2.222 1.25-3.168 1.013m2.094-3.988l-.052.14c-.133.357-.257.689-.334 1.004c-.667-.002-1.317-.288-1.81-.803c-.628-.655-.913-1.566-.783-2.5c.183-1.308.116-2.447.08-3.059l-.013-.22c.296-.262 1.666-.996 2.643-.772c.446.102.718.406.83.928c.585 2.704.078 3.83-.33 4.736a9 9 0 0 0-.23.546m7.364 4.572q-.024.266-.062.596l-.146.438a.4.4 0 0 0-.018.108c-.006.475-.054.649-.115.87a4.8 4.8 0 0 0-.18 1.057c-.11 1.414-.878 2.227-2.417 2.556c-1.515.325-1.784-.496-2.02-1.221a7 7 0 0 0-.078-.227c-.215-.586-.19-1.412-.157-2.555c.016-.561-.025-1.901-.33-2.646q.006-.44.019-.892a.4.4 0 0 0-.016-.113a2 2 0 0 0-.044-.208c-.122-.428-.42-.786-.78-.935c-.142-.059-.403-.167-.717-.087c.067-.276.183-.587.309-.925l.053-.142c.06-.16.134-.325.213-.5c.426-.948 1.01-2.246.376-5.178c-.237-1.098-1.03-1.634-2.232-1.51c-.72.075-1.38.366-1.709.532a6 6 0 0 0-.196.104c.092-1.106.439-3.174 1.736-4.482a4 4 0 0 1 .303-.276a.35.35 0 0 0 .145-.064c.752-.57 1.695-.85 2.802-.833q.616.01 1.174.081c1.94.355 3.244 1.447 4.036 2.383c.814.962 1.255 1.931 1.431 2.454c-1.323-.134-2.223.127-2.68.78c-.992 1.418.544 4.172 1.282 5.496c.135.242.252.452.289.54c.24.583.551.972.778 1.256c.07.087.138.171.189.245c-.4.116-1.12.383-1.055 1.717a35 35 0 0 1-.084.815c-.046.208-.07.46-.1.766m.89-1.621c-.04-.832.27-.919.597-1.01l.135-.041a1 1 0 0 0 .134.103c.57.376 1.583.421 3.007.134c-.202.177-.519.4-.953.601c-.41.19-1.096.333-1.747.364c-.72.034-1.086-.08-1.173-.151m.57-9.271a7 7 0 0 1-.105 1.001c-.055.358-.112.728-.127 1.177c-.014.436.04.89.093 1.33c.107.887.216 1.8-.207 2.701a4 4 0 0 1-.188-.385a8 8 0 0 0-.325-.617c-.616-1.104-2.057-3.69-1.32-4.744c.38-.543 1.342-.566 2.179-.463m.228 7.013l-.085-.107l-.035-.044c.726-1.2.584-2.387.457-3.439c-.052-.432-.1-.84-.088-1.222c.013-.407.066-.755.118-1.092c.064-.415.13-.844.111-1.35a.6.6 0 0 0 .012-.19c-.046-.486-.6-1.938-1.73-3.253a7.8 7.8 0 0 0-2.688-2.04A9.3 9.3 0 0 1 17.62.746c2.052.046 3.675.814 4.824 2.283a1 1 0 0 1 .067.1c.723 1.356-.276 6.275-2.987 10.54m-8.816-6.116c-.025.18-.31.423-.621.423l-.081-.006a.8.8 0 0 1-.506-.315c-.046-.06-.12-.178-.106-.285a.22.22 0 0 1 .093-.149c.118-.089.352-.122.61-.086c.316.044.642.193.61.418m7.93-.411c.011.08-.049.2-.153.31a.72.72 0 0 1-.408.223l-.075.005c-.293 0-.541-.234-.56-.371c-.024-.177.264-.31.56-.352c.298-.042.612.009.636.185"
        />
      </svg>
    ),
    title: "PostgreSQL",
    description:
      "Bases de datos robusta y flexible que se adapta a una amplia variedad de aplicaciones",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 128 128"
      >
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M90.491 57.282c-.37-4.79-1.496-9.409-3.062-13.934c-3.244-10.104-8.45-19.046-15.783-26.74c-1.854-1.946-3.916-3.729-5.209-6.151c-.818-1.532-1.597-3.085-2.394-4.629l-.505-1.273c-.085.292-.139.396-.142.501c-.065 2.517-1.491 4.224-3.267 5.817c-1.997 1.793-3.856 3.739-5.775 5.618l-5.901 7.763q-2.388 4.388-4.772 8.775l-3.19 8.617l-.096.134c-1.756 5.768-2.622 11.698-3.048 17.688c-.16 2.251.022 4.535.149 6.798c.181 3.235.743 6.415 1.586 9.545c3.062 11.372 9.276 20.805 17.771 28.819c1.579 1.489 3.199 2.843 4.847 4.26c.282-.965.507-1.93.763-2.895c.256-.961.515-1.917.688-2.881c-.174.964-.369 1.92-.562 2.881l-.826 2.895l.738 2.501l.684 3.884l.326 4.053c-.003.823-.036 1.648.014 2.47c.012.21.288.404.442.606l1.376.483l1.434.558l-.246-3.603l-.011-3.548l.495-5.405l.359-1.177l1.027-1.82c1.268-1.02 2.629-1.946 3.784-3.081c2.09-2.054 4.175-4.134 6.045-6.383a48 48 0 0 0 6.191-9.516c1.122-2.284 2.178-4.614 3.052-7.001c.77-2.104 1.247-4.315 1.854-6.479c.054-.156.126-.309.16-.468c1.254-5.841 1.465-11.741 1.004-17.682m-23.599 49.375l-.805-1.763zl1.183 1.01z"
          clipRule="evenodd"
        />
      </svg>
    ),
    title: "MongoBD",
    description:
      "Base de datos NoSQL y flexible basado en JSON, permitiendo un manejo eficiente y escalable.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12c6.616 0 12-5.383 12-12S18.616 0 12 0m0 1.144c5.995 0 10.856 4.86 10.856 10.856S17.996 22.856 12 22.856S1.144 17.996 1.144 12S6.004 1.144 12 1.144M8.37 5.868a7 7 0 0 0-.423.005c-.983.056-1.573.517-1.735 1.472c-.115.665-.096 1.348-.143 2.017q-.018.526-.115 1.038c-.134.609-.397.798-1.016.83a3 3 0 0 0-.244.042v1.463c1.126.055 1.278.452 1.37 1.629c.033.429-.013.858.015 1.287c.018.406.073.808.156 1.2c.259 1.075 1.307 1.435 2.575 1.218v-1.283c-.203 0-.383.005-.558 0c-.43-.013-.591-.12-.632-.535c-.056-.535-.042-1.08-.075-1.62c-.064-1.001-.175-1.988-1.153-2.625c.503-.37.868-.812.983-1.398c.083-.41.134-.821.166-1.237c.028-.415-.023-.84.014-1.25c.06-.665.102-.937.9-.91c.12 0 .235-.017.369-.027v-1.31q-.239-.001-.454-.006m7.593.009a4.3 4.3 0 0 0-.813.06v1.274c.245 0 .434 0 .623.005c.328.004.577.13.61.494c.032.332.031.669.064 1.006c.065.669.101 1.347.217 2.007c.102.544.475.95.941 1.283c-.817.549-1.057 1.333-1.098 2.215c-.023.604-.037 1.213-.069 1.822c-.028.554-.222.734-.78.748c-.157.004-.31.018-.484.028v1.305c.327 0 .627.019.927 0c.932-.055 1.495-.507 1.68-1.412q.117-.748.138-1.504c.032-.461.028-.927.074-1.384c.069-.715.397-1.01 1.112-1.057a1 1 0 0 0 .199-.046v-1.463c-.12-.014-.204-.027-.291-.032c-.536-.023-.804-.203-.937-.71a5 5 0 0 1-.152-.993c-.037-.618-.033-1.241-.074-1.86c-.08-1.192-.794-1.753-1.887-1.786m-6.89 5.28a.844.844 0 0 0-.083 1.684h.055a.83.83 0 0 0 .877-.78v-.046a.845.845 0 0 0-.83-.858zm2.911 0a.81.81 0 0 0-.834.78c0 .027 0 .05.004.078c0 .503.342.826.859.826c.507 0 .826-.332.826-.853c-.005-.503-.342-.836-.855-.831m2.963 0a.86.86 0 0 0-.876.835c0 .47.378.849.849.849h.009c.425.074.853-.337.881-.83c.023-.457-.392-.854-.863-.854"
        />
      </svg>
    ),
    title: "Swagger",
    description:
      "Para optimizar la interaccion de los Frontend developer con el servidor.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M19.088 2.477L24 7.606L12.521 20.485l-.925 1.038L0 7.559l5.108-5.082zm-17.434 5.2l6.934-4.003H5.601L1.619 7.636zm12.117-4.003L3.333 9.7l2.149 2.588l10.809-6.241l-.2-.346l2.851-1.646l-.365-.381zm7.52 2.834L8.257 14.034h5.101v-.4h3.667l5.346-5.998zm-7.129 10.338H9.268l2.36 2.843z"
        />
      </svg>
    ),
    title: "Zod",
    description:
      "Permite definir esquemas de validación, lo que hace que el código sea más legible y mantenible",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="0.87em"
        height="1em"
        viewBox="0 0 443 512"
      >
        <path
          fill="currentColor"
          d="M221.733 0L0 128v256l222.236 128L442.96 384.504V127.496zM49.077 358.471v-201.84L221.646 55.086l173.246 98.84v202.92L222.296 458.962zm88.512-50.076v71.874l-62.632-34.226v-74.099zm11.314-110.912l55.292-32.254l-62.632-36.963l-55.675 32.942zm74.802-22.329l-56.015 33.143l57.012 32.82l55.551-32.589zm-10.488 85.076l-56.119-32.305v66.78l56.12 30.666zm82.402-60.716l61.473-36.062l-56.722-33.475l-61.607 36.451zm-14.757-79.462l-62.634-36.964l-61.606 36.45l62.634 36.451zM74.957 180.641v67.174l62.632 34.225v-65.345zm229.738 130.342v72.094l63.309-37.548v-73.36zm0-90.947v64.72l63.309-37.453v-64.406zm-69.477 40.758v64.89l56.119-33.205v-64.606zm0 89.823v73.295l56.119-33.204v-71.36zm-22-.21l-56.12-31.573v74.099l56.12 30.666z"
        />
      </svg>
    ),
    title: "Sequelize",
    description:
      "ORM (Object-Relational Mapping) para Node.js que facilita la interacción con bases de datos SQL.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M14.014 7.37a9 9 0 0 0-.808.025c-.218.017-.434.072-.65.11c.229.118.456.213.68.315q.339.155.629.387c-.253-.097-.499-.208-.752-.298a8 8 0 0 0-1.624-.421c-.273-.037-.546-.073-.819.005c-.276.078-.354.18-.38.458c-.04.46.098.887.281 1.298a4.4 4.4 0 0 0 1.185 1.573a4.6 4.6 0 0 0 1.305.787l.411.155l-.009.032c-.263-.072-.532-.126-.787-.22a4.1 4.1 0 0 1-1.222-.73a4.2 4.2 0 0 1-1.007-1.22a3.4 3.4 0 0 1-.43-1.609l-.012.005C4.891 7.488.402 11.595.035 11.94l-.034.014q-.002.007.003.016L0 11.974l.005-.002l.013.024c.087-.019.173-.042.26-.054l.069-.01c.324-.115.655-.205.997-.253c.484-.069.985-.159 1.48-.156c.468.002.943.074 1.402.153q.193.034.38.087c.335.075.65.21.933.391l.06.03c.403.19.758.47 1.038.811c.052.057.141.116.187.178c.096.114.142.236.303.363v-1.737h2.01l.939 1.733l.942-1.733h2.07v3.357l.343-.226s.375-1 2.116-1.14l1.996-.064c-.308-.637-.307-.637-.159-.83c.147-.19 1.28-.314 1.48-.433l2.912-.588c.007-.022.015.012.03.007c.072-.022.147-.037.25-.061l.66-.16c.042-.025.093-.034.14-.05c.308-.107.577-.245.726-.573c.145-.319.339-.616.41-.967c.022-.111.003-.208-.078-.288a.73.73 0 0 0-.35-.171c-.421-.173-.84-.35-1.264-.513c-.261-.101-.529-.185-.795-.27a31 31 0 0 0-.794-.243q-.366-.106-.736-.205c-.24-.066-.48-.133-.72-.192c-.282-.07-.565-.13-.847-.195c-.215-.05-.428-.102-.644-.146q-.351-.07-.706-.13c-.302-.053-.602-.112-.905-.153c-.366-.05-.734-.082-1.101-.125q-.518-.061-1.038-.07m-3.303.767a.2.2 0 0 1 .056.007c.42.13.83.277 1.216.491c.365.203.695.45.979.756c.012.013.02.028.036.05l-.645-.293l-.021.026l.37.551l-.022.022a2 2 0 0 0-.665-.322l-.02.02l.633.74l-.416-.136l-.017.02c.163.27.376.505.58.775c-.354-.2-.665-.42-.956-.669a4.5 4.5 0 0 1-1.01-1.185c-.107-.19-.201-.385-.222-.606a.5.5 0 0 1 .011-.15a.12.12 0 0 1 .113-.097m5.424.668c.154.002.311-.006.464.015c.278.037.555.092.832.14c.158.027.317.052.474.086q.446.098.89.2q.294.068.587.14l-.329.161c-.365.027-.731.055-1.097.057a3.3 3.3 0 0 1-.675-.074c-.28-.058-.514-.196-.652-.466c-.02-.04-.09-.063-.14-.078c-.18-.054-.362-.1-.544-.168c.063-.005.126-.014.19-.013m3.223 2.635l.005.02q-.12.031-.239.067c-.455.14-.916.266-1.363.428c-.28.101-.544.25-.81.388c-.233.119-.315.322-.287.575q.03.243.055.488a1.8 1.8 0 0 1-.288-.701c-.035-.169.058-.273.18-.365c.238-.178.496-.318.777-.41c.35-.117.702-.233 1.059-.325c.251-.065.513-.09.77-.133q.071-.014.141-.032M9.141 13.955v2.676h1.869l.064-.066v-2.61l-.97 1.495z"
        />
      </svg>
    ),
    title: "Mongoose",
    description:
      "Mongoose es una biblioteca de modelado de datos para MongoDB y Node.js.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 15 15"
      >
        <path
          fill="none"
          stroke="currentColor"
          d="M12.5 8v-.167c0-.736-.597-1.333-1.333-1.333H10a1.5 1.5 0 1 0 0 3h1a1.5 1.5 0 0 1 0 3h-1A1.5 1.5 0 0 1 8.5 11m-2-5v5a1.5 1.5 0 0 1-3 0M.5.5h14v14H.5z"
        />
      </svg>
    ),
    title: "JavaScript",
    description:
      "Conocido por su versatilidad y capacidad para manejar tanto el frontend como el backend.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 15 15"
      >
        <path
          fill="currentColor"
          d="M.5.5V0a.5.5 0 0 0-.498.542zm14 0l.498.042A.5.5 0 0 0 14.5 0zm-1 12l.158.474a.5.5 0 0 0 .34-.433zm-6 2l-.158.474a.499.499 0 0 0 .316 0zm-6-2l-.498.041a.5.5 0 0 0 .34.433zm3-9V3H4v.5zm0 3H4V7h.5zm6 0h.5V6h-.5zm0 3l.158.474L11 9.86V9.5zm-3 1l-.158.474l.158.053l.158-.053zm-3-1H4v.36l.342.114zM.5 1h14V0H.5zM14.002.458l-1 12l.996.083l1-12zm-.66 11.568l-6 2l.316.948l6-2zm-5.684 2l-6-2l-.316.948l6 2zm-5.66-1.567l-1-12l-.996.083l1 12zM11 3H4.5v1H11zm-7 .5v3h1v-3zM4.5 7h6V6h-6zm5.5-.5v3h1v-3zm.342 2.526l-3 1l.316.948l3-1zm-2.684 1l-3-1l-.316.948l3 1zM5 9.5V8H4v1.5z"
        />
      </svg>
    ),
    title: "HTML",
    description:
      "Es la base de cualquier sitio web, proporcionando la estructura y el contenido en los navegadores web .",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 15 15"
      >
        <path
          fill="currentColor"
          d="M.5.5V0a.5.5 0 0 0-.498.542zm14 0l.498.042A.5.5 0 0 0 14.5 0zm-1 12l.158.474a.5.5 0 0 0 .34-.433zm-6 2l-.158.474a.499.499 0 0 0 .316 0zm-6-2l-.498.041a.5.5 0 0 0 .34.433zm9-9h.5V3h-.5zm0 6l.158.474L11 9.86V9.5zm-3 1l-.158.474l.158.053l.158-.053zm-3-1H4v.36l.342.114zM.5 1h14V0H.5zM14.002.458l-1 12l.996.083l1-12zm-.66 11.568l-6 2l.316.948l6-2zm-5.684 2l-6-2l-.316.948l6 2zm-5.66-1.567l-1-12l-.996.083l1 12zM10.5 3H4v1h6.5zM6 7h4.5V6H6zm4-.5v3h1v-3zm.342 2.526l-3 1l.316.948l3-1zm-2.684 1l-3-1l-.316.948l3 1zM5 9.5V8H4v1.5zm5-6v3h1v-3z"
        />
      </svg>
    ),
    title: "CSS",
    description:
      "Permite a los desarrolladores controlar el aspecto visual y el diseño de las páginas web,",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 15 15"
      >
        <path
          fill="none"
          stroke="currentColor"
          d="M6 2.5h1M4.5 4V1.5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-4a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V11M8 4.5H1.5a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h3m2.5-1h6.5a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1h-3m-2.5 9h1"
        />
      </svg>
    ),
    title: "Python",
    description:
      "Lenguaje versátil y poderoso que facilita el desarrollo de aplicaciones en diferentes áreas y niveles de complejidad.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
      >
        <g fill="none">
          <g fill="currentColor" clipPath="url(#akarIconsReactFill0)">
            <path d="M24 11.689c0-1.59-1.991-3.097-5.044-4.031c.705-3.111.392-5.587-.988-6.38a2.145 2.145 0 0 0-1.096-.273v1.09c.225 0 .406.045.558.128c.665.382.954 1.834.729 3.703c-.054.46-.142.944-.25 1.438a23.706 23.706 0 0 0-3.106-.533a23.857 23.857 0 0 0-2.035-2.446c1.595-1.482 3.092-2.294 4.11-2.294V1c-1.346 0-3.107.959-4.888 2.622C10.21 1.97 8.448 1.02 7.103 1.02v1.09c1.013 0 2.515.808 4.11 2.28c-.685.72-1.37 1.536-2.021 2.441a22.844 22.844 0 0 0-3.111.538a14.683 14.683 0 0 1-.255-1.418c-.23-1.87.054-3.322.715-3.708c.146-.088.337-.128.562-.128v-1.09c-.41 0-.783.088-1.105.273c-1.375.793-1.683 3.263-.974 6.365C1.981 8.603 0 10.104 0 11.689c0 1.59 1.991 3.097 5.044 4.03c-.705 3.112-.392 5.588.988 6.38c.318.186.69.274 1.1.274c1.346 0 3.107-.959 4.888-2.622c1.78 1.653 3.541 2.602 4.887 2.602a2.18 2.18 0 0 0 1.105-.274c1.375-.792 1.683-3.262.974-6.364C22.019 14.781 24 13.274 24 11.689m-6.37-3.263a22.023 22.023 0 0 1-.66 1.932a26.444 26.444 0 0 0-1.345-2.319c.695.103 1.365.23 2.006.387m-2.24 5.21a25.94 25.94 0 0 1-1.179 1.869a25.453 25.453 0 0 1-4.412.005a25.457 25.457 0 0 1-2.201-3.806a26.064 26.064 0 0 1 2.192-3.82a25.455 25.455 0 0 1 4.411-.006c.406.582.803 1.204 1.184 1.86c.372.64.71 1.29 1.018 1.946a27.41 27.41 0 0 1-1.013 1.952M16.97 13c.264.656.49 1.311.675 1.947c-.64.157-1.316.289-2.015.391A27.044 27.044 0 0 0 16.97 13m-4.96 5.22c-.455-.47-.91-.993-1.36-1.566c.44.02.89.035 1.345.035c.46 0 .915-.01 1.36-.035c-.44.573-.895 1.096-1.345 1.566m-3.64-2.882a22.113 22.113 0 0 1-2.006-.386c.181-.631.406-1.282.66-1.932c.201.39.412.782.642 1.174c.23.391.464.773.704 1.144m3.615-10.18c.455.47.91.993 1.36 1.566c-.44-.02-.89-.035-1.345-.035c-.46 0-.915.01-1.36.035c.44-.573.895-1.096 1.345-1.566M8.365 8.04a27.02 27.02 0 0 0-1.34 2.333a20.96 20.96 0 0 1-.675-1.947c.64-.152 1.316-.284 2.015-.386m-4.427 6.124c-1.732-.738-2.852-1.707-2.852-2.475s1.12-1.742 2.852-2.475c.42-.181.88-.343 1.355-.494c.279.958.646 1.956 1.1 2.979a23.165 23.165 0 0 0-1.085 2.964a14.875 14.875 0 0 1-1.37-.499m2.632 6.99c-.665-.38-.954-1.834-.729-3.702c.054-.46.142-.945.25-1.439c.958.235 2.005.416 3.106.534a23.87 23.87 0 0 0 2.035 2.446c-1.595 1.482-3.092 2.294-4.11 2.294a1.167 1.167 0 0 1-.552-.132m11.604-3.727c.23 1.869-.054 3.322-.715 3.708c-.146.088-.337.127-.562.127c-1.013 0-2.515-.807-4.11-2.28a23.01 23.01 0 0 0 2.021-2.44a22.843 22.843 0 0 0 3.111-.538c.113.494.2.968.255 1.423m1.883-3.263c-.42.181-.88.343-1.355.494a23.482 23.482 0 0 0-1.1-2.979c.45-1.017.811-2.01 1.085-2.964a15.3 15.3 0 0 1 1.375.499c1.732.738 2.852 1.707 2.852 2.475c-.005.768-1.125 1.742-2.857 2.475" />
            <path d="M11.995 13.925a2.236 2.236 0 1 0 0-4.472a2.236 2.236 0 0 0 0 4.472" />
          </g>
          <defs>
            <clipPath id="akarIconsReactFill0">
              <path fill="#fff" d="M0 0h24v24H0z" />
            </clipPath>
          </defs>
        </g>
      </svg>
    ),
    title: "React",
    description:
      "Desarrollo de interfaces de usuario modernas y eficientes en JavaScript. ",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
      >
        <g fill="none">
          <g clipPath="url(#akarIconsReduxFill0)">
            <path
              fill="currentColor"
              d="M16.63 16.563c.885-.092 1.557-.863 1.527-1.788a1.723 1.723 0 0 0-1.71-1.665h-.062c-.947.03-1.68.832-1.65 1.788c.032.463.215.863.49 1.14c-1.039 2.067-2.627 3.577-5.01 4.841c-1.618.864-3.298 1.172-4.977.956c-1.375-.185-2.444-.802-3.116-1.819c-.977-1.51-1.068-3.145-.244-4.779c.58-1.171 1.497-2.035 2.077-2.466a16.987 16.987 0 0 1-.397-1.573C-.871 14.436-.412 18.814.93 20.88c1.008 1.542 3.054 2.498 5.315 2.498a7.45 7.45 0 0 0 1.832-.216c3.91-.77 6.872-3.114 8.552-6.598m5.375-3.823c-2.321-2.744-5.742-4.255-9.651-4.255h-.489a1.677 1.677 0 0 0-1.496-.925h-.062c-.946.031-1.68.833-1.649 1.789c.03.925.794 1.664 1.71 1.664h.062a1.721 1.721 0 0 0 1.496-1.048h.55c2.321 0 4.52.678 6.505 2.004c1.527 1.018 2.627 2.343 3.237 3.947c.52 1.294.49 2.558-.06 3.638c-.856 1.634-2.291 2.528-4.185 2.528c-1.221 0-2.382-.37-2.993-.648a18.07 18.07 0 0 1-1.374 1.11c1.313.617 2.657.956 3.94.956c2.932 0 5.1-1.634 5.925-3.268c.885-1.788.824-4.871-1.466-7.492M6.49 17.087c.03.925.794 1.665 1.71 1.665h.061c.947-.03 1.68-.832 1.65-1.788a1.723 1.723 0 0 0-1.71-1.665h-.062a.53.53 0 0 0-.214.03c-1.252-2.096-1.771-4.377-1.588-6.844c.122-1.85.733-3.453 1.802-4.779c.886-1.14 2.596-1.695 3.757-1.726c3.237-.062 4.611 4.008 4.703 5.642c.397.092 1.069.308 1.527.462C17.759 3.09 14.706.5 11.773.5C9.025.5 6.49 2.504 5.482 5.464c-1.405 3.946-.489 7.738 1.222 10.729c-.153.216-.245.555-.214.894"
            />
          </g>
          <defs>
            <clipPath id="akarIconsReduxFill0">
              <path fill="#fff" d="M0 0h24v24H0z" />
            </clipPath>
          </defs>
        </g>
      </svg>
    ),
    title: "Redux",
    description:
      "Facilita la gestión del estado de la aplicación de manera predecible, centralizada y eficiente.",
  },
  // {
  //   icon: <Rocket />,
  //   title: "HTML",
  //   description:
  //     "Optimización de tu presencia en línea mediante estrategias de SEO avanzadas, ",
  // },
];

export const dataPortfolio = [
  {
    id: 1,
    title: "M-Market",
    image: "/market.png",
    urlGithub: "https://github.com/JonnyFernandez/M-Market",
    urlDemo: "https://youtu.be/59KQuZE1tBA",
  },
  {
    id: 2,
    title: "Assist",
    image: "/assist.png",
    urlGithub: "https://github.com/JonnyFernandez/assistt",
    urlDemo: "https://youtu.be/7b_LZ93zM64",
  },
  {
    id: 3,
    title: "E-commece API-REST",
    image: "/ecommerce.png",
    urlGithub: "https://github.com/JonnyFernandez/Control/tree/main/api",
    urlDemo: "https://youtu.be/dFFRHp4RvJA",
  },
  {
    id: 4,
    title: "Notes Manager",
    image: "/task.png",
    urlGithub: "https://github.com/JonnyFernandez/Tasker",
    urlDemo: "https://www.youtube.com/watch?v=x3on4ATUrVw",
  },
  {
    id: 5,
    title: "API-REST Task ",
    image: "/api-task.png",
    urlGithub: "https://github.com/JonnyFernandez/Tasker/tree/main/api",
    urlDemo: "https://youtu.be/xn61RJaYE2s",
  },
  {
    id: 6,
    title: "API-REST Rick & Morty",
    image: "/RandM.png",
    urlGithub: "https://github.com/JonnyFernandez/Rick-and-Morty-Backend",
    urlDemo: "#!",
  },
  {
    id: 7,
    title: "FOOD",
    image: "/food.png",
    urlGithub: "https://github.com/JonnyFernandez/PI-Food",
    urlDemo: "https://youtu.be/STfdhvXOBVQ",
  },
  // {
  //   id: 8,
  //   title: "E-commerce web",
  //   image: "/image-8.jpg",
  //   urlGithub: "#!",
  //   urlDemo: "#!",
  // },
];

export const dataTestimonials = [
  {
    id: 1,
    name: "George Snow",
    description:
      "¡Increíble plataforma! Los testimonios aquí son genuinos y me han ayudado a tomar decisiones informadas. ¡Altamente recomendado!",
    imageUrl: "/profile1.png",
  },
  {
    id: 2,
    name: "Juan Pérez",
    description:
      "Me encanta la variedad de testimonios disponibles en esta página. Es inspirador ver cómo otras personas han superado desafíos similares a los míos. ¡Gracias por esta invaluable fuente de motivación!",
    imageUrl: "/profile2.png",
  },
  {
    id: 3,
    name: "María García",
    description:
      "Excelente recurso para obtener opiniones auténticas sobre diferentes productos y servicios. Me ha ayudado mucho en mis compras en línea. ¡Bravo por este sitio!",
    imageUrl: "/profile3.png",
  },
  {
    id: 4,
    name: "Laura Snow",
    description:
      "¡Qué descubrimiento tan fantástico! Los testimonios aquí son honestos y detallados. Me siento más seguro al tomar decisiones después de leer las experiencias compartidas por otros usuarios.",
    imageUrl: "/profile4.png",
  },
  {
    id: 5,
    name: "Carlos Sánchez",
    description:
      "Una joya en la web. Los testimonios son fáciles de encontrar y están bien organizados. ¡Definitivamente mi destino número uno cuando necesito referencias confiables!",
    imageUrl: "/profile5.png",
  },
  {
    id: 6,
    name: "Antonio Martínez",
    description:
      "¡Fantástico recurso para aquellos que buscan validación antes de tomar decisiones importantes! Los testimonios aquí son veraces y realmente útiles. ¡Gracias por simplificar mi proceso de toma de decisiones!",
    imageUrl: "/profile6.png",
  },
];
