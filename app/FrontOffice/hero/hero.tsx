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
          <div className="flex items-center space-x-6">
            <Image alt="image" src={"/reanault.png"} width={60} height={60} />
            <Image alt="image" src={"/volw.png"} width={60} height={60} />
            <Image alt="image" src={"/mercedes.png"} width={100} height={100} />
            <Image alt="image" src={"/toyota.png"} width={90} height={90} />
            <Image alt="image" src={"/citroe.png"} width={80} height={80} />
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
