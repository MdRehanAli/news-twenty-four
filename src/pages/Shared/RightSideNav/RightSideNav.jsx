import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import qZone1 from '../../../assets/1.png'
import qZone2 from '../../../assets/2.png'
import qZone3 from '../../../assets/3.png'

const RightSideNav = () => {
    return (
        <div>
            <div className="p-4 space-y-3 mb-6"> 
                <h2>Login With</h2>
                <button className="btn btn-outline w-full">
                Login With
                    <FaGoogle />
                </button>
                <button className="btn btn-outline w-full">
                Login With
                    <FaGithub />
                </button>
            </div>
            <div className="p-4 space-y-3 mb-6"> 
                <h2 className="text-3xl">Find Us On</h2>
                <a href="" className="flex p-4 text-lg items-center border-2 rounded-t-lg">
                    <FaFacebook className="mr-3"></FaFacebook> <span>Facebook</span>
                </a>
                <a href="" className="flex p-4 text-lg items-center border rounded-t-lg">
                    <FaTwitter className="mr-3"></FaTwitter> <span>Twitter</span>
                </a>
                <a href="" className="flex p-4 text-lg items-center border rounded-t-lg">
                    <FaInstagram className="mr-3"></FaInstagram> <span>Instagram</span>
                </a>
            </div>
            <div className="p-4 space-y-3 mb-6"> 
                <h2 className="text-3xl">Q zone</h2>
                <img src={qZone1} alt="" />
                <img src={qZone2} alt="" />
                <img src={qZone3} alt="" />
            </div>
        </div>
    );
};

export default RightSideNav;