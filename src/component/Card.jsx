import StatusPending from "./StatusPending"
import StatusReject from "./StatusReject"
import StatusVerify from "./StatusVerify"
import { GambarLogin } from "../assets"

const Card = () => {
    return (
        <>
            <div className="flex flex-col md:flex-row xl:flex-row border border-stone-300 rounded-lg overflow-hidden drop-shadow-xl">
                <img src={GambarLogin} alt="" className="h-48" />
                <div className="flex flex-col justify-between bg-white w-full p-6">
                    <div className="flex justify-between">
                        <h1 className="text-xl font-semibold">Campaign Name</h1>
                        <div>
                            {/* <StatusPending /> */}
                            {/* <StatusReject /> */}
                            <StatusVerify />
                        </div>
                    </div>
                    <p>Lorem Ipsum</p>
                </div>
            </div>
        </>
    )
}

export default Card