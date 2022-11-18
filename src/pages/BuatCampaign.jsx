import Card from "../component/Card"
import { ImgDefault } from "../assets"

const BuatCampaign = () => {
    return (
        <>
            <div className="container mx-auto px-4 mt-6 mb-20">
                <h2 className="text-xl font-semibold">Buat Campaign</h2>
                <div className="flex flex-col lg:flex-row justify-between gap-5 mt-8">
                    <div className="lg:w-1/4">
                        <img src={ImgDefault} alt="" className="lg:w-full" />
                    </div>
                    <div className="lg:w-1/2">
                        <form action="" className="flex flex-col gap-4 lg:w-3/4">
                            <label htmlFor="Name">Nama Campaign</label>
                            <input className="outline-none bg-slate-100 border border-slate-200 px-3 py-2" type="text" placeholder="Masukan nama Campaign" />
                            <label htmlFor="Kategori">Kategori</label>

                            {/* input type checkbox */}
                            <div className="flex gap-4 mb-3">
                                <div className="flex gap-2">
                                    <input type="radio" name="" id="" />
                                    <label htmlFor="">Pendidikan</label>
                                </div>
                                <div className="flex gap-2">
                                    <input type="radio" name="" id="" />
                                    <label htmlFor="">Kesehatan</label>
                                </div>
                                <div className="flex gap-2">
                                    <input type="radio" name="" id="" />
                                    <label htmlFor="">Modal Usaha</label>
                                </div>
                            </div>

                            <label htmlFor="Deskripsi">Deskripsi</label>
                            <textarea className="outline-none bg-slate-100 border border-slate-200 px-3 py-2" name="" id="" cols="40" rows="6" placeholder="Masukan Deskripsi"></textarea>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BuatCampaign

