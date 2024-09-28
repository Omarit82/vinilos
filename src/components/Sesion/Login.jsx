import { useContext } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../../context/UserContext";
import { Link } from "react-router-dom";


export const Login = () => {
    const {register, handleSubmit} = useForm();
    const { handleLogin, error, handleLogout, user} = useContext(UserContext);

    //(Object.keys(user).length > 0) && handleLogout()  
   
    return(
        <main>        
            <div className="tarjeta justify-content-start p-5">
                <h2 className="text-center">Login</h2>
                <form  onSubmit={handleSubmit(handleLogin)}  className="d-flex justify-content-center align-items-center flex-column" >
                    <input {...register("email")} name="email" placeholder="..Ingrese su email.." className="m-2 text-center" />
                    <input {...register("password")} name="password" type="password" placeholder="..Ingrese su password.." className="mb-2 text-center"/>
                    <button type="submit" className="btn btn-info">Login</button>
                    {(error !== '') && <p className="text-center">{error}</p>}
                    <p className="mt-5"> Aun no tiene usuario?.. </p>
                    <Link to={'/registro'} className="registro text-center">Click aqui</Link>
                </form>
            </div>
        </main>
    )
}