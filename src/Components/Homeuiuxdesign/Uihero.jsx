import LineBackground from "../Homes/img/LineBackground.png"

function Uihero() {
  return (
    <>
      <section className='relative'>
        <img
          src={LineBackground}
          alt=""
          className="object-cover w-full overflow-hidden h-80 md:h-120" />
        <div className="absolute inset-0 flex flex-col items-center justify-center mx-auto text-center max-w-198">
          <p className="pb-5 text-3xl md:text-6xl">
            Design Experiences Users Love
          </p>
          <p className="text-[#555555] font-light text-lg md:text-2xl px-4">
            We craft intuitive and engaging interfaces that enhance usability
            and create meaningful digital experiences.
          </p>
        </div>
      </section>
    </>
  )
}

export default Uihero;
