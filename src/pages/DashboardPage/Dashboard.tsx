import "./dashboard.css";
import Icon from "../../assets/Group 18.png";
import Form from "../../components/FormUrl";
import Spinner from "../../components/Spinner";
import ShortLink from "../../components/ShortenedLink";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { supabase } from "../../config/supabaseClient.js";

const DashboardPage: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [notification, setNotification] = useState<boolean>(false);
  const [profile, setProfile] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [invalidLink, setInValidLink] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<null>(null);
  const [shortUrl, setShortUrl] = useState("");
  const [qrCode, setQrCode] = useState("");
  const navigate = useNavigate();
  const { email } = useParams();
  const [tabledData, setTabledData] = useState<any>([]);

  const handleClick = () => {
    if (notification) {
      setNotification(false);
    }
    setIsOpen(!isOpen);
  };

  const handleNotification = () => {
    if (isOpen) {
      setIsOpen(false);
    }

    if (profile) {
      setProfile(false);
    }
    setNotification(!notification);
  };

  const handleProfile = () => {
    if (notification) {
      setNotification(false);
    }
    setProfile(!profile);
  };

  const handleOutsideClick = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    if (
      target &&
      (target.id === "dropdown-button" || target.id === "dropdown")
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const logOut = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      await new Promise((resolve) => setTimeout(resolve, 5000));

      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  const handleInputFocus = () => {
    setInValidLink(false);
  };

  // useEffect(() => {
  //   console.log(shortUrl, "UseEffect");
  // }, [shortUrl]);

  // const dashboardFormSubmit = async (longUrl: string) => {
  //   setIsLoading(true);

  //   const linkValid =
  //     longUrl.startsWith("http://") || longUrl.startsWith("https://");

  //   const updateLinkValid = linkValid ? longUrl : `https://${longUrl}`;

  //   const timestamp = new Date();

  //   const {
  //     data: { user },
  //   } = await supabase.auth.getUser();
  //   // Insert the data into the database
  //   console.log(user);
  //   console.log(user.email);
  //   console.log(user.id);
  //   console.log(user.aud);
  //   console.log(user.role);
  //   const url = shortUrl;

  //   console.log(url);

  //   const sendShortUrlToApi = async (shortUrl: string) => {
  //     try {
  //       console.log("Sending short URL to API:", shortUrl);
  //       const { data, error } = await supabase
  //         .from("linkly-url")
  //         .insert([
  //           {
  //             name: user.email,
  //             original_link: longUrl,
  //             shortened_url: shortUrl,
  //             created_at: timestamp,
  //             created_at_date: timestamp,
  //             user_id: user?.id || "null",
  //             is_authenticated: user?.role === "authenticated" ? true : false,
  //             status: true,
  //             clicks: 1,
  //           },
  //         ])
  //         .single();

  //       console.log(url);
  //       if (error) {
  //         console.error(error);
  //       }

  //       if (data) {
  //         console.log(data);
  //       }
  //     } catch (error) {
  //       console.error("Error sending short URL to API:", error);
  //     }
  //   };

  //   if (!/^[0-9]+$/.test(longUrl)) {
  //     setInValidLink(false);
  //     console.log(updateLinkValid);
  //     try {
  //       const response = await fetch(
  //         "https://api.tinyurl.com/create?api_token=sX9Z93j8f6BRAy10xkh4esULwnyvDrUO5LaMgmLjGFLKSiMJenrmFsmiv0jD",
  //         {
  //           method: "POST",
  //           headers: {
  //             // Authorization: `Bearer ${apiToken}`,
  //             "Content-Type": "application/json",
  //           },
  //           body: JSON.stringify({
  //             url: updateLinkValid,
  //             domain: "tinyurl.com",
  //             description: "string",
  //             // group_guid: groupGuid,
  //           }),
  //         }
  //       );

  //       if (response.ok) {
  //         const data = await response.json();
  //         console.log(data);
  //         const result = data?.data?.tiny_url;
  //         console.log(result, "result");
  //         setShortUrl(result);

  //         await sendShortUrlToApi(result);
  //         // setShortUrl(data.data.tiny_url);

  //         // setShortUrl(result);
  //         console.log("Shorturl", shortUrl);

  //         const qrCode = data.data.tiny_url;
  //         console.log(qrCode);
  //         setQrCode(qrCode);
  //       } else {
  //         console.error("Error", response.statusText);
  //       }
  //     } catch (err: any) {
  //       console.error(err.message);
  //       setErrorMessage(err.message);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   } else {
  //     setInValidLink(true);
  //     setIsLoading(false);
  //   }

  //   // const fetchDataFromTable = async () => {
  //   const { data, error } = await supabase
  //     .from("linkly-url")
  //     .select()
  //     .eq("user_id", user?.id);
  //   // .single();

  //   if (error) {
  //     console.error(error);
  //   }

  //   if (data) {
  //     console.log(data);
  //     setTabledData(data);
  //   }
  //   // };
  // };

  const getUserData = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (user) {
      const { data, error } = await supabase
        .from("linkly-url")
        .select()
        .eq("user_id", user.id);

      if (error) {
        console.error(error, "Error");
      } else {
        setTabledData(data || []);
      }
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  const dashboardFormSubmit = async (longUrl: string) => {
    setIsLoading(true);

    const linkValid =
      longUrl.startsWith("http://") || longUrl.startsWith("https://");
    const updatedLink = linkValid ? longUrl : `https://${longUrl}`;
    const timestamp = new Date();
    // const timestamps = new Date();
    // const formattedDate = timestamps.toLocaleDateString("en-GB", {
    //   day: "2-digit",
    //   month: "2-digit",
    //   year: "numeric",
    // });

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      setIsLoading(false);
      return;
    }

    console.log(user);

    if (!/^[0-9]+$/.test(longUrl)) {
      setInValidLink(false);
      console.log(updatedLink);

      try {
        const response = await fetch(
          "https://api.tinyurl.com/create?api_token=sX9Z93j8f6BRAy10xkh4esULwnyvDrUO5LaMgmLjGFLKSiMJenrmFsmiv0jD",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              url: updatedLink,
              domain: "tinyurl.com",
              description: "string",
              // group_guid: groupGuid,
            }),
          }
        );

        if (response.ok) {
          const data = await response.json();
          console.log(data);
          const result = data?.data?.tiny_url;
          const qrCode = data.data.tiny_url;
          console.log(result, "result");

          await supabase.from("linkly-url").insert([
            {
              name: user.email,
              original_link: longUrl,
              shortened_url: result,
              created_at: timestamp,
              created_at_date: timestamp,
              user_id: user?.id || "null",
              is_authenticated: user?.role === "authenticated" ? true : false,
              status: result ? "Active" : "Inactive",
              clicks: 1,
            },
          ]);

          setShortUrl(result);
          console.log("Shorturl", shortUrl);
          console.log(qrCode, "qrcode");
          setQrCode(qrCode);
          getUserData();
        } else {
          console.error("Error", response.statusText);
          throw new Error("Failed to shorten URL");
        }
      } catch (err: any) {
        console.error(err.message);
        setErrorMessage(err.message);
      } finally {
        setIsLoading(false);
      }
    } else {
      setInValidLink(true);
      setIsLoading(false);
    }
  };

  return (
    <section className="dashboard-section ">
      <header className="px-[1em] sm:px-[2em]  py-[1em] lg:py-[2em] w-full ">
        <nav className="flex flex-col lg:flex-row lg:justify-between   gap-7 sm:gap-4 ">
          {/* Useful in Mobile View */}

          <div className="flex justify-between">
            <div>
              <img src={Icon} className="h-[46px]" alt="Logo" />
            </div>

            {/* For mobile */}
            <div className="lg:hidden flex gap-2 items-center justify-center ">
              {/* Profile for Mobile */}
              <div className="relative">
                <button
                  className="cursor-pointer text-4xl md:text-5xl flex items-end justify-end"
                  onClick={handleProfile}
                >
                  <ion-icon name="person-circle-outline"></ion-icon>
                </button>
                {/* Profile Dropdown */}
                {profile && (
                  <div className="absolute top-12 -right-12" id="dropdown">
                    <button
                      className="border-2 border-stroke bg-primaryGrey p-2 rounded-full flex items-center"
                      id="dropdown-button"
                    >
                      <span className="w-[16.6em] px-1 break-words">
                        Welcome {email}
                      </span>
                      <span
                        onClick={handleClick}
                        className={` ${isOpen ? "rotate-180" : "rotate-0"}`}
                      >
                        <svg
                          className="fill-current h-7 w-7"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.657 6.586 4.293 7.95l.707.707L10 13.757z" />
                        </svg>
                      </span>
                    </button>
                    {isOpen && (
                      <div className="absolute top-19 right-0 bg-primaryPink w-[6em]  shadow-md rounded-md ">
                        {/* <ul className="list-none "> */}
                        <button className="flex gap-2 px-2 py-1 h-full w-[6em]">
                          <span>Logout</span>
                          <span className="w-24">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 512 512"
                              // className="text-primaryBlue"
                            >
                              {" "}
                              <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 192 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128zM160 96c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 32C43 32 0 75 0 128L0 384c0 53 43 96 96 96l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l64 0z" />
                            </svg>
                          </span>
                        </button>
                        {/* </ul> */}
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Handle Notification for mobile */}
              <div className="relative">
                <button
                  className="bg-primaryBlue rounded-full w-[2.5em] flex justify-center items-center shadow-xl shadow-primaryBlue h-[2.5em]"
                  onClick={handleNotification}
                >
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

                {notification && (
                  <div className="absolute top-14 right-0">
                    <p>No notification</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Form Url - Mobile view/Laptop */}
          <div className="mt-[5em] lg:mt-0 flex flex-col lg:flex ">
            <Form
              onSubmit={dashboardFormSubmit}
              onFocus={handleInputFocus}
              style={{
                width: "100%",
                maxWidth: "35em",
                marginBottom: "1em",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            />
            <div className="block lg:hidden">
              <p className="text-red-500 text-center mb-3">
                {invalidLink ? "Invalid Link" : ""}
              </p>
              {errorMessage && <p className="text-red-500">{errorMessage}</p>}
              <Spinner isLoading={isLoading} />

              {shortUrl && <ShortLink url={shortUrl} qrCode={qrCode} />}
            </div>
          </div>

          {/* For Laptop */}
          <div className="gap-[1em] lg:flex hidden">
            <div className="relative" id="dropdown">
              <button
                className="border-2 border-stroke bg-primaryGrey p-2 rounded-full flex items-center"
                id="dropdown-button"
              >
                <span className="w-[15em] break-words">Welcome {email}</span>
                <span
                  onClick={handleClick}
                  className={` ${isOpen ? "rotate-180" : "rotate-0"}`}
                >
                  <svg
                    className="fill-current h-7 w-7"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.657 6.586 4.293 7.95l.707.707L10 13.757z" />
                  </svg>
                </span>
              </button>
              {isOpen && (
                <div className="absolute top-19 right-0 bg-primaryPink w-[6em]  shadow-md rounded-md ">
                  {/* <ul className="list-none "> */}
                  <button
                    className="flex gap-2 px-2 py-1 h-full w-[6em] items-center"
                    onClick={logOut}
                  >
                    <span className="w-24">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        // className="text-primaryBlue"
                      >
                        {" "}
                        <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 192 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128zM160 96c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 32C43 32 0 75 0 128L0 384c0 53 43 96 96 96l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l64 0z" />
                      </svg>
                    </span>
                    <span className="font-bold">Logout</span>
                  </button>
                  {/* </ul> */}
                </div>
              )}
            </div>

            <div className="relative ">
              <button
                className="bg-primaryBlue rounded-full w-[3em] flex justify-center items-center shadow-xl shadow-primaryBlue h-[3em]"
                onClick={handleNotification}
              >
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

              {notification && (
                <div className="absolute top-14 right-0">
                  <p>No notification</p>
                </div>
              )}
            </div>
          </div>
        </nav>
      </header>

      {/* Result form  search bar- laptop */}
      <div className="hidden lg:block">
        <p className="text-red-500 text-center mb-4">
          {invalidLink ? "Invalid Link" : ""}
        </p>
        <Spinner isLoading={isLoading} />

        {shortUrl && <ShortLink url={shortUrl} qrCode={qrCode} />}
      </div>

      <div className="overflow-x-auto lg:flex lg:justify-center lg:items-center mt-16 pb-14 p-10 bg-primaryGrey bg-opacity-80 table-container">
        {tabledData && (
          <table className="table-fixed border-collapse shadow-2xl shadow-primaryBlack">
            <thead className="">
              <tr className="bg-primaryBlack shadow-2xl shadow-stroke">
                <th scope="col">Original Link</th>
                <th scope="col">Shortened Link</th>
                <th scope="col">Created At</th>
                <th scope="col">Status</th>
                <th scope="col">Clicks</th>
                {/* <th scope="col">Action</th> */}
              </tr>
            </thead>

            <tbody>
              {tabledData.map((data: any) => {
                return (
                  <tr key={data.id} className="bg-primaryGrey">
                    <td>{data.original_link}</td>
                    <td>{data.shortened_url}</td>
                    <td>{data.created_at_date}</td>
                    <td>{data.status}</td>
                    <td>{data.clicks}</td>
                    {/* <td className="flex border-none justify-center">
                      <button className="text-2xl">
                        <ion-icon name="trash-outline"></ion-icon>
                      </button>
                    </td> */}
                  </tr>
                );
              })}
            </tbody>

            {/* {tabledData &&
              tabledData.map((data: any) => {
                return (
                  <tbody key={data.id}>
                    <tr className="">
                      {/* <table> */}

            {/* <tr> */}
            {/* <td>{data.original_link}</td>
                      <td>{data.shortened_url}</td>
                      <td>{data.created_at_date}</td>
                      <td>{data.status}</td>
                      <td>{data.clicks}</td> */}
            {/* </tr> */}
            {/* </table> */}
            {/* </tr>
                  </tbody>
                );
              })} */}
          </table>
        )}
      </div>
    </section>
  );
};

export default DashboardPage;
