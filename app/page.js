import Image from "next/image";
import Link from "next/link";
import { hydroponics } from "./constant/data";
import HydroponicCard from "./ui/Home/HydroponicCard";
import CollectionCard from "./ui/Home/CollectionCard";
import { BiCheck } from "react-icons/bi";
import Loved from "./ui/Home/Loved";
import Testimonial from "./ui/Home/Testimonial";

export default function Home() {
  return (
    <div className="w-full px-4 pb-[100px] md:px-10 bg-[#FFFCF8] flex flex-col justify-center items-center">
      {/* Hero */}
      <div className="max-w-[361px] flex flex-col gap-3 justify-center items-center">
        <div>
          <p className="text-[50px] leading-[60px] -tracking-[1.25px] font-normal text-primaryGrayscale">
            Exquisite & Sustainable <br /> Self-Watering Planters
          </p>
          <p className="text-sm leading-6 font-normal text-secondaryGrayscale">
            Relax & experience rich greenery year-round with Auto Verdure&apos;s
            live indoor & outdoor hydroponic kits. Let our planters nurture your
            plants, save your time, & enhance your lifestyle to make urban
            farming simple & joyous
          </p>

          {/* Buttons */}
          <div className="mt-3 md:mt-8 w-full text-base font-medium flex gap-7 justify-center xl:justify-start items-center">
            <button className="px-[42px] py-[18px] rounded-[100px] text-white bg-primaryMain">
              Shop now
            </button>
            <button className="px-[42px] py-[18px] text-primaryGrayscale border-[1px] border-primaryGrayscale rounded-[100px] bg-transparent">
              Learn More
            </button>
          </div>
        </div>

        {/* Image */}
        <div></div>
      </div>

      {/* Shop The New Collection */}
      <div className="mt-[78px] md:mt-[114px] xl:mt-[120px] max-w-[361px] md:max-w-[754px] xl:max-w-[1200px] w-full flex flex-col md:justify-center md:items-center">
        <p className="text-[20.049px] md:text-4xl xl:text-[50px] leading-[24.059px] md:leading-[43.2px] xl:leading-[60px] -tracking-[0.501px] md:-tracking-[0.9px] xl:-tracking-[1.25px] text-primaryGrayscale font-normal">
          Shop The New Collection
        </p>

        <div className="mt-[33px] w-full grid grid-cols-2 justify-between items-center gap-x-[3px] md:gap-x-[17.17px] xl:gap-x-[30px] gap-y-[20.32px] md:gap-y-[19.46px] xl:gap-y-[34px]">
          <CollectionCard />
          <CollectionCard />
          <CollectionCard />
          <CollectionCard />
        </div>
      </div>

      {/* Hydroponic Kits */}
      <div className="mt-[20.32px] md:mt-[112.85px] xl:mt-[120px] md:max-w-[754px] w-full xl:max-w-[1200px] flex flex-col justify-center items-center">
        <div className="w-full flex flex-col justify-center items-center">
          <div className="max-w-[320px] md:max-w-[754px] xl:max-w-[1200px] w-full flex flex-col justify-center items-center text-[40px] md:text-4xl xl:text-[50px] leading-[48px] md:leading-[43.2px] xl:leading-[43.2px] -tracking-[1px] md:-tracking-[0.9px] font-normal text-primaryGrayscale">
            <p>Why are our hydroponic kits the best for you?</p>
          </div>

          <div className="mt-12 md:mt-[38px] xl:mt-12 w-full flex flex-col md:grid md:grid-cols-2 xl:grid-cols-3 gap-y-[41px] md:gap-x-[22px] md:gap-y-[47px] xl:grid-x-[41px] xl:grid-y-12 justify-center items-center">
            {hydroponics.map((hydroponic, index) => (
              <HydroponicCard key={index} data={hydroponic} />
            ))}
          </div>

          <div className="my-8 md:hidden w-full flex gap-x-[9px] justify-center items-center">
            <div className="w-[13px] h-[13px] rounded-full bg-primaryMain"></div>
            <div className="w-[13px] h-[13px] rounded-full bg-[#D9D9D9]"></div>
          </div>

          <div className="md:mt-[72.12px] w-full flex flex-col justify-center items-center">
            <button className="text-base px-[42px] py-[18px] rounded-[100px] border-[1px] font-normal text-primaryGrayscale">
              About Us
            </button>
          </div>
        </div>
      </div>

      {/* How Does it Work */}
      <div className="mt-[15px] md:mt-[72px] xl:mt-[149.5px] w-full md:max-w-[754px] xl:max-w-[1098px] h-fit flex xl:gap-[98px] flex-col md:flex-row justify-center items-center">
        <div className="w-full max-w-[361px] xl:max-w-[630px] flex flex-col">
          <p className="w-fit text-[40px] md:text-4xl xl:text-[50px] leading-[48px] md:leading-[48px] xl:leading-[60px] -tracking-[1px] xl:-tracking-[1.25px] font-normal text-primaryGrayscale">
            How does it work?
          </p>

          <div className="mt-[41.5px] max-w-[316px] xl:max-w-[630px] flex flex-col gap-y-6">
            <div className="w-full flex gap-x-4">
              <div>
                <div className="w-[35px] h-[35px] text-base leading-[19.2px] -tracking-[0.4px] font-normal flex justify-center items-center rounded-full text-[#FDFDFD] bg-[#809D79]">
                  1
                </div>
              </div>

              <div>
                <p className="text-2xl leading-[28.8px] -tracking-[0.6px] font-normal text-primaryGrayscale">
                  Pour
                </p>
                <p className="text-sm leading-6 font-normal text-secondaryGrayscale">
                  Open the Lid of the Pot and carefully pour freshwater into the
                  reservoir.
                </p>
              </div>
            </div>
            <div className="w-full flex gap-x-4">
              <div>
                <div className="w-[35px] h-[35px] text-base leading-[19.2px] -tracking-[0.4px] font-normal flex justify-center items-center rounded-full text-[#FDFDFD] bg-[#809D79]">
                  2
                </div>
              </div>

              <div>
                <p className="text-2xl leading-[28.8px] -tracking-[0.6px] font-normal text-primaryGrayscale">
                  Pest Free
                </p>
                <p className="text-sm leading-6 font-normal text-secondaryGrayscale">
                  Close the Lid to keep it Mosquito & Pest Free.
                </p>
              </div>
            </div>
            <div className="w-full flex gap-x-4">
              <div>
                <div className="w-[35px] h-[35px] text-base leading-[19.2px] -tracking-[0.4px] font-normal flex justify-center items-center rounded-full text-[#FDFDFD] bg-[#809D79]">
                  3
                </div>
              </div>

              <div>
                <p className="text-2xl leading-[28.8px] -tracking-[0.6px] font-normal text-primaryGrayscale">
                  Optimal water
                </p>
                <p className="text-sm leading-6 font-normal text-secondaryGrayscale">
                  Via the capillary action, Your plant gets optimal water when
                  required.
                </p>
              </div>
            </div>
            <div className="w-full flex gap-x-4">
              <div>
                <div className="w-[35px] h-[35px] text-base leading-[19.2px] -tracking-[0.4px] font-normal flex justify-center items-center rounded-full text-[#FDFDFD] bg-[#809D79]">
                  4
                </div>
              </div>

              <div>
                <p className="text-2xl leading-[28.8px] -tracking-[0.6px] font-normal text-primaryGrayscale">
                  Water check
                </p>
                <p className="text-sm leading-6 font-normal text-secondaryGrayscale">
                  Check if a water refill is needed. Not every week. Just once
                  on an average of 45-60 days.
                </p>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="hidden md:flex mt-3 md:mt-8 w-full text-base font-medium gap-7 justify-center xl:justify-start items-center">
            <button className="px-[42px] py-[18px] rounded-[100px] text-white bg-primaryMain">
              Shop now
            </button>
            <button className="px-[42px] py-[18px] text-primaryGrayscale border-[1px] border-primaryGrayscale rounded-[100px] bg-transparent">
              Learn More
            </button>
          </div>
        </div>

        <div className="hidden md:flex flex-col xl:w-full justify-center items-center">
          <div className="w-fit p-10 rounded-full bg-[#F3F0F1] border-[3px] border-primaryMain">
            <Image
              className="object-contain"
              src="/pour.png"
              alt="pour"
              width={160.741}
              height={160}
            />
          </div>
          <div className="w-fit relative bottom-[60px] left-[75px] p-10 rounded-full bg-[#F3F0F1] border-[3px] border-primaryMain">
            <Image
              className="object-contain"
              src="/pest.png"
              alt="pestFree"
              width={160.741}
              height={160}
            />
          </div>
          <div className="w-fit relative bottom-[120px] p-10 rounded-full bg-[#F3F0F1] border-[3px] border-primaryMain">
            <Image
              className="object-contain"
              src="/check.png"
              alt="check"
              width={160.741}
              height={160}
            />
          </div>
        </div>
      </div>

      {/* Join the Auto Verdure Movement */}
      <div className="mt-[107.5px] max-w-[361px] w-full">
        <div className="w-full flex flex-col gap-5">
          <p className="text-[40px] leading-[48px] -tracking-[1px] font-normal text-primaryGrayscale">
            Join the Auto Verdure Movement to Transform Indoor & Outdoor Urban
            Plant Growing.
          </p>
          <p className="text-sm leading-6 font-normal text-secondaryGrayscale">
            No Contaminants. Only Nutrient-Packed Produce.
          </p>
        </div>

        {/* Video and Image */}
        <div className="mt-8 w-full flex flex-col gap-8">
          <div className="max-w-[361px] h-[180.5px] rounded-[14.1px] bg-primaryMain"></div>

          <div className="w-full flex justify-between">
            <Image
              src="/aboutImg3.png"
              alt="img"
              width={171.765}
              height={183.395}
            />
            <Image
              src="/aboutImg3.png"
              alt="img"
              width={171.765}
              height={183.395}
            />
          </div>

          <div className="w-full flex flex-col justify-center items-center">
            <button className="text-base px-[42px] py-[18px] rounded-[100px] border-[1px] font-normal text-primaryGrayscale">
              About Us
            </button>
          </div>
        </div>

        <div className="mt-[59.11px] w-full flex flex-col justify-center items-center">
          <div className="w-full flex flex-col justify-center items-center">
            <Image
              className="object-contain"
              src="/powerfullResearch.png"
              alt="image"
              width={361}
              height={300}
            />
            <div className="mt-[30px] w-full">
              <p className="text-2xl leading-[48px] -tracking-[0.6px] text-primaryMain font-bold">
                Powerful design research
              </p>
              <p className="mt-[10px] text-xl leading-8 -tracking-[0.5px] font-normal text-[#888888]">
                We are the first in the Indian Market to combat the rising
                concern of mosquito-induced diseases by integrating the solution
                into our design research.
              </p>
            </div>
          </div>

          <div className="mt-[59px] w-full flex flex-col justify-center items-center">
            <Image
              className="object-contain"
              src="/waterRetention.png"
              alt="image"
              width={361}
              height={300}
            />
            <div className="mt-[30px] w-full">
              <p className="text-2xl leading-[48px] -tracking-[0.6px] text-primaryMain font-bold">
                Water Retention
              </p>
              <p className="mt-[10px] text-xl leading-8 -tracking-[0.5px] font-normal text-[#888888]">
                We have successfully developed an unmatchable Water Retention
                Technology amongst all the Hydroponic system competitors
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Why should you switch from traditional pots to hydroponics? */}
      <div className="mt-[88px] max-w-[361px] w-full flex flex-col justify-center items-center">
        <div>
          <p className="text-[40px] leading-[48px] -tracking-[1px] font-normal text-primaryGrayscale">
            Why should you switch from traditional pots to hydroponics?
          </p>
        </div>

        <div className="mt-[47.41px] w-full">
          <div className="w-full flex rounded-[16.4px] shadow-[0_16.412px_49.235px_-2.051px_rgba(0,0,0,0.05)] bg-[#fff]">
            <div className="w-full flex flex-col gap-5 text-[11.488px] p-[24.62px] font-[600] leading-[17.232px]">
              <p className="">How we are different.</p>
              <div className="mt-[32.82px] w-full flex flex-col gap-[8.21px] text-[#666666]">
                <p>Plant Watering</p>
                <p>Minimal Water Wastage</p>
                <p>Rate of Produce Growth</p>
                <p>Labour Required</p>
                <p>No Pest-induced diseases</p>
                <p>Reduced Carbon Footprint</p>
                <p>Higher Crop Yield</p>
                <p>Higher Crop Yield</p>
              </div>
            </div>

            <div className="w-full px-[10.26px] py-[25.47px] scale-105 border-[2.55px] rounded-[17px] border-primaryMain flex flex-col bg-white items-center">
              <p className="text-[11.888px] font-[600] leading-[17.832px] text-[#666]">
                Our Hydroponic Pot
              </p>
              <div className="mt-[52px] text-[11.888px] leading-[17.832px] gap-[8.49px] flex flex-col justify-center items-center">
                <p>Once 30-45 Days</p>
                <p>Analytics</p>
                <p>Faster</p>
                <p>Less</p>
                <BiCheck className="text-[#00FF66]" />
                <BiCheck className="text-[#00FF66]" />
                <BiCheck className="text-[#00FF66]" />
                <BiCheck className="text-[#00FF66]" />
              </div>
            </div>
          </div>

          <div className="mt-[50.59px] w-full text-sm leading-[21px] px-[40px] py-[10px] rounded-[37px] flex justify-between font-[600] bg-[#9A5CF51A] text-[#666]">
            <p>Our Hydroponics Pot</p>
            <p>Traditional Pots</p>
          </div>
        </div>
      </div>

      {/* Loved By Buyers */}
      <div className="mt-[65px] max-w-[361px] w-full flex flex-col justify-center items-center">
        <div className="w-full flex justify-between items-center">
          <p className="text-2xl leading-[49.4px] font-normal text-[#0E0E0E]">
            Loved by buyers
          </p>
          <Image src="/rightArr.svg" alt="img" width={18} height={19} />
        </div>

        <div className="w-full">
          <Loved />
          <Loved />
        </div>
      </div>

      {/* Join THE AV Family  World's first customizable hydroponic pots. */}
      <div className="mt-[67px] max-w-[361px] w-full">
        <div className="w-full flex flex-col gap-5">
          <p className="text-[40px] leading-[48px] -tracking-[1px] font-normal text-primaryGrayscale">
            Join THE AV Family World&apos;s first customizable hydroponic pots.
          </p>
          <p className="w-[272px] text-sm leading-6 font-normal text-secondaryGrayscale">
            "Unlock The Biophile Inside You: Embrace Your Connection With Nature
            !"
          </p>
        </div>

        <div className="mt-[90px]">
          <Testimonial />
        </div>
      </div>

      {/* What we offer ? */}
      <div className="mt-[80px] max-w-[361px] w-full flex flex-col justify-center items-center">
        <p className="text-[50px] leading-[60px] -tracking-[1.25px] font-normal text-primaryGrayscale">
          What we offer ?
        </p>

        {/* Contentd */}
        <div className="mt-[64px] max-w-[291px] w-full flex flex-col gap-[60px]">
          <div className="w-full flex flex-col gap-4 justify-center items-center">
            <Image src="/drugs.png" alt="img" width={80} height={80} />

            <p className="text-2xl leading-[28.8px] -tracking-[0.6px] font-[600] text-primaryGrayscale">
              Fertiliser Tablets
            </p>
            <p className="text-sm leading-6 text-center font-normal text-secondaryGrayscale">
              They Provide all the essential Nutrients for Plant Growth to
              ensure balanced healthy foliage & we provide you these at Zero
              Cost.
            </p>
          </div>
          <div className="w-full flex flex-col gap-4 justify-center items-center">
            <Image src="/warranty.png" alt="img" width={80} height={80} />

            <p className="text-2xl leading-[28.8px] -tracking-[0.6px] font-[600] text-primaryGrayscale">
              2 Years Warranty
            </p>
            <p className="text-sm leading-6 text-center font-normal text-secondaryGrayscale">
              Auto Verdure Hydroponic & Semi-Hydroponic kits guarantee _ Year
              Guarantee. If your kit arrives damaged or in a defected state, we
              will accordingly provide a replacement for it.
            </p>
          </div>
          <div className="w-full flex flex-col gap-4 justify-center items-center">
            <Image src="/agriculture.png" alt="img" width={80} height={80} />

            <p className="text-2xl leading-[28.8px] -tracking-[0.6px] font-[600] text-primaryGrayscale">
              Local Farm Visit
            </p>
            <p className="text-sm leading-6 text-center font-normal text-secondaryGrayscale">
              Want a hands-on experience of our Process? Come along and venture
              into the Auto verdure all the way to your home, and learn how we
              care for your plant at every stage.
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-[52px] md:mt-8 w-full text-base font-medium flex gap-7 justify-center xl:justify-start items-center">
          <button className="px-[42px] py-[18px] rounded-[100px] text-white bg-primaryMain">
            Shop now
          </button>
          <button className="px-[42px] py-[18px] text-primaryGrayscale border-[1px] border-primaryGrayscale rounded-[100px] bg-transparent">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}
