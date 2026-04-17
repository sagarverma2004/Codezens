import LineBackground from "../Homes/img/LineBackground.png"

function QaTestingHero() {
    return (
        <>
            <section className='relative'>
                <img
                    src={LineBackground}
                    alt=""
                    className="object-cover w-full overflow-hidden h-80 md:h-120" />
                <div className="absolute inset-0 flex flex-col items-center justify-center mx-auto text-center max-w-198 ">
                    <p className="pb-5 text-3xl md:text-6xl ">
                        Ensure Quality with Smart Testing & Automation
                    </p>
                    <p className="text-[#555555] font-light text-lg md:text-2xl px-4">
                        Deliver flawless digital experiences with reliable QA processes and automated testing that enhance speed, accuracy, and performance.
                    </p>
                </div>
            </section>
        </>
    )
}

export default QaTestingHero;
