import StatusPending from "./StatusPending"
import StatusReject from "./StatusReject"
import StatusVerify from "./StatusVerify"
import { GambarLogin } from "../assets"

const Card = ({ name, ket }) => {
    
    return (
        <>
            <div className="w-full flex flex-col md:flex-row xl:flex-row border border-stone-300 rounded-lg overflow-hidden drop-shadow-xl">
                <img src={GambarLogin} alt="" className="h-48" />
                <div className="flex flex-col justify-between bg-white w-full p-6">
                    <div className="flex justify-between">
                        <h1 className="text-xl font-semibold">{name}</h1>
                        <div>
                            {/* <StatusPending /> */}
                            <StatusReject />
                            {/* <StatusVerify /> */}
                        </div>
                    </div>
                    <p>{ket}</p>
                </div>
            </div>
        </>
    )
}

export default Card