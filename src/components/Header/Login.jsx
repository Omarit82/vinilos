import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "@firebase/auth";
import { auth } from "../../firebase/config";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";

export const Login = () => {
    const {register, handleSubmit} = useForm();
    const [ error, setError ] = useState('');

    const handleRegister = (data) =>{
        console.log(data.emailReg);
        createUserWithEmailAndPassword(auth,data.emailReg, data.passwordReg)
        .then((userInfo) => {
            const user = userInfo.user;
            console.log(user);
        })
        .catch((error) => {
           
            console.error(error);
        })
    }
    
    const handleLogin = (data) => {
        signInWithEmailAndPassword(auth, data.email, data.password)
        .then((user)=>{
            console.log("Usuario logueado: "+user);
        })
        .catch((error)=> {
            setError("error");
            console.error("Error en el incio de sesion!!"+error);
        })
    }

    return(
        <main>
            <div className="tarjeta justify-content-start p-5">
                <h2 className="text-center">Registro</h2>
                <form  onSubmit={handleSubmit(handleRegister)}  className="d-flex justify-content-center align-items-center flex-column" >
                    <input {...register("emailReg")} name="emailReg" placeholder="..Ingrese su email.." className="m-2 text-center" />
                    <input {...register("passwordReg")} name="passwordReg" type="password" placeholder="..Ingrese su password.." className="mb-2 text-center"/>
                    <button type="submit" className="btn btn-info">Registrate!</button>
                </form>
            </div>
            <div className="tarjeta justify-content-start p-5">
                <h2 className="text-center">Login</h2>
                <form  onSubmit={handleSubmit(handleLogin)}  className="d-flex justify-content-center align-items-center flex-column" >
                    <input {...register("email")} name="email" placeholder="..Ingrese su email.." className="m-2 text-center" />
                    <input {...register("password")} name="password" type="password" placeholder="..Ingrese su password.." className="mb-2 text-center"/>
                    <button type="submit" className="btn btn-info">Login</button>
                    {(error !== '') && <p>Error al loguear</p>}
                </form>
            </div>
        </main>
    )
}