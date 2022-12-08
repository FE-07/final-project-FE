import icongmail from "../assets/icongmail.png";
import icontele from "../assets/icontele.png";


function Footer() {
  return (
    <>
      <div className="container mx-auto flex flex-col justify-between p-16 h-full my-5 rounded ">
        <div className="border-2 rounded p-5">
          <h1 className="text-second-color text-center text-3xl">Contact us</h1>
          <p className="text-center mb-10 text-xl">
            Mengalami masalah atau kendala? atau mau mengirim saran dan masukan?
            hubungi kami ya!
          </p>
          <div className="flex flex-row ">
            <div className="container">
            <p className="my-5 font-bold">kamu juga bisa menghubungi kami disini</p>
              <div className="flex flex-row">
                <img className="h-10" src={icongmail} />
                <p className="my-2 ml-5">ayobantu!@ayobantu.com</p>
              </div>
              <p className="my-5 font-bold">Hi kami di tele juga lho</p>
              <div className="flex flex-row">
                <img className="h-10" src={icontele} />
                <p className="my-2 ml-5">@ayobantu!</p>
              </div>
              <p className="my-5 font-bold">kantor kami!</p>
            </div>
            <div className="flex flex-col">
              <label>Email kamu</label>
              <input
                className="outline-none bg-slate-100 border border-slate-200 pr-48 pl-2 py-2 my-2 mb-5 mr-16  rounded"
                type="email"
                placeholder="nama@ayobantu.com"
              />
              <label>subjek</label>
              <input
                className="outline-none bg-slate-100 border border-slate-200 pr-36 pl-2 py-2 my-2 mb-5 mr-16 rounded"
                type="text"
                placeholder="beri tahu kami apa keperluanmu"
              />
              <label>Pesanmu</label>
              <input
                className="outline-none bg-slate-100 border border-slate-200 pr-36 pl-2 pb-28 my-2 mb-5 mr-16 rounded"
                type="text"
                placeholder="tuliskan pesanmu"
              />
              <button className="bg-main-color my-5 py-2 mr-16 rounded text-white">Send message</button>
            </div>
          </div>
          ©2022 AYobantu!
        </div>
      </div>
    </>
  );
}

export default Footer;
