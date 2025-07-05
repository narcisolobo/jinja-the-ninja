import { Button } from "flowbite-react";
import Image from "next/image";
import Jinja from "@/images/jinja-the-ninja.webp";

function HeroSection() {
  return (
    <section id="hero" className="bg-gray-100 font-sans dark:bg-gray-900">
      <div className="flex h-full min-h-[90vh] items-center justify-center px-4 md:container md:mx-auto">
        <div className="mx-auto grid max-w-screen-xl lg:grid-cols-12 lg:gap-8 xl:gap-0">
          <div className="mb-8 lg:order-last lg:col-span-5 lg:mt-0 lg:mb-0 lg:flex">
            <Image
              priority
              src={Jinja}
              width={640}
              height={640}
              alt="Jinja the Ninja"
              className="mx-auto max-w-10/12 rounded-full"
            />
          </div>
          <div className="mr-auto place-self-center lg:order-first lg:col-span-7">
            <h1 className="font-display mb-4 max-w-2xl text-4xl leading-none md:text-5xl xl:text-6xl dark:text-gray-100">
              Jinja the Ninja
            </h1>
            <p className="mb-6 max-w-2xl font-light text-gray-500 md:text-lg lg:mb-8 lg:text-xl dark:text-gray-400">
              Hello and welcome! This site should have everything you need to
              keep Jinja happy and healthy.
            </p>
            <div className="flex items-center gap-4">
              <Button
                as="a"
                href="#schedule"
                className="inline-flex"
                size="lg"
                color="pink"
              >
                Schedule
              </Button>
              <Button
                as="a"
                href="#emergency"
                className="inline-flex"
                size="lg"
                color="light"
              >
                Emergency
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
