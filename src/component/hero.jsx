function Hero() {
  return (
    <section className="bg-white dark:bg-custom-2b2a4c">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            Baso Aci Bucin
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            From checkout to global sales tax compliance, companies around the
            world use Flowbite to simplify their payment stack.
          </p>
        </div>
        <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img src={require(`../asset/baso2.jpg`)} alt="mockup" className="rounded-3xl" />
        </div>
      </div>
    </section>
  ); 
}

export default Hero;
