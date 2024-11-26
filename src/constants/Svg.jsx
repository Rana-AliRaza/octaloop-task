
export const Artist = ({icon, title}) => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 434 425"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      
      <path
        d="M3 362.165V65.4922L9.47287 73.0439V355.692L3 362.165Z"
        fill="url(#paint0_linear_3074_839)"
      />
      <path
        d="M432.367 362.165V65.4922L425.894 73.0439V355.692L432.367 362.165Z"
        fill="url(#paint1_linear_3074_839)"
      />
      <path
        d="M430.21 26.655V54.7041L416.185 64.4134V361.087L428.052 372.953V398.845L405.397 421.5H278.097L272.703 416.106H159.428L154.034 421.5H28.8918L5.15791 397.766V375.111L17.0248 363.244V65.4922L4.0791 52.5465V26.655L26.7341 4H155.113L160.507 9.39406H271.624L275.94 4H406.476L430.21 26.655Z"
        stroke="url(#paint2_linear_3074_839)"
        strokeWidth="6.47287"
      />
      <path
        d="M144.793 315.5V297.622H155.582V299.542H146.958V305.583H155.024V307.504H146.958V313.579H155.722V315.5H144.793Z"
        fill="black"
      />


      <image
        xlinkHref={icon}  // Use xlink:href for linking image source in SVG
        x="180"
        y="150"
        width="120"
        height="120"
      />

      <text
        x="50%"
        y="350"
        textAnchor="middle"
        fontSize="25"
        fill="white"
        fontFamily="Arial, sans-serif"
        className="border border-red-800"
      >
        {title}
      </text>

      {/* Linear Gradient Definitions */}
      <defs>
        <linearGradient
          id="paint0_linear_3074_839"
          x1="6.23643"
          y1="361.828"
          x2="6.23643"
          y2="65.1281"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#d9201d" />
          <stop offset="1" stopColor="#db1212" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_3074_839"
          x1="429.605"
          y1="361.828"
          x2="429.605"
          y2="65.1281"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#db1212" />
          <stop offset="1" stopColor="#e81616" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_3074_839"
          x1="217.684"
          y1="421.5"
          x2="217.684"
          y2="4"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#f51111" />
          <stop offset="1" stopColor="#e01010" />
        </linearGradient>
      </defs>
    </svg>
  );
};
