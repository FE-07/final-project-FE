import Button from "./Button"
import { NotFoundImg } from "../assets"

const ListKosong = () => {
    return (
        <>
            <div className="flex items-center justify-center mt-10">
                <div className="flex flex-col gap-2">
                    <img src={NotFoundImg} alt="" className="w-full" />
                    <h3>Kamu belum membuat campaign apapun.</h3>
                    <Button
                        name="Buat Campaign"
                        bgcolor="bg-sky-600"
                        hover="hover:bg-sky-700"
                    />
                </div>
            </div>
        </>
    )
}

export default ListKosong