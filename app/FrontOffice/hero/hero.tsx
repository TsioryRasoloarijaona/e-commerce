import Nav from "./nav";
import Image from "next/image";
import StatHero from "./stat";
export default function Hero() {
  return (
    <div
      className=""
      style={{
        backgroundImage:
          'url("https://a.storyblok.com/f/143588/1600x1013/7ebdce0523/model3.jpg/m/filters:quality(80)")',
        backgroundSize: "",
        backgroundPosition: "center",
        height: "100vh",
      }}
    >
      <div className="h-screen w-screen bg-black bg-opacity-50">
        <div className="flex items-center justify-between px-4">
          <Nav />
          <div className="grid lg:grid-cols-5 grid-cols-2 items-center space-x-3 py-2">
            <div className="w-[60px] h-[60px] relative">
              <Image
                alt="image"
                src={"/reanault.png"}
                layout="fill"
                objectFit="cover"
                className="absolute top-0 left-0"
              />
            </div>
            <div className="w-[60px] h-[60px] relative">
              <Image
                alt="image"
                src={"/volw.png"}
                layout="fill"
                objectFit="cover"
                className="absolute top-0 left-0"
              />
            </div>
            <div className="w-[60px] h-[60px] relative">
              <Image
                alt="image"
                src={"/mercedes.png"}
                layout="fill"
                objectFit="cover"
                className="absolute top-0 left-0"
              />
            </div>
            <div className="w-[60px] h-[60px] relative">
              <Image
                alt="image"
                src={"/toyota.png"}
                layout="fill"
                objectFit="cover"
                className="absolute top-0 left-0"
              />
            </div>
            <div className="w-[60px] h-[60px] relative">
              <Image
                alt="image"
                src={"/citroe.png"}
                layout="fill"
                objectFit="cover"
                className="absolute top-0 left-0"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-end h-5/6">
          <div className="w-full text-center mx-auto">
            <StatHero />
          </div>
        </div>
      </div>
    </div>
  );
}
