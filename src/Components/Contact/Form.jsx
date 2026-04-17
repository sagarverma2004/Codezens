import recaptchaicon from "./img/recaptchaicon.png";
import { IoIosArrowRoundForward } from "react-icons/io";

function Form() {
    return (
        <section className="py-16 bg-[#F5F5F5] px-4 sm:px-6 md:px-10">
            <div className="max-w-5xl mx-auto">

                {/* Heading */}
                <div className="leading-8 text-center">
                    <h1 className="text-3xl sm:text-4xl md:text-6xl">
                        Send Us a Message
                    </h1>
                    <p className="text-[#555555] mt-2 text-sm sm:text-base">
                        Just fill out the form below and we'll get back to you shortly
                    </p>
                </div>

                {/* Form */}
                <form className="flex flex-col gap-5 mt-12 md:mt-16">

                    {/* Row 1 */}
                    <div className="flex flex-col gap-4 md:flex-row md:gap-6">
                        <input
                            type="text"
                            placeholder="First name*"
                            className="px-4 py-3 border border-[#555555] bg-white rounded-md w-full outline-none"
                        />
                        <input
                            type="text"
                            placeholder="Last name*"
                            className="px-4 py-3 border border-[#555555] bg-white rounded-md w-full outline-none"
                        />
                    </div>

                    {/* Row 2 */}
                    <div className="flex flex-col gap-4 md:flex-row md:gap-6">
                        <input
                            type="email"
                            placeholder="Email*"
                            className="px-4 py-3 border border-[#555555] bg-white rounded-md w-full outline-none"
                        />
                        <input
                            type="tel"
                            placeholder="Phone number*"
                            className="px-4 py-3 border border-[#555555] bg-white rounded-md w-full outline-none"
                        />
                    </div>

                    {/* Row 3 */}
                    <div className="flex flex-col gap-4 md:flex-row md:gap-6">
                        <input
                            type="text"
                            placeholder="Address*"
                            className="px-4 py-3 border border-[#555555] bg-white rounded-md w-full outline-none"
                        />
                        <input
                            type="text"
                            placeholder="Select your service*"
                            className="px-4 py-3 border border-[#555555] bg-white rounded-md w-full outline-none"
                        />
                    </div>

                    {/* Message */}
                    <div>
                        <textarea
                            placeholder="Write your message*"
                            className="px-4 py-3 border border-[#555555] bg-white rounded-md w-full min-h-30 md:min-h-40 outline-none"
                        ></textarea>

                        {/* Info */}
                        <div className="flex flex-col sm:flex-row justify-between text-[#555555] text-xs sm:text-sm mt-2 gap-2">
                            <p>0 to 30 max character</p>
                            <p>All fields marked with * are required.</p>
                        </div>
                    </div>

                    {/* CAPTCHA */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mt-4 text-[#555555] text-sm">
                        <p>please complete the CAPTCHA</p>

                        <div className="flex items-center justify-between border border-[#FFCD00] bg-[#FBF5D9] py-2 px-4 w-full md:w-80 rounded-md">
                            <label className="flex items-center gap-2">
                                <input type="checkbox" className="size-4" />
                                i am not a robot
                            </label>
                            <img src={recaptchaicon} alt="captcha" className="w-6" />
                        </div>
                    </div>

                    {/* Button */}
                    <div className="flex justify-center mt-10">
                        <button className="flex items-center gap-2 px-6 py-3 bg-[#FFCD00] font-semibold rounded-md hover:scale-105 transition">
                            Contact Us
                            <IoIosArrowRoundForward className="text-xl" />
                        </button>
                    </div>

                </form>
            </div>
        </section>
    );
}

export default Form;
