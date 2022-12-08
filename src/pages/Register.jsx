import axios from "axios";
import { apiusers} from "../api";
import Checkbox from "../component/Checkbox";
import Button from "../component/Button";
import banner from "../assets/bannerDaftar.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';


function Register() {
  const navigate = useNavigate();
  const [nama, setNama] = useState("");
  const [ttl, setTtl] = useState("");
  const [telp, setTelp] = useState("");
  const [email, setEmail] = useState("");
  const [alamat, setAlamat] = useState("");
  const [uname, setUname] = useState("");
  const [pass, setPass] = useState("");

  // const users = {
  //   nama: nama,
  //   ttl: ttl,
  //   telp: telp,
  //   phone: email,
  //   alamat: alamat,
  //   email: email,
  //   username: uname,
  //   password: pass,
  // };

  async function RegisUser(nama, ttl, telp, email, alamat, uname, pass) {
    let res = await axios.post(`${apiusers}`, {
      nama: nama,
      ttl: ttl,
      phone: telp,
      alamat: alamat,
      email: email,
      username: uname,
      password: pass,
    });
    console.log(res);

    if (res.statusText == "Created") {
      alert('Yeyy sukses')
      navigate('/login')
    }
  }
  // console.log(res.data)

  // const
  // console.log(useSelector((store) => {console.log(store)}))

  // const handleChange = (event) => {
  //   const name = event.target.name;
  //   const value = event.target.value;
  //   setUsers((values) => ({ ...values, [name]: value }));
  // };

  const submitForm = (evt) => {
    evt.preventDefault();
    // RegisUser(users);
    RegisUser(nama, ttl, telp, email, alamat, uname, pass);
    console.log("Anda sudah submit");
  };

  // const handleNama = (e) => {
  //   setNama(e.target.value);
  // }

  return (
    <>
      <div className="container mx-auto lg:my-10 my-5 px-5">
        <img className="w-full rounded-md" src={banner} alt="" />
        <p className="lg:text-4xl text-2xl font-bold text-sky-600 lg:my-5 my-3">
          Daftar
        </p>

        <div className="flex gap-5 mb-3">
          <Checkbox name={"Partner/Donatur"} />
          <Checkbox name={"Penggalang Dana"} />
        </div>

        <form action="" onSubmit={submitForm}>
          <div className="flex flex-col lg:flex-row gap-5 justify-between">
            <div className="basis-1/2">
              <div className="flex flex-col gap-5">
                <label>Masukan nama lengkap</label>
                <input
                  className="outline-none bg-slate-100 border border-slate-200 px-3 py-2"
                  type="text"
                  placeholder="masukan nama lengkap"
                  value={nama}
                  onChange={(e) => setNama(e.target.value)}
                />

                <label>Tanggal Lahir</label>
                <input
                  className="outline-none bg-slate-100 border border-slate-200 px-3 py-2"
                  type="date"
                  placeholder="masukan nama lengkap"
                  value={ttl}
                  onChange={(e) => setTtl(e.target.value)}
                />

                <label>No Telepon</label>
                <input
                  className="outline-none bg-slate-100 border border-slate-200 px-3 py-2"
                  type="text"
                  placeholder="masukan nomor telepon"
                  value={telp}
                  onChange={(e) => setTelp(e.target.value)}
                />
                <label>Email</label>
                <input
                  className="outline-none bg-slate-100 border border-slate-200 px-3 py-2"
                  type="email"
                  placeholder="masukan email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label>Alamat</label>
                <input
                  className="outline-none bg-slate-100 border border-slate-200 px-3 py-2"
                  type="text"
                  placeholder="masukan Alamat lengkap"
                  value={alamat}
                  onChange={(e) => setAlamat(e.target.value)}
                />
                <label>Username</label>
                <input
                  className="outline-none bg-slate-100 border border-slate-200 px-3 py-2"
                  type="text"
                  placeholder="masukkan username"
                  value={uname}
                  onChange={(e) => setUname(e.target.value)}
                />

                <label>Password</label>
                <input
                  className="outline-none bg-slate-100 border border-slate-200 px-3 py-2"
                  type="password"
                  placeholder="masukkan passwoed"
                  value={pass}
                  onChange={(e) => setPass(e.target.value)}
                />
              </div>
            </div>

            <div className="lg:relative basis-1/4">
              {/* <div className="flex flex-col gap-3 mb-5">
                <InputText
                  name={"Berkas 1"}
                  type={"text"}
                  placeholder={"masukkan data"}
                />
                <Button name="Upload Berkas" bgcolor="bg-sky-600" />
              </div>
              <div className="flex flex-col gap-3">
                <InputText
                  name={"Berkas 1"}
                  type={"text"}
                  placeholder={"masukkan data"}
                />
                <Button name="Upload Berkas" bgcolor="bg-sky-600" />
              </div> */}
              <div className="lg:absolute lg:bottom-0 w-full my-5 lg:my-0">
                <Button name="Register" bgcolor="bg-teal-600" />
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Register;
