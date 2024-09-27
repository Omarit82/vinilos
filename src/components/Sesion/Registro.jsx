import { useContext } from "react"
import { UserContext } from "../../context/UserContext"
import { useForm } from "react-hook-form";


export const Registro = () => {
    const { handleRegister, error } = useContext(UserContext);
    const { register, handleSubmit } = useForm();

    return (
        <main>
            <div className="tarjeta justify-content-start p-5">
                <h2 className="text-center">Registro</h2>
                <form  onSubmit={handleSubmit(handleRegister)}  className="d-flex justify-content-center align-items-center flex-column" >
                    <input {...register("email")} name="email" placeholder="..Ingrese su email.." className="m-2 text-center" />
                    <input {...register("userName")} name="userName" placeholder="..Nombre de Usuario.." className="m-2 text-center" />
                    <input {...register("password")} name="password" type="password" placeholder="..Ingrese su password.." className="m-2 text-center"/>
                    <button type="submit" className="btn btn-info">Login</button>
                    {(error !== '') && <p>Error al loguear</p>}
                </form>
            </div>
        </main>
    )
}