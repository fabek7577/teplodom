import React from "react";
import SectionTitle from "../ui/SectionTitle";
import teammateImg from "../assets/ourTeam/teammate.png";
const OurTeam = () => {
  return (
    <section className="mt-10">
      <SectionTitle>Наша команда</SectionTitle>
      <div className="flex text-center overflow-x-scroll xl:justify-between xl:overflow-x-auto gap-4 py-5">
        <div className="min-w-[230px] h-[250px] lg:w-[255px] lg:h-[295px] flex flex-col bg-white rounded-xl p-[25px] cursor-pointer">
          <div className="flex flex-1 items-center justify-center w-full h-full">
            <img src={teammateImg} className="max-w-[110px] lg:max-w-[155px] object-cover" />
          </div>
          <p className="text-lg font-bold">Ӯткуров Сардор</p>
          <p className="text-sm">Директор фирмы</p>
        </div>
        <div className="min-w-[230px] h-[250px] lg:w-[255px] lg:h-[295px] flex flex-col bg-white rounded-xl p-[25px] cursor-pointer">
          <div className="flex flex-1 items-center justify-center w-full h-full">
            <img src={teammateImg} className="max-w-[110px] lg:max-w-[155px] object-cover" />
          </div>
          <p className="text-lg font-bold">Ӯткуров Сардор</p>
          <p className="text-sm">Директор фирмы</p>
        </div>
        <div className="min-w-[230px] h-[250px] lg:w-[255px] lg:h-[295px] flex flex-col bg-white rounded-xl p-[25px] cursor-pointer">
          <div className="flex flex-1 items-center justify-center w-full h-full">
            <img src={teammateImg} className="max-w-[110px] lg:max-w-[155px] object-cover" />
          </div>
          <p className="text-lg font-bold">Ӯткуров Сардор</p>
          <p className="text-sm">Директор фирмы</p>
        </div>
        <div className="min-w-[230px] h-[250px] lg:w-[255px] lg:h-[295px] flex flex-col bg-white rounded-xl p-[25px] cursor-pointer">
          <div className="flex flex-1 items-center justify-center w-full h-full">
            <img src={teammateImg} className="max-w-[110px] lg:max-w-[155px] object-cover" />
          </div>
          <p className="text-lg font-bold">Ӯткуров Сардор</p>
          <p className="text-sm">Директор фирмы</p>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
