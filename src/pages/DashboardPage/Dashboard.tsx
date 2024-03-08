import "./dashboard.css";
import Icon from "../../assets/Group 18.png";
import Form from "../../components/FormUrl";
const DashboardPage: React.FC = () => {
  const dashboardFormSubmit = () => {
    console.log("Form submitted");
  };

  const handleInputFocus = () => {
    console.log("Input focused");
  };

  return (
    <section className="dashboard-section ">
      <header className="px-[2em] py-[1em] w-full">
        <nav className="flex flex-col lg:flex-row lg:justify-between lg:items-center  gap-7 sm:gap-4 ">
          <div>
            <img src={Icon} className="h-[46px]" alt="Logo" />
          </div>

          <div>
            <Form
              onSubmit={dashboardFormSubmit}
              onFocus={handleInputFocus}
              style={{ width: "100%", maxWidth: "35em" }}
            />
          </div>

          <div className="flex gap-[1em]">
            <button className="border-2 border-stroke bg-primaryGrey p-2 rounded-full flex items-center">
              <span className="w-[20ch]">Welcome Mohammed</span>
              <span>
                <svg
                  className="fill-current h-7 w-7"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.657 6.586 4.293 7.95l.707.707L10 13.757z" />
                </svg>
              </span>
            </button>

            <button className="bg-primaryBlue rounded-full w-[3em] flex justify-center items-center shadow-xl shadow-primaryBlue">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.97656 0C8.50781 0 8.97656 0.46875 8.97656 1V1.625C11.2578 2.0625 12.9766 4.09375 12.9766 6.5V7.09375C12.9766 8.5625 13.5078 10 14.4766 11.0938L14.6953 11.3438C14.9766 11.6562 15.0391 12.0625 14.8828 12.4375C14.7266 12.7812 14.3516 13 13.9766 13H1.97656C1.57031 13 1.19531 12.7812 1.03906 12.4375C0.882812 12.0625 0.945312 11.6562 1.22656 11.3438L1.44531 11.0938C2.41406 10 2.97656 8.5625 2.97656 7.09375V6.5C2.97656 4.09375 4.69531 2.0625 6.97656 1.625V1C6.97656 0.46875 7.41406 0 7.97656 0ZM9.38281 15.4375C9.00781 15.8125 8.50781 16 7.97656 16C7.44531 16 6.91406 15.8125 6.53906 15.4375C6.16406 15.0625 5.97656 14.5312 5.97656 14H7.97656H9.97656C9.97656 14.5312 9.75781 15.0625 9.38281 15.4375Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
          {/* <div className="relative">
            <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              
            </div> */}
          {/* </div> */}
        </nav>
      </header>
      <h1>Dashboard page beecheeess</h1>

      <div className="bg-stroke opacity-25 h-[50vh]">
        <div className="bg-gray-800">
          <h2 className="text-white">Wassuppp</h2>
        </div>
      </div>
    </section>
  );
};

export default DashboardPage;
