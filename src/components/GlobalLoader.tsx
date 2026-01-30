import "../styles/globalLoader.scss";

type GlobalLoaderProps = {
  color?: string;
};

export const GlobalLoader = ({ color }: GlobalLoaderProps) => {
  const loaderColor = color ?? "#FFF";

  return (
    <div className="globalLoader">
      <div className="globalLoader__inner">
        <svg
          width="250"
          height="250"
          viewBox="0 0 200 200"
          className="globalLoader__spinner"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          style={{ color: loaderColor }}
        >
          <defs>
            <linearGradient id="spinner-secondHalf">
              <stop offset="0%" stopOpacity="0" stopColor="currentColor" />
              <stop offset="100%" stopOpacity="0.5" stopColor="currentColor" />
            </linearGradient>
            <linearGradient id="spinner-firstHalf">
              <stop offset="0%" stopOpacity="1" stopColor="currentColor" />
              <stop offset="100%" stopOpacity="0.5" stopColor="currentColor" />
            </linearGradient>
          </defs>
          <g strokeWidth="8">
            <path
              stroke="url(#spinner-secondHalf)"
              d="M 4 100 A 96 96 0 0 1 196 100"
            />
            <path
              stroke="url(#spinner-firstHalf)"
              d="M 196 100 A 96 96 0 0 1 4 100"
            />
            <path
              stroke="currentColor"
              strokeLinecap="round"
              d="M 4 100 A 96 96 0 0 1 4 98"
            />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default GlobalLoader;
