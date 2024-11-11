import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const ContactNav = () => {
    return (
        <div className="bg-[#263B3C] p-8">
            <div className="flex justify-between max-w-[80%] mx-auto text-white font-playfair-normal">
                <div className="flex gap-20">
                    <p className="flex items-center gap-1"><MdEmail className="text-2xl" />zena@sojournmotherandchild.com</p>
                    <p className="flex items-center gap-1"><FaPhoneAlt className="text-xl" />1300 362 586</p>
                </div>
                <div>
                    <p className="flex items-center gap-1"> FOLLOW US <FaInstagram className="text-2xl" />
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ContactNav;