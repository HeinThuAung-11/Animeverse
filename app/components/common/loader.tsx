import { GuardSpinner } from "react-spinners-kit";

const LoaderComponent = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <GuardSpinner size={60} loading={true} />
    </div>
  );
};

export default LoaderComponent;
