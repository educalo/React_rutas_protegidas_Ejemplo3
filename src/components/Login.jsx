//hook para crear formularios en React
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const { register, handleSubmit } = useForm();

    const navigate = useNavigate();

    const onSubmit = (data) => {
        console.log(data);
        //lo hago a través de localStorage para simplificar, lo ideal seria coger el login de una base de datos
        localStorage.setItem('user', JSON.stringify(data));
        navigate('/about');
    }

    return <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
            <label>Email</label>
            <input type="text" className="form-control" {...register('email')} />
        </div>
        <div className="mb-3">
            <label>Password</label>
            <input type="password" className="form-control" {...register('password')} />
        </div>
        <input type="submit" value="Enviar" />
    </form>
}

export default Login;