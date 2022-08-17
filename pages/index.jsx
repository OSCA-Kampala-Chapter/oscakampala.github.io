
import Image from "next/image";
import Card from "../components/Card";
import cardData from "../components/metadata/metadata.js";
import bgImg from "../public/images/oscahomepage.jpg"

export default function Home() {
    const cardElement = cardData.map((data) => {
        return (
          <Card
            leadImg={`/images/leads/${data.leadImg}`}
            leadName={data.name}
            leadLang={data.lang}
            leadLinkedin={data.links[0]}
            leadTwitter={data.links[1]}
            leadGithub={data.links[2]}
          />
        );
      });
    
      return (
        <section className="grid">
          <div className="flex justify-center h-screen w-full relative">
              <Image
                src={bgImg}
                layout="fill"
                objectFit="cover"
              />
            <div
              className="containe md:mx-auto  flex-col justify-evenly text-white  text-sm absolute w-full p-5  text-center top-[300px] bg- backdrop-blur-sm bg-black/30 rounded-tl-lg rounded-tr-lg rounded-br-lg rounded-bl-lg">
              <h1 className=" text-white text-[30px] md:text-[60px]  ">
                Open Source Community <br />
                Africa{"{"}
                <span className="text-orange-400 ">Kampala</span>
                {"}"}
              </h1>
    
              <p className="mt-10  ">
                Open Source Community Africa (OSCA) is a community for open source
                lovers, enthusiasts, advocates and experts within and across Africa,
                with the sole aim of increasing the rate of credible open source
                contributions by Africans.
              </p>
            </div>
          </div>
    
          <div className="containe mx-auto text-center mt-[3rem] h-full">
            <h2>Why OSCA?</h2>
            <iframe className="container mx-auto w-[560px]" width="560" height="315" src="https://www.youtube.com/embed/oylCYRfk0NQ" title="YouTube video player" frameBorder="" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
         
          <div className="container  mx-auto mt-20">
            <h2 className="text-center py-4 bg-slate-300">The Team</h2>
            <div className=" flex flex-wrap gap-5 justify-center px-4 bg-slate-300">
              {cardElement}
            </div>
          </div>
          <div className="text-center mt-20">
            <h3>Core Values</h3>
            <ul>
              <li>Nurturing developers</li>
              <li>Nurturing developers</li>
              <li>Nurturing developers</li>
            </ul>
            <h3>Benefits</h3>
            <ul>
              <li>Nurturing developers</li>
              <li>Nurturing developers</li>
              <li>Nurturing developers</li>
            </ul>
          </div>
        </section>
      );
}
