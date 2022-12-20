import ListKosong from "../component/ListKosong";
import Navbar from "../component/Navbar";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCampaignData } from "../features/campaignSlice";
import { apicampaign } from "../api";
import { SkeletonListCampaign } from "../component/SkeletonListCampaign";
import Card from "../component/Card";


const GalangDana = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const display = useSelector((state) => state.campaign.campaignData || {});
  const users = useSelector((state) => state.user.data || {});

  const URL = apicampaign;
  const [isLoading, setIsLoading] = useState(true);

  console.log(users);
  console.log(localStorage.getItem("users"));
  console.log(display.data);

  useEffect(() => {
    Promise.resolve(dispatch(getCampaignData(URL))).then((res) => {
      setIsLoading(false);
    });
    backToLogin();
  }, []);

  const backToLogin = () => {
    return <Navigate to="/login" />;
  };

  const handleClick = (event) => {
    return <Navigate to="/buatcampaign" />;
  };

  return (
    <>
      {/* <button onClick={handleClick}></button> */}

      {isLoading == true ? (
        <SkeletonListCampaign />
      ) : display.status == 200 ? (
        display.data.map((item, index) => {
          return (
            <div
              key={index}
              className="container mx-auto flex flex-col gap-5 justify-center mt-10 px-4"
            >
              <Card name={item.tittle} ket={item.isi} />
            </div>
          );
        })
      ) : (
        backToLogin()
      )}
      <div className="container mx-auto flex flex-end mt-28">
        <Link
          className="w-full py-2 rounded-md text-white bg-sky-600 hover:bg-sky-700 text-center"
          to="/buatcampaign"
        >
          Create Campaign
        </Link>
      </div>
    </>
  );
};

export default GalangDana;
