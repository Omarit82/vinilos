import disco from "./assets/img/disco.png"

export const Loader = ()  => {
    

    return(
        <main>
            <div className="d-flex flex-column justify-content-start align-items-center vh-100">
                <h2>Loading...</h2>
                <img src={disco} alt="spinner disco" />
            </div>
        </main>
    )
}