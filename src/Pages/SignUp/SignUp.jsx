import { Link } from "react-router-dom";
import loginImg from "../../assets/images/login/login.svg";
import { AuthContext } from "../../Providers/AuthProvider";
import { useContext } from "react";

const SignUp = () => {
    const {createUser} =useContext(AuthContext)


    const handleSignup=(event)=>{
   
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name,email,password);

        createUser(email,password)
        .then(result  =>{
            const user = result.user;
            console.log(user);
        })
        .catch(error =>console.log(error))
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
  
              <form onSubmit={handleSignup}>

                
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    className="input input-bordered"
                  />
                </div>

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
                    value="Signup"
                  />
                </div>               
              </form>


              <small className="text-center">Already have an account <span className="text-orange-500"><Link to="/login">Login</Link></span></small>
            </div>
          </div>
        </div>
      </div>
    );
};

export default SignUp;