interface ArrowProps {
  onClick: () => void;
}

export const NextArrow = ({ onClick }: ArrowProps) => (
  <div
    className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer text-black z-10" // Added z-10
    onClick={onClick}>
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5-5 5M6 12h12" />
    </svg>
  </div>
);

export const PrevArrow = ({ onClick }: ArrowProps) => (
  <div
    className="absolute top-1/2 left-4 transform -translate-y-1/2 cursor-pointer text-black z-10" // Added z-10
    onClick={onClick}>
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 7l-5 5 5 5m6-10h-12" />
    </svg>
  </div>
);
