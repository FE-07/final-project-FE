import Card from "../component/Card";
import { ImgDefault } from "../assets";
import Button from "../component/Button";
import InputText from "../component/InputText";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { apicampaign } from "../api";
import axios from "axios";
import { Navigate } from "react-router-dom";




const BuatCampaign = () => {
const[namaCampaign, setNamaCampaign] = useState('');
const[deskripsi, setDeskripsi] = useState('');
const[user,setUser] = useState('');
const[cat, setCat] = useState('healthy')


useEffect(() => {
  setUser(localStorage.getItem('users'))
},[]);

async function Upcampaign(namaCampaign, deskripsi, user,cat) {
  let date = new Date().toLocaleString();
  let res = await axios.post(`${apicampaign}`, {
    createdAt: date,
    tittle: namaCampaign,
    isi: deskripsi,
    user:user,
    Category:cat,
  });
  console.log(res);

  if (res.statusText == "Created") {
    alert('Yeyy succes create a campaign')
    
  }
}

const submitForm = (evt) => {
  evt.preventDefault();
  Upcampaign(namaCampaign, deskripsi, user,cat);
  console.log("Anda sudah submit");
};
0

  return (
    <>
      <div className="container mx-auto px-4 mt-6 mb-20">
        <h2 className="text-xl font-semibold">Create Campaign</h2>
        <div className="flex flex-col lg:flex-row justify-between gap-5 mt-8">
          <div className="lg:w-1/4">
            <img src={ImgDefault} alt="" className="lg:w-full" />
          </div>
          <div className="lg:w-1/2">
            <form onSubmit={submitForm} className="flex flex-col gap-4 lg:w-3/4">
              <label htmlFor="Name">Campaign Name</label>
              <input
                  className="outline-none bg-slate-100 border border-slate-200 px-3 py-2"
                  type="text"
                  placeholder="Isi judul campaign anda"
                  value={namaCampaign}
                  onChange={(e) => setNamaCampaign(e.target.value)}
                />
              <label htmlFor="Kategori">Category</label>

              {/* input type checkbox */}
              <div className="flex gap-4 mb-3">
                <div className="flex gap-2">
                  <input checked={setCat == "education"} type="radio" name="" id="" value="Education" />
                  <label htmlFor="">Education</label>
                </div>
                <div className="flex gap-2">
                  <input checked={setCat == "Healthy"} type="radio" name="" id="" value="Healthy"/>
                  <label htmlFor="">Healthy</label>
                </div>
                <div className="flex gap-2">
                  <input checked={setCat == "Startup Capital"} type="radio" name="" id="" value="Startup Capital"/>
                  <label htmlFor="">Startup Capital</label>
                </div>
              </div>

              <label htmlFor="Deskripsi">Description</label>
              <textarea
                className="outline-none bg-slate-100 border border-slate-200 px-3 py-2"
                name=""
                id=""
                cols="40"
                value={deskripsi}
                onChange={(e) => setDeskripsi(e.target.value)}
                rows="6"
                placeholder="Masukan Deskripsi"
              ></textarea>
              <Button
                name="Publikasi"
                bgcolor="bg-sky-600"
                hover="hover:bg-sky-700"
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default BuatCampaign;
