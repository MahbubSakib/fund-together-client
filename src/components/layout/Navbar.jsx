import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { Tooltip } from 'react-tooltip'

const Navbar = () => {
    const { user, logout } = useContext(AuthContext)
    console.log(user);
    return (
        <div className="bg-blue-300">
            <div className="navbar w-11/12 mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[10] mt-3 w-52 p-2 shadow"
                            style={{ zIndex: 10 }}
                        >
                            <li><NavLink to={'/'}>Home</NavLink></li>
                            <li><NavLink to={'/allCampaign'}>All Campaign</NavLink></li>
                            <li><NavLink to={'/addNewCampaign'}>Add New Campaign</NavLink></li>
                            <li><NavLink to={'/myCampaigns'}>My Campaign</NavLink></li>
                            <li><NavLink to={'/myDonations'}>My Donations</NavLink></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-3xl">FundTogether</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><NavLink to={'/'}>Home</NavLink></li>
                        <li><NavLink to={'/allCampaign'}>All Campaign</NavLink></li>
                        <li><NavLink to={'/addNewCampaign'}>Add New Campaign</NavLink></li>
                        <li><NavLink to={'/myCampaigns'}>My Campaign</NavLink></li>
                        <li><NavLink to={'/myDonations'}>My Donations</NavLink></li>
                    </ul>
                </div>
                <div className="navbar-end space-x-2">
                    {/* <a id="clickable">◕‿‿◕</a>
                    <Tooltip anchorSelect="#clickable" clickable>
                        <button style={{ zIndex: 100 }} onClick={logout}>Logout</button>
                    </Tooltip> */}

                    {
                        user && user?.email ?
                            <h4 className="text-xl mr-2 md:mr-5 relative">
                                <a id="clickable">
                                    <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-blue-500 hover:shadow-lg">
                                        <img className="w-full h-full object-cover" src={user.photoURL || "https://via.placeholder.com/150"} alt="User" />
                                    </div>
                                </a>
                                <Tooltip
                                    style={{
                                        zIndex: 100,
                                        padding: "0.75rem",
                                        backgroundColor: "#ffffff",
                                        borderRadius: "0.5rem",
                                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                                        color: "#333",
                                        textAlign: "center",
                                    }}
                                    anchorSelect="#clickable"
                                    clickable
                                >
                                    <h5 className="text-lg font-semibold mb-2 text-gray-800">{user.displayName}</h5>
                                    <button
                                        className="bg-red-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-red-600 transition-colors"
                                        onClick={logout}
                                    >
                                        Logout
                                    </button>
                                </Tooltip>
                            </h4>
                            :
                            <div>
                                <Link to={'/login'} className="btn mr-3">Login</Link>
                                <Link to={'/register'} className="btn">Register</Link>
                            </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;