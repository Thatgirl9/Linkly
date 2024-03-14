import { useNavigate } from "react-router-dom";

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <div className="p-10">
      <h2 className="font-bold text-3xl mb-4">Not Found.</h2>
      <h4
        onClick={handleGoBack}
        className="cursor-pointer underline hover:text-primaryBlue"
      >
        Go back
      </h4>
    </div>
  );
};

export default NotFound;
