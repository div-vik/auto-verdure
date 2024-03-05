import Image from "next/image";
import Link from "next/link";
import React from "react";

const TermsConditions = () => {
  return (
    <div className="w-full px-4 pt-[44px] pb-[124px] md:px-[28px] md:py-[116px] xl:px-[119.99px] xl:pt-[114px] xl:pb-[151px] 2xl:px-[200px] 2xl:py-[116px] bg-[#FFFCF8] flex flex-col justify-center items-center">
      {/* Title */}
      <div className="max-w-[214px] md:max-w-[636px] w-full relative flex flex-col justify-center items-center">
        <div>
          <Image
            className="object-contain absolute top-[10px] -left-[50px] md:top-[90px] md:-left-[25px] lg:-left-[25px] xl:-top-[25.5px] xl:-left-[200px] -rotate-45 md:rotate-45 xl:-rotate-45 transform scale-x-100 md:-scale-x-100 xl:scale-x-100"
            src="/leaf.png"
            alt="leaf"
            width={58}
            height={41}
          />
        </div>
        <div className="w-full flex flex-col justify-center items-center">
          <div className="max-w-[182px] md:max-w-[636px] w-full text-[40px] md:text-[70px] leading-[48px] md:leading-[80px] -tracking-[1px] md:-tracking-[1.75px] font-normal text-primaryGrayscale">
            <p>Terms and Conditions</p>
          </div>
          <div className="w-full mt-3 md:mt-6 text-base font-medium flex flex-col justify-center items-center">
            <p className="text-secondaryGrayscale">
              <Link href="/">
                <span className="text-primaryMain">Home</span>
              </Link>{" "}
              / Terms and Conditions
            </p>
          </div>
        </div>
        <div>
          <Image
            className="object-contain absolute top-[90px] -right-[70px] md:-top-[60px] md:-right-[5px] lg:right-[0px] xl:top-[30px] xl:-right-[85px] -rotate-[30deg] md:-rotate-[45deg] transform -scale-y-100 -scale-x-100 md:scale-y-100 md:scale-x-100 xl:-scale-y-100 xl:-scale-x-100"
            src="/leaf.png"
            alt="leaf"
            width={58}
            height={41}
          />
        </div>
      </div>

      {/* Horizontal Line */}
      <div className="mt-9 md:mt-[72px] xl:mt-[72.5px] w-full border-[1px] border-black border-opacity-[11%]" />

      {/* Cotent */}
      <div className="mt-[80px] md:mt-[72px] max-w-screen md:max-w-[641px] xl:max-w-[778px] w-full flex flex-col justify-center items-center">
        <div className="max-w-[182px] md:max-w-fit w-full text-[40px] md:text-[50px] font-normal leading-[48px] md:leading-[60px] -tracking-[1px] md:-tracking-[1.25px] text-primaryGrayscale">
          <p>Terms and Conditions</p>
        </div>

        <div className="mt-[7px] md:mt-8 text-sm md:text-xl font-normal leading-6 md:leading-8 md:-tracking-[0.5px] text-secondaryGrayscale">
          Welcome to Auto verdure website. If you continue to browse and use
          this website, you are agreeing to comply with and be bound by the
          following terms and conditions of use. If you disagree with any part
          of these terms and conditions, please do not use our website.
          <br /> <br />
          The term &apos;Auto verdure&apos; or &apos;us&apos; or &apos;we&apos;
          refers to the owner of the website. The term &apos;you&apos; refers to
          the user or viewer of our website. <br /> <br />
          The use of this website is subject to the following terms and
          conditions:
          <br /> <br />
          <div className="w-full px-3">
            <div className="w-full flex gap-2">
              <p>1.</p>
              <p>
                The content of the pages of this website is for your general
                information and use only. It is subject to change without
                notice.
              </p>
            </div>
            <div className="w-full flex gap-2">
              <p>2.</p>
              <p>
                Neither we nor any third parties provide any warranty or
                guarantee as to the accuracy, timeliness, performance,
                completeness or suitability of the information and materials
                found or offered on this website for any particular purpose. You
                acknowledge that such information and materials may contain
                inaccuracies or errors and we expressly exclude liability for
                any such inaccuracies or errors to the fullest extent permitted
                by law.
              </p>
            </div>
            <div className="w-full flex gap-2">
              <p>3.</p>
              <p>
                Your use of any information or materials on this website is
                entirely at your own risk, for which we shall not be liable. It
                shall be your own responsibility to ensure that any products,
                services or information available through this website meet your
                specific requirements.
              </p>
            </div>
            <div className="w-full flex gap-2">
              <p>4.</p>
              <p>
                This website contains material which is owned by or licensed to
                us. This material includes, but is not limited to, the design,
                layout, look, appearance and graphics. Reproduction is
                prohibited other than in accordance with the copyright notice,
                which forms part of these terms and conditions.
              </p>
            </div>
            <div className="w-full flex gap-2">
              <p>5.</p>
              <p>
                Unauthorized use of this website may give rise to a claim for
                damages and/or be a criminal offense.
              </p>
            </div>
            <div className="w-full flex gap-2">
              <p>6.</p>
              <p>
                From time to time, this website may also include links to other
                websites. These links are provided for your convenience to
                provide further information. They do not signify that we endorse
                the website(s). We have no responsibility for the content of the
                linked website(s).
              </p>
            </div>
            <div className="w-full flex gap-2">
              <p>7.</p>
              <p>
                Your use of this website and any dispute arising out of such use
                of the website is subject to the laws of the United States of
                America.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;
