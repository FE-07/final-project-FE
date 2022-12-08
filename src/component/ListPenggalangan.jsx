import { useDispatch } from "react-redux";
import Card from "./Card";
import { apicampaign } from "../api";
import { getCampaignData } from "../features/campaignSlice";
import { useEffect } from "react";
import { useState } from "react";
import { SkeletonListCampaign } from "./SkeletonListCampaign";

const ListPenggalangan = () => {
  const dispatch = useDispatch();
  const URL = apicampaign;
  const [isLoading, setIsLoading] = useState(false);
  const [dataCam, setDataCam] = useState({}); 
  const Display = dataCam.data

  useEffect(() => {
    Promise.resolve(dispatch(getCampaignData(URL)))
    .then((res) => {
      setDataCam(res.payload);
      setIsLoading(true);
    });
  }, []);

  return (
    <>
      {isLoading == false ? 
      <SkeletonListCampaign/>
      :
      Display.status !== 200
        ?Display.map((item,index) =>{
          return(
              <div key={index} className="container mx-auto flex flex-col gap-5 justify-center mt-10 px-4">
              <Card
                name={item.tittle}
                ket={item.isi}
              />
            </div>
          )})
         :
         <div>kosong</div>
      }
    </>
  );
};

export default ListPenggalangan;
