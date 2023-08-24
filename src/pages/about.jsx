import Hero from "../component/hero";
import Hr from "../component/horizontal-line";
import { aboutData } from "../helpers/aboutData";

function About() {
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
          <div className="mt-4 md:mt-0">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Let's create more tools and ideas that bring us together.
            </h2>
            <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
              Flowbite helps you connect with friends and communities of people
              who share your interests. Connecting with your friends and family
              as well as discovering new ones is easy with features like Groups.
            </p>
          </div>
          <div className="flex justify-end">
            <img
              className="w-full max-w-lg"
              src={require(`../asset/team3.jpg`)}
              alt="dashboard image"
            />
          </div>
        </div>
      </section>
      <section class="bg-white bg-custom-F0EEED">
        <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
          <div class="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Our Team
            </h2>
          </div>
          <div class="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
            {aboutData.map((data, idx) => (
              <div class="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
                
                <a href="#">
                  <img
                    class="w-full rounded-lg sm:rounded-none sm:rounded-l-lg"
                    src={require(`../asset/${data.imageSrc}`)}
                    alt="Bonnie Avatar"
                  />
                </a>
                <div class="p-5">
                  <h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    <a href="#">{data.name}</a>
                  </h3>
                  <span class="text-gray-500 dark:text-gray-400">
                    {data.as}
                  </span>
                  <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                    Bonnie drives the technical strategy of the flowbite
                    platform and brand.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
