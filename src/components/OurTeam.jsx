import React from "react";
import SectionTitle from "../ui/SectionTitle";
import teammate1 from "../assets/ourTeam/teammate1.svg";
import teammate2 from "../assets/ourTeam/teammate2.svg";
import teammate3 from "../assets/ourTeam/teammate3.svg";
import teammate4 from "../assets/ourTeam/teammate4.svg";
const OurTeam = () => {
  return (
    <section className="mt-10">
      <SectionTitle>Наша команда</SectionTitle>
      <div className="flex text-center overflow-x-scroll xl:justify-between xl:overflow-x-auto gap-4 py-5">
        <div className="min-w-[230px] h-[250px] lg:w-[255px] lg:h-[295px] flex flex-col bg-white rounded-xl p-[25px] cursor-pointer">
          <div className="flex flex-1 items-center justify-center w-full h-full">
            <img src={teammate1} className="max-w-[110px] lg:max-w-[155px] object-cover" />
          </div>
          <p className="text-lg font-bold">Ӯткуров Сардор</p>
          <p className="text-sm">Директор фирмы</p>
        </div>
        <div className="min-w-[230px] h-[250px] lg:w-[255px] lg:h-[295px] flex flex-col bg-white rounded-xl p-[25px] cursor-pointer">
          <div className="flex flex-1 items-center justify-center w-full h-full">
            <img src={teammate2} className="max-w-[110px] lg:max-w-[155px] object-cover" />
          </div>
          <p className="text-lg font-bold">Рахматуллаев Хаб</p>
          <p className="text-sm">Менеджерпо продажам</p>
        </div>
        <div className="min-w-[230px] h-[250px] lg:w-[255px] lg:h-[295px] flex flex-col bg-white rounded-xl p-[25px] cursor-pointer">
          <div className="flex flex-1 items-center justify-center w-full h-full">
            <img src={teammate3} className="max-w-[110px] lg:max-w-[155px] object-cover" />
          </div>
          <p className="text-lg font-bold">Усмонов Нодир</p>
          <p className="text-sm">Менеджерпо продажам</p>
        </div>
        <div className="min-w-[230px] h-[250px] lg:w-[255px] lg:h-[295px] flex flex-col bg-white rounded-xl p-[25px] cursor-pointer">
          <div className="flex flex-1 items-center justify-center w-full h-full">
            <img src={teammate4} className="max-w-[110px] lg:max-w-[155px] object-cover" />
          </div>
          <p className="text-lg font-bold">Йолдошев Донийор</p>
          <p className="text-sm">Менеджерпо продажам</p>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
