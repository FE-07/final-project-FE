import StatusVerify from "../component/StatusVerify";
import upFoto from "../assets/upload-foto.png";

function ListCampaign() {
  return (
    <>
      {/* Filter */}
      <div className="container mx-auto  bg-white">
        <div className="com-filter  flex flex-row my-5 ">
          <div className="mx-2 my-5 border border-stone-300 rounded-lg p-1 px-5">Kesehatan</div>
          <div className="mx-1 my-5 border border-stone-300 p-1 px-5 rounded-lg">Modal Usaha</div>
          <div className="mx-2 my-5 border border-stone-300 p-1 px-5 rounded-lg">Pendidikan</div>
        </div>
        {/* Filter */}
        <div className="flex flex-col my-5 mx-5">
          <h2 className="leading-loose text-2xl font-bold  ">List</h2>
          {/* //card */}
          <div className="card flex flex-col md:flex-row justify-between border border-stone-300 rounded-sm mt-5 py-5 lg:flex-row sm:flex-col">
            <h1 className="mx-5 py-1 font-bold text-2xl">Campaign name</h1>
            <div className="flex mt-10">
              <button className="mx-3 border rounded-md py-2 px-20 bg-succes-color text-white sm:px-28">
                Setujui
              </button>
              <button className="mx-2 border rounded-md py-2 px-20 bg-text-first text-white sm:px-28">
                View
              </button>
            </div>
          </div>
          {/* //card end */}
          {/* //card */}
          <div className="card flex flex-col md:flex-row justify-between border border-stone-300 rounded-sm mt-5 py-5 lg:flex-row sm:flex-col">
            <h1 className="mx-5 py-1 font-bold text-2xl">Campaign name</h1>
            <div className="flex mt-10">
              <button className="mx-3 border rounded-md py-2 px-20 bg-succes-color text-white sm:px-28">
                Setujui
              </button>
              <button className="mx-2 border rounded-md py-2 px-20 bg-text-first text-white sm:px-28">
                View
              </button>
            </div>
          </div>
          {/* //card end */}
          {/* card detil */}
          <div className="card-detil flex flex-col border border-stone-300 rounded-sm mt-5 py-5">
            <h1 className="mx-5 py-1 font-bold text-2xl">Campaign name</h1>
            <div className="flex justify-start lg:flex-row flex-col">
              <img className="my-2 mx-5 " src={upFoto} />
              <div className="flex flex-col">
                <h1 className="mx-5 py-1">Category</h1>
                <p className="mx-5 py-1 mt-10 md:mt-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  maximus elit ex, nec tincidunt justo pretium et. Cras
                  porttitor volutpat dui, ut gravida ante ultrices in. Nunc in
                  dui justo. Suspendisse libero nisi, varius et diam ut, sodales
                  sollicitudin magna. Ut nec rhoncus metus. Vivamus lorem erat,
                  pretium vitae faucibus et, vulputate non velit. Integer at
                  porta elit, sit amet sollicitudin enim. Maecenas a purus
                  ornare tortor maximus tristique.
                </p>
                <div className="flex mt-10 ">
                  <button className="mx-3 border rounded-md py-2 px-20 bg-succes-color text-white sm:px-28">
                    Setujui
                  </button>
                  <button className="mx-2 border rounded-md py-2 px-20 bg-alert-color text-white sm:px-28">
                    Tolak
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* card detil end */}
        </div>
      </div>
    </>
  );
}

export default ListCampaign;
