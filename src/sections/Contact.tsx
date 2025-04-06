import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import Image from "next/image";
import mapImage from "@/assets/images/map.png";
import smileMemoji from "@/assets/images/memoji-smile.png";
import { FiArrowUpRight } from "react-icons/fi";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-16 pt-12 lg:py-24 lg:pt-5">
      <div className="container">
            <SectionHeader
      eyebrow="Get in Touch"
      title="Contact Me"
      description="Whether you have a question, opportunity, or just want to say hello, I'd love to hear from you."
    />
    <br></br>
    <br></br>
      
        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden z-0 ">
          <div
            className="absolute inset-0 opacity-5 -z-10"
            style={{
              backgroundImage: `url('/images/grain.jpg')`,
            }}
          ></div>
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl pb-8 text-gray-600">
              Send Me A Message
              </h2>
              {/* <p className="text-sm md:text-base mt-2">
                Ready to bring your next project to life? Let&apos;s connect and discuss how I can help you achieve your goals.
              </p> */}
              <div>
        <form className="space-y-3">
          <input
            type="text"
            placeholder="Full Name"
            name="full_name"
            className="w-full p-3 rounded-full focus:outline-gray-700 bg-white/20 text-black placeholder-white/70"
          />
          <input
            type="email"
            placeholder="Your E-mail"
            name="email"
            className="w-full p-3 rounded-full bg-white/20 text-black placeholder-white/70"
          />
          <input
            type="tel"
            placeholder="Your Contact Number"
            name="number"
            className="w-full p-3 rounded-full bg-white/20 text-black placeholder-white/70"
          />
          <input
            type="text"
            placeholder="Subject"
            name="subject"
            className="w-full p-3 rounded-full bg-white/20 text-black placeholder-white/70"
          />
          <textarea
            name="message"
            id="message"
            placeholder="Write Your Message Here..."
            rows={5}
            className="w-full p-3 rounded-lg bg-white/20 text-black placeholder-white/70"
          />
          
          <button className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-gray-900">
                <span className="font-semibold">Send Message</span>
                <FiArrowUpRight className="size-4" />
              </button>
        </form>
      </div>
            </div>
            
            <div>
            <Card className=" p-0 relative col-span-2 lg:col-span-1">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.7921349441076!2d79.89829207594013!3d6.795127593202152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae245416b7f34b5%3A0x7bd32721ab02560e!2sUniversity%20of%20Moratuwa!5e0!3m2!1sen!2slk!4v1743931130348!5m2!1sen!2slk" loading="lazy" className="min-h-[420px]"></iframe>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:outline-offset-2 after:rounded-full after:outline-gray-950/30">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]"></div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10"></div>
              <Image
                src={smileMemoji}
                alt="smiling memoji"
                className="size-20"
              />
            </div>
            {/* <Image
              src={mapImage}
              alt="map"
              className="h-full w-full object-cover object-left-top"
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:outline-offset-2 after:rounded-full after:outline-gray-950/30">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]"></div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10"></div>
              <Image
                src={smileMemoji}
                alt="smiling memoji"
                className="size-20"
              />
            </div> */}
          </Card>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
};
