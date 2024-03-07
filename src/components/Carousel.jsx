import { Carousel } from "@material-tailwind/react";
import slider1 from "../assets/slider/slider1.png";
import slider2 from "../assets/slider/slider2.png";
import slider3 from "../assets/slider/slider3.png";
import slider4 from "../assets/slider/slider4.png";
import slider3_2 from "../assets/slider/slider3_2.png";
export function CarouselCustomNavigation() {
  return (
    <Carousel
      className="rounded-xl xl:h-[420px]"
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-5 lg:bottom-10 left-2/4 lg:left-44 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-white" : "w-4 lg:w-8 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      <div
        className={`bg-linarOrange carousel lg:bg-sliderBg1 bg-no-repeat bg-cover bg-center`}
      >
        <img
          src={slider1}
          alt="image 1"
          className="w-[120px] md:w-[150px] lg:w-[240px] xl:w-fit h-fit object-cover lg:order-2"
        />
        <div className="flex flex-col gap-3 lg:order-1 xl:h-full xl:py-14 xl:ps-14">
          <h1 className="text-xl font-bold md:text-2xl lg:text-4xl xl:text-5xl">
            Пеноплекс Основа
          </h1>
          <p className="text-sm md:text-lg lg:text-xl xl:text-2xl lg:mt-7">
            <span className="lg:hidden">
              производитель тепло- и гидроизоляционных материалов.
            </span>
            <span className="hidden lg:inline-block xl:w-[645px]">
              Пеноплэкс» — российская компания, производитель тепло- и
              гидроизоляционных, а также декоративно-отделочных материалов на
              основе полимеров, основной вид продукции — теплоизоляционные плиты
              из экструзионного пенополистирола
            </span>
          </p>
        </div>
      </div>

      <div
        className={`bg-linarGreen carousel lg:bg-sliderBg2 bg-no-repeat bg-cover bg-center`}
      >
        <img
          src={slider2}
          alt="image 1"
          className="w-[120px] md:w-[150px] lg:w-[240px] xl:w-fit h-fit object-cover lg:order-2"
        />
        <div className="flex flex-col gap-3 lg:order-1 xl:h-full xl:py-14 xl:ps-14">
          <h1 className="text-xl font-bold lg:text-4xl xl:text-5xl">
            Гипсакартон
          </h1>
          <p className="text-sm md:text-lg lg:text-xl xl:text-2xl lg:mt-7">
            <span className="lg:hidden">
              Cтроительный материал, представляющий собой лист состоящий из двух
              слоёв
            </span>
            <span className="hidden lg:inline-block xl:max-w-[560px]">
              Cтроительный материал, представляющий собой лист, состоящий из
              двух слоёв строительной бумаги (картона) и сердечника из слоя
              затвердевшего гипсового теста с наполнителями.
            </span>
          </p>
        </div>
      </div>

      <div
        className={`bg-linarYellow carousel lg:bg-sliderBg3 bg-no-repeat bg-cover bg-center`}
      >
        <div className="relative w-full h-full lg:order-2 flex lg:justify-center">
          <img
            src={slider3}
            alt="image 1"
            className="w-[120px] md:w-[150px] lg:w-[240px] xl:w-fit h-fit object-cover absolute top-0 left-5 xl:left-56"
          />
          <img
            src={slider3_2}
            alt="image 1"
            className="w-[120px] md:w-[150px] lg:w-[240px] xl:w-fit h-fit object-cover  absolute bottom-0"
          />
        </div>

        <div className="flex flex-col gap-3 lg:order-1 xl:h-full xl:py-14 xl:ps-14">
          <h1 className="text-xl font-bold lg:text-4xl xl:text-5xl">
            Basalt wool
          </h1>
          <p className="text-sm md:text-lg lg:text-xl xl:text-2xl lg:mt-7">
            <span className="lg:hidden">
              Базальтовое волокно представляет собой материал, изготовленный из
              чрезвычайно тонких волокон
            </span>
            <span className="hidden lg:inline-block xl:w-[560px]">
              Базальтовое волокно представляет собой материал, изготовленный из
              чрезвычайно тонких волокон базальта, который состоит из минералов
              плагиоклаза, пироксена и оливина. Он похож на стекловолокно.
            </span>
          </p>
        </div>
      </div>

      <div
        className={`bg-linarBrown carousel lg:bg-sliderBg4 bg-no-repeat bg-cover bg-center`}
      >
        <img
          src={slider4}
          alt="image 1"
          className="w-[120px] md:w-[150px] lg:w-[240px] xl:w-fit h-fit object-cover lg:order-2"
        />
        <div className="flex flex-col gap-3 lg:order-1 xl:h-full xl:py-14 xl:ps-14">
          <h1 className="text-xl font-bold lg:text-4xl xl:text-5xl">
            Финская Фанера
          </h1>
          <p className="text-sm md:text-lg lg:text-xl xl:text-2xl lg:mt-7">
            <span className="lg:hidden">
              Этоть материал изготавливаемый путём склеивания специально
              подготовленного шпона.
            </span>
            <span className="hidden lg:inline-block xl:w-[580px]">
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
