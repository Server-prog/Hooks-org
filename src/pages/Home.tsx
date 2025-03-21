import { useNavigate } from "react-router-dom"

function Home () {
    const navigate = useNavigate()

    return (
        <div className="flex flex-col justify-center h-screen -mt-24">

            <div className="flex justify-center">
                <img src="src/assets/hookslogo.png" alt="img" className="w-[150px] h-[150px]" />
            </div>
            <h1 className="text-4xl font-bold text-center mt-10">Hooks na Prática</h1>
            <p className="text-xl text-center mt-5">Aprenda sobre Hooks do React com exemplos práticos</p>
            <div className="flex justify-center items-center gap-2">
                <button className="bg-blue-500 mt-5 px-10 py-3 rounded-3xl  " onClick={() => navigate("/about")}>
                    Começar
                </button>
                <button className="mt-5 px-10 py-3 text-white border rounded-3xl">
                    Veja os exemplos
                </button>
            </div>
            
        </div>
    )
}

export default Home;