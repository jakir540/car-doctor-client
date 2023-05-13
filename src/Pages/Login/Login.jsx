import { Link, useLocation, useNavigate } from "react-router-dom";
import loginImg from "../../assets/images/login/login.svg";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import SocialLogin from "../SharedPage/SocialLogin/SocialLogin";


const Login = () => {
    const {signIn}= useContext(AuthContext);
  const location = useLocation();
  const Navigate = useNavigate()
  


  const from = location.state?.from?.pathname || "/"
  console.log(from);


    const handleLogin=(event)=>{
        event.preventDefault();
        console.log('skfdasf;ldjasfkljsdafljsfla');
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name,email,password);

        signIn(email,password)
        .then(result  =>{
          const loggedUser = result.user;
          const loggedEmail ={
            email: loggedUser.email
          } 
          console.log(loggedUser);

          //post and receve token
          fetch('http://localhost:5000/jwt',{
            method:"POST",
            headers:{
              'content-type':'application/json'
            },
            body:JSON.stringify(loggedEmail)
          })
          .then(res => res.json())
          .then( data => {
            console.log("jwt token",data);
            localStorage.setItem('car-access-token',data.token)
            Navigate(from, {replace:true}) 
          })









        })
        .catch(error => console.log(error))

    }
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className=" mr-16 w-1/2">
          <img src={loginImg} alt="" />
        </div>
        <div className=" w-1/2  card flex-shrink-0  max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <h1 className="text-5xl font-bold">Login now!</h1>

            <form onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Login"
                />
              </div>
            </form>
            <small className="text-center">New To Cars Doctors <span className="text-orange-500"><Link to="/signup">Sign up</Link></span></small>
          </div>
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </div>
  );
};

export default Login;
