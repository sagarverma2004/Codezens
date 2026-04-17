// import { Link } from "react-router-dom"
import { useNavigate, useLocation } from "react-router-dom"

function DetailedServices() {

    const navigate = useNavigate()
    const location = useLocation()

    const goBack = () => {

        const from = location.state?.from

        if (from === "home-services") {
            navigate("/", {
                state: { from: "home-services" }
            })
        }
        else if (from === "services-page") {
            navigate("/service", {
                state: { from: "services-page" }
            })
        }
        else {
            // fallback
            navigate("/")
        }
    }


    return (
        <>
            <section className="py-28 bg-linear-to-b from-white to-gray-50">
                <div className="max-w-7xl mx-auto px-6">

                    <div className="grid md:grid-cols-3 gap-10">

                        {/* Card 1 */}
                        <div className="group p-10 bg-white border border-gray-200 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                            <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl mb-6 flex items-center justify-center text-3xl group-hover:bg-blue-100 transition">
                                🚀
                            </div>
                            <h3 className="text-2xl font-semibold mb-3">Custom Web Apps</h3>
                            <p className="text-gray-500 leading-relaxed">
                                Create scalable apps by converting complex logic into simple frontend
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="group p-10 bg-white border border-gray-200 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                            <div className="w-16 h-16 bg-green-50 text-green-600 rounded-2xl mb-6 flex items-center justify-center text-3xl group-hover:bg-green-100 transition">
                                ⚡
                            </div>
                            <h3 className="text-2xl font-semibold mb-3">Speed Optimization</h3>
                            <p className="text-gray-500 leading-relaxed">
                                Optimizing your website's loading speed for better ranking.
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className="group p-10 bg-white border border-gray-200 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                            <div className="w-16 h-16 bg-purple-50 text-purple-600 rounded-2xl mb-6 flex items-center justify-center text-3xl group-hover:bg-purple-100 transition">
                                📱
                            </div>
                            <h3 className="text-2xl font-semibold mb-3">Responsive Design</h3>
                            <p className="text-gray-500 leading-relaxed">
                                Layouts that look perfect on every screen size, from mobile to desktop.
                            </p>
                        </div>

                    </div>

                    <div className='flex items-center justify-center mt-24'>
                        <button
                            onClick={goBack}
                            className="px-6 py-3 rounded-xl bg-black text-white font-medium hover:bg-gray-800 transition shadow-md"
                        >
                            ← Back
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default DetailedServices
