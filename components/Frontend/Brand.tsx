import Image from "next/image";
import Link from "next/link";
import React from "react";

export type SingleImageProps = {
  href: string;
  imgSrc: string;
  Alt: string;
};

const Brand = () => {
  return (
    <>
      <section className="bg-[#f1f1f1] dark:bg-slate-900 dark:border dark:border-white rounded-md py-10 lg:py-[60px]">
        <h2 className="text-center pb-6">Trusted By</h2>
        <div className="container mx-auto">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4">
              <div className="flex flex-wrap items-center justify-center">
                <SingleImage
                  href="#"
                  Alt="Brand Image"
                  imgSrc="https://cdn.tailgrids.com/1.0/assets/images/brands/graygrids.svg"
                />
                <SingleImage
                  href="#"
                  Alt="Brand Image"
                  imgSrc="https://cdn.tailgrids.com/1.0/assets/images/brands/lineicons.svg"
                />
                <SingleImage
                  href="#"
                  Alt="Brand Image"
                  imgSrc="https://cdn.tailgrids.com/1.0/assets/images/brands/uideck.svg"
                />
                <SingleImage
                  href="#"
                  Alt="Brand Image"
                  imgSrc="https://cdn.tailgrids.com/1.0/assets/images/brands/ayroui.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ====== Brands Section End */}
    </>
  );
};

export default Brand;

const SingleImage = ({ href, imgSrc, Alt }: SingleImageProps) => {
  return (
    <>
      <Link
        href={href}
        className="mx-4 flex w-[150px] items-center justify-center  2xl:w-[180px]"
      >
        <Image src={imgSrc} alt={Alt} width={10} height={10} />
        {/* <img src={imgSrc} alt={Alt} className="w-full h-10" /> */}
      </Link>
    </>
  );
};
