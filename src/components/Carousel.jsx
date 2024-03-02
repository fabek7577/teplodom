import { Carousel } from "@material-tailwind/react";
import slider1 from "../assets/slider/slider1.png";
import slider2 from "../assets/slider/slider2.png";
import slider3 from "../assets/slider/slider3.png";
import slider3_2 from "../assets/slider/slider3_2.png";
import slider4 from "../assets/slider/slider4.png";
export function CarouselCustomNavigation() {
  return (
    <Carousel
      className="rounded-xl"
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      <div className="bg-linarOrange w-full h-full p-2 flex text-white items-center gap-5 justify-evenly px-10">
        <img
          src={slider1}
          alt="image 1"
          className="w-[120px] md:w-[150px] lg:w-[240px] h-fit object-cover lg:order-2"
        />
        <div className="flex flex-col gap-3 lg:order-1">
          <h1 className="text-xl font-bold md:text-2xl lg:text-5xl">
            Пеноплекс Основа
          </h1>
          <p className="text-sm md:text-lg lg:text-2xl">
            <span className="lg:hidden">
              производитель тепло- и гидроизоляционных материалов.
            </span>
            <span className="hidden lg:inline-block w-[700px] xl:w-[800px]">
              Пеноплэкс» — российская компания, производитель тепло- и
              гидроизоляционных, а также декоративно-отделочных материалов на
              основе полимеров, основной вид продукции — теплоизоляционные плиты
              из экструзионного пенополистирола
            </span>
          </p>
        </div>
      </div>

      <div className="bg-linarGreen w-full h-full p-2 flex text-white items-center gap-5 justify-evenly px-10">
        <img
          src={slider2}
          alt="image 1"
          className="w-[120px] md:w-[150px] lg:w-[240px] h-fit object-cover lg:order-2"
        />
        <div className="flex flex-col gap-3 lg:order-1">
          <h1 className="text-xl font-bold md:text-2xl lg:text-5xl">
            Гипсакартон
          </h1>
          <p className="text-sm md:text-lg lg:text-2xl">
            <span className="lg:hidden">
              Cтроительный материал, представляющий собой лист состоящий из двух
              слоёв
            </span>
            <span className="hidden lg:inline-block w-[700px] xl:w-[800px]">
              Cтроительный материал, представляющий собой лист, состоящий из
              двух слоёв строительной бумаги (картона) и сердечника из слоя
              затвердевшего гипсового теста с наполнителями.
            </span>
          </p>
        </div>
      </div>

      <div className="bg-linarYellow w-full h-full p-2 flex text-white items-center gap-5 justify-evenly px-10">
        <div className="relative w-full h-full lg:order-2">
          <img
            src={slider3}
            alt="image 1"
            className="w-[120px] md:w-[150px] lg:w-[240px] h-fit object-cover lg:order-2 absolute top-0 left-5"
          />
          <img
            src={slider3_2}
            alt="image 1"
            className="w-[120px] md:w-[150px] lg:w-[240px] h-fit object-cover lg:order-2  absolute bottom-0"
          />
        </div>

        <div className="flex flex-col gap-3 lg:order-1 lg:ps-4">
          <h1 className="text-xl font-bold md:text-2xl lg:text-5xl">
            Basalt wool
          </h1>
          <p className="text-sm md:text-lg lg:text-2xl">
            <span className="lg:hidden">
              Базальтовое волокно представляет собой материал, изготовленный из
              чрезвычайно тонких волокон
            </span>
            <span className="hidden lg:inline-block w-[700px] xl:w-[800px]">
              Базальтовое волокно представляет собой материал, изготовленный из
              чрезвычайно тонких волокон базальта, который состоит из минералов
              плагиоклаза, пироксена и оливина. Он похож на стекловолокно.
            </span>
          </p>
        </div>
      </div>

      <div className="bg-linarBrown w-full h-full p-2 flex text-white items-center gap-5 justify-evenly px-10">
        <img
          src={slider4}
          alt="image 1"
          className="w-[120px] md:w-[150px] lg:w-[240px] h-fit object-cover lg:order-2"
        />
        <div className="flex flex-col gap-3 lg:order-1">
          <h1 className="text-xl font-bold md:text-2xl lg:text-5xl">
            Финская Фанера
          </h1>
          <p className="text-sm md:text-lg lg:text-2xl">
            <span className="lg:hidden">
              Этоть материал изготавливаемый путём склеивания специально
              подготовленного шпона.
            </span>
            <span className="hidden lg:inline-block w-[700px] xl:w-[800px]">
              многослойный строительный материал, изготавливаемый путём
              склеивания специально подготовленного шпона. Для повышения
              прочности фанеры слои шпона накладываются так.
            </span>
          </p>
        </div>
      </div>
    </Carousel>
  );
}
