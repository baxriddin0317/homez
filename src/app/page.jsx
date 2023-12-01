import Image from "next/image";
import {
  Cta,
  Footer,
  Header,
  Hero,
  Partners,
  Properties,
  PropertyByCitiesWrapper,
  WhyChoose,
} from "@/components";
import {
  ApartmentType,
  Blog,
  Funfact,
  InqueryForm,
  MobileMenu,
  Testimonial,
} from "@/components/common";
import HeroImg from "../../public/images/home-3.jpg";

export const metadata = {
  title: "home",
};

export default function Home() {
  return (
    <main>
      {/* Home Banner Style */}
      <section className="relative">
        <Image
          className="absolute left-0 top-0 object-cover w-full h-full -z-10"
          src={HeroImg}
          fill
          alt="hero image"
        />
        <div className="max-w-7xl px-3 sm:px-10 md:px-6 mx-auto flex items-center justify-center h-[650px] lg:h-[760px]">
          <div className="w-full relative">
            <div className="px-3">
              <Hero />
            </div>

            <div className="hidden xl:block absolute right-0 -top-10">
              <div className="">
                <Image
                  width={641}
                  height={650}
                  className="z-10"
                  src="/images/about-3.png"
                  alt="about"
                />
                <Image
                  width={120}
                  height={120}
                  className="absolute opacity-10 right-auto -bottom-12 -left-16 z-10 animate-spin animate-duration-[10000ms]"
                  src="/images/element-3.png"
                  alt="about"
                />
                <Image
                  width={120}
                  height={120}
                  className="absolute bottom-auto opacity-10 -top-20 -right-16 animate-spin animate-duration-[10000ms]"
                  src="/images/element-3.png"
                  alt="about"
                />
                <Image
                  width={276}
                  height={146}
                  className="absolute left-1/2 -translate-x-1/3 right-auto bottom-10 z-10 animate-bounce animate-infinite animate-duration-[4000ms]"
                  src="/images/about-1.png"
                  alt="about"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Home Banner Style */}

      {/* Our Partners */}
      <section className="py-14 md:py-32">
        <div className="max-w-7xl mx-auto px-3 sm:px-10 md:px-6">
          <h3 className="text-brand-black-100 font-semibold text-center mb-16">
            Trusted by the world’s best
          </h3>
          <Partners />
        </div>
      </section>
      {/* End Our Partners */}

      {/* Properties by Cities */}
      <section className="max-w-7xl mx-auto sm:px-10 px-4 md:px-6 pb-16">
        <Properties />
      </section>
      {/* End Properties by Cities */}

      {/* Popular Property */}
      <PropertyByCitiesWrapper />
      {/* Popular Property */}

      {/* Explore Apartment */}
      <section className="pt-16 pb-8 md:pt-32 md:pb-32 bg-brand-black-100 text-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-10 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-xl md:text-3xl font-semibold md:leading-[45px]">
              Explore Apartment Types
            </h2>
            <p className="text-sm leading-6">
              Get some Inspirations from 1800+ skills
            </p>
          </div>

          <div data-aos="fade-up" data-aos-delay="300">
            <ApartmentType />
          </div>
        </div>
      </section>
      {/* End Explore Apartment */}

      {/* Why Chose Us */}
      <section className="max-w-7xl mx-auto px-3 sm:px-10 md:px-6">
        <div
          className="flex flex-col md:flex-row gap-8 md:gap-6 lg:gap-20 xl:gap-40 items-center py-16 md:py-32"
          data-aos="fade-left"
          data-aos-delay="100"
        >
          <WhyChoose />
        </div>
      </section>
      {/* End Why Chose Us */}

      {/*People Love Living with Realton */}
      <section className="pt-16 pb-8 lg:pt-32 lg:pb-32 bg-brand-gray-300">
        <div className="max-w-7xl mx-auto px-3 sm:px-10 md:px-6">
          <div className="flex flex-col md:flex-row items-center gap-8 justify-between">
            <div className="mb-8 md:mb-0" data-wow-delay="100ms">
              <div className="mb-16 text-brand-black-100">
                <h2 className="text-3xl font-semibold mb-1">
                  People Love Living with Realton
                </h2>
                <p className="text-sm">
                  Aliquam lacinia diam quis lacus euismod
                </p>
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
                <Funfact />
              </div>
            </div>
            {/* End .col */}

            <div
              className="w-full md:w-1/2 xl:w-1/3"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <Testimonial />
            </div>
            {/* End .col */}
          </div>
        </div>
      </section>
      {/* End People Love Living with Realton */}

      {/* Real Estate Inquiry Form */}
      <section className="pt-16 md:pt-32">
        <div className="max-w-7xl mx-auto px-3 sm:px-10 md:px-6">
          <div className="flex flex-col lg:flex-row gap-8 md:gap-6 lg:gap-20 xl:gap-28">
            <div className="lg:w-1/2" data-aos="fade-left" data-aos-delay="0">
              <div className="mb-10 text-brand-black-100">
                <h2 className="text-xl sm:text-3xl font-semibold sm:leading-[45px]">
                  Real Estate Inquiry Form
                </h2>
                <p className="text-sm ">
                  As the complexity of buildings to increase
                </p>
              </div>
              <div className="">
                <InqueryForm />
              </div>
            </div>

            <div
              className="lg:w-1/2"
              data-aos="fade-right"
              data-aos-delay="300"
            >
              <div className="relative mx-auto w-full h-[778px]">
                <Image
                  width={591}
                  height={778}
                  className="absolute left-1/2 -translate-x-1/2 w-100 h-100 object-cover"
                  src="/images/about-4.png"
                  alt="about"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Real Estate Inquiry Form */}

      {/* Explore Blog */}
      <section className="pt-16 pb-8 md:pt-32 md:pb-32 md:mb-9">
        <div className="max-w-7xl mx-auto px-3 sm:px-10 md:px-6">
          <div
            className="text-brand-black-100 mb-16 text-start md:text-center"
            data-aos="fade-up"
            data-aos-delay="0"
          >
            <h2 className="text-xl sm:text-3xl font-semibold sm:leading-[45px]">
              From Our Blog
            </h2>
            <p className="text-sm">Aliquam lacinia diam quis lacus euismod</p>
          </div>
          {/* End .row */}

          <div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <Blog />
          </div>
          {/* End .row */}
        </div>
      </section>
      {/* End Explore Blog */}

      {/* Our CTA */}
      <Cta />
      {/* Our End CTA */}
    </main>
  );
}
