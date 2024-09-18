import DiscoImg from "../assets/img/disco.png";

export const Loader = ()  => {

    return(
        <main>
            <div className="d-flex flex-column justify-content-start align-items-center vh-100">
                <img src={ DiscoImg } alt="disco"  className="disco m-3" />
                <h2>Loading...</h2>
            </div>
        </main>
    )
}