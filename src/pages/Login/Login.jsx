import { GoogleAuthProvider, sendPasswordResetEmail, signInWithPopup } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { toast } from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import bgImage from "../../assets/bglogin.jpg";
import Navbar from "../../components/layout/Navbar";

const Login = () => {
    const googleProvider = new GoogleAuthProvider();
    const { login, setUser } = useContext(AuthContext);
    const [error, setError] = useState('');
    const location = useLocation();
    const navigate = useNavigate();
    const emailRef = useRef();
    console.log(location);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(emailRef.current.value);
        setError('')
        login(email, password)
            .then(result => {
                const user = result.user;
                setUser(user);
                navigate(location?.state ? location.state : '/')
            })
            .catch((err) => {
                // console.log(err.message);
                setError(err.message)
            });
    }



    const handleGoogleLogin = () => {
        signInWithPopup(auth, googleProvider)
            .then(result =>
                navigate(location?.state ? location.state : '/')
            ).catch((err) => {
                // console.log(err.message);
                setError(err.message)
            });
    }

    return (
        <div>
            <Navbar></Navbar>
            <div className="min-h-screen" style={{
                backgroundImage: `url(${bgImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}>
                <div className="w-10/12 mx-auto pb-10">
                    <h2 className="text-3xl text-white font-bold text-center py-10">Login</h2>
                    <div className="card bg-base-100 max-w-sm shrink-0 shadow-2xl flex justify-center items-center w-10/12 mx-auto">
                        <form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" ref={emailRef} placeholder="email" className="input input-bordered" required />
                                {/* <input type="email" name="email" placeholder="email" className="input input-bordered" required /> */}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <NavLink
                                        to="/forgot-password"
                                        state={{ email: emailRef.current?.value || "" }} // Pass email as state
                                        className="label-text-alt link link-hover"
                                    >
                                        Forgot password?
                                    </NavLink>
                                </label>


                                {
                                    error && (
                                        <p className="text-sm text-red-500">{error}</p>
                                    )
                                }
                            </div>
                            <div className="form-control mt-6">
                                <button type="submit" className="btn bg-blue-700 text-white hover:bg-blue-500">Login</button>
                            </div>
                            <h3 className=" text-center">Or</h3>

                            <div className="mb-5">
                                <button type="button" onClick={handleGoogleLogin} className="btn px-16 bg-blue-700 text-white hover:bg-blue-500"><FcGoogle className="text-lg" style={{ backgroundColor: 'white', borderRadius: '10%' }} /> Sign in with Google</button>
                            </div>
                        </form>
                        <button className="pb-3">
                            Don't have an account? <NavLink to={'/register'}><span className="text-blue-800 hover:text-red-500">Register</span></NavLink>
                        </button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;