
import { NotFoundImg } from "../assets"
import { Link } from "react-router-dom"

const ListKosong = () => {

    return (
        <>
            <div className="flex items-center justify-center mt-10">
                <div className="flex flex-col gap-2">
                    <img src={NotFoundImg} alt="" className="w-full" />
                    <h3>Kamu belum membuat campaign apapun.</h3>
                    <Link
                        className="w-full py-2 rounded-md text-white bg-sky-600 hover:bg-sky-700 text-center"
                        to='/buatcampaign'>Buat Campaign</Link>
                </div>
            </div>
        </>
    )
}

export default ListKosong