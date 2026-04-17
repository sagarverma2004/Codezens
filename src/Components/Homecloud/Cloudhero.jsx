import LineBackground from "../Homes/img/LineBackground.png"

function Cloudhero() {
  return (
    <>
      <section className='relative'>
        <img
          src={LineBackground}
          alt=""
          className="object-cover w-full overflow-hidden h-80 md:h-120" />
        <div className="absolute inset-0 flex flex-col items-center justify-center mx-auto text-center max-w-198">
          <p className="pb-5 text-3xl md:text-6xl">
            Seamless Cloud Deployment & Migration
          </p>
          <p className="text-[#555555] font-light text-lg md:text-2xl px-4">
            Move your applications to the cloud with confidence — ensuring scalability,
            security, and minimal downtime while optimizing performance and costs.
          </p>
        </div>
      </section>
    </>
  )
}

export default Cloudhero;
