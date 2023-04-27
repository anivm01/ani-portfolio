import Image from "next/image";

const Hero = () => {
    return (
        <section className="bg-gradient-to-r from-ani-red to-ani-yellow flex gap-8">
            <div className="h-full w-1/2">
            <Image src="/images/ani-mihaylova.jpg" width={"500"} height={"500"} alt="Ani Mihaylova" className="object-cover mix-blend-screen rounded-full"/>
            </div>
            <div className="text-white flex flex-col items-center justify-center">
                <h1 className="w-full text-4xl">Hi, I'm Ani</h1>
                <h2 className="w-full text-lg">Creative Software Developer </h2>
                <h2 className="w-full text-lg">with a Global Perspective</h2>
            </div>
        </section>
    )
}
export default Hero;
