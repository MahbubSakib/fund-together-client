import { Form, NavLink, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
// import { AuthContext } from "../../provider/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { toast } from "react-hot-toast";
import bgImage from "../../assets/bglogin.jpg";
import Navbar from "../../components/layout/Navbar";

const Register = () => {
    const googleProvider = new GoogleAuthProvider();
    // const { createNewUser, setUser, updateUser } = useContext(AuthContext);
    const [error, setError] = useState('')
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = new FormData(e.target);
        const name = form.get('name');
        const email = form.get('email');
        const photo = form.get('photo');
        const password = form.get('password');
        // console.log(name, email, photo, password);

        setError('')

        const regex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        if (!regex.test(password)) {
            setError('Password must have at least 1 upper case, 1 lower case and must have 6 characters long.')
            return
        }
        // createNewUser(email, password)
        //     .then(result => {
        //         const user = result.user;
        //         setUser(user);
        //         updateUser({ displayName: name, photoURL: photo })
        //             .then(() => {
        //                 toast.success('Registration successful!');
        //                 navigate('/')
        //             })
        //     })
        //     .catch((err) => {
        //         setError(err.message)
        //     });
    }
    const handleGoogleLogin = () => {
        signInWithPopup(auth, googleProvider)
            .then(() => {
                toast.success('Registration successful!');
                navigate('/');
            })
            .catch((error) => {
                toast.error('Error during registration: ' + error.message);
            });
    };

    return (
        <div>
            <Navbar></Navbar>
            <div className="min-h-screen" style={{
                backgroundImage: `url(${bgImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}>
                <div className="w-10/12 mx-auto pb-10">
                    <h2 className="text-3xl text-white font-bold text-center py-10">Register</h2>
                    <div className="card bg-base-100 max-w-sm shrink-0 shadow-2xl flex justify-center items-center w-10/12 mx-auto">
                        <form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo-URL</span>
                                </label>
                                <input type="text" name="photo" placeholder="photo-url" className="input input-bordered" required />
                            </div>
                            <div className="form-control relative">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    name="password" placeholder="password" className="input input-bordered" required />
                                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 bottom-4">
                                    {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                                </button>
                            </div>
                            {
                                error && (
                                    <p className="text-sm text-red-500">{error}</p>
                                )
                            }
                            <div className="form-control mt-6">
                                <button type="submit" className="btn bg-blue-700 text-white hover:bg-blue-500">Register</button>
                            </div>
                        </form>
                        <h3 className="mb-5">Or</h3>
                        <div className="mb-5">
                            <button onClick={handleGoogleLogin} className="btn px-7 bg-blue-700 text-white hover:bg-blue-500"><FcGoogle className="text-lg" style={{ backgroundColor: 'white', borderRadius: '20%' }} /> Register with Google</button>
                        </div>
                        <button className="pb-10">
                            Already have an account? <NavLink to={'/login'}><span className="text-blue-800 hover:text-red-500">Login</span></NavLink>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;