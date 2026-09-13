import Image from "next/image";
import ContactForm from "./contact-form";

const ContactInformation = ({ year = 2026 }: { year?: number }) => {
  return (
    <>
      <ContactForm />
      <div className="bg-gradient-to-r from-blue-800 to-blue-300 py-20">
        <div className=" container text-white p-6 md:p-8 rounded-t-3xl">
          <div className="flex items-center pb-10 space-x-4">
            <Image
              src="/1.png"
              alt="Baliyo Ventures"
              width={100}
              height={50}
              className="rounded-full bg-white w-auto h-auto"
            />
            <Image
              src="/2.png"
              alt="Baliyo Ventures"
              width={100}
              height={50}
              className="rounded-md w-auto h-auto"
            />
          </div>
          <h1 className="text-2xl md:text-3xl font-bold mb-4">
            Chamber of Industries, Morang
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div>
              <p className="font-semibold">Phone:</p>
              <a href="tel:021515712" className="hover:underline">
                021-515712
              </a>
              ,
              <a href="tel:577646" className="hover:underline">
                577646
              </a>
            </div>
            <div>
              <p className="font-semibold">Website:</p>
              <a
                href="http://www.cim.org.np"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                www.cim.org.np
              </a>
            </div>
            <div>
              <p className="font-semibold">Mail:</p>
              <a
                href="mailto:cim.biratnagar@gmail.com"
                className="hover:underline"
              >
                cim.biratnagar@gmail.com
              </a>
            </div>
            <div>
              <p className="font-semibold">Address:</p>
              <p>Shahid Marga, Tinpaini, Biratnagar-2</p>
            </div>
          </div>

          <h2 className="text-xl md:text-2xl font-bold mb-8  mt-20">
            Contact Persons
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
            <div className="text-left">
              <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden mb-3">
                <Image
                  src="/NandKishorRathi.webp"
                  alt="Mr. Nand Kishor Rathi"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-bold">Mr. Nand Kishor Rathi</h3>
              <p className="text-sm">President, Chamber of Industries Morang</p>
              <a href="tel:9852020027" className="text-sm hover:underline">
                Mobile 9852020027
              </a>
            </div>
            <div className="text-left">
              <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden mb-3">
                <Image
                  src="/Bipin.webp"
                  alt="Mr. Bipin Kabra"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-bold">Mr. Bipin Kabra</h3>
              <p className="text-sm">
                Vice President & Coordinator Birat Expo {year}
              </p>
              <a href="tel:9852022000" className="text-sm hover:underline">
                Mobile 9852022000
              </a>
            </div>
            <div className="text-left">
              <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden mb-3">
                <Image
                  src="/deepak-1.webp"
                  alt="Mr. Deepak Agrawal"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-bold">Mr. Deepak Agrawal</h3>
              <p className="text-sm">
                Executive member & Co-Coordinator Birat Expo {year}
              </p>
              {/* <a href="tel:9802771077" className="text-sm hover:underline">
                Mobile 9802771077
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactInformation;
