import { Link } from "react-router-dom";

import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import { Separator } from "@/components/ui/separator";
import { Instagram } from "lucide-react";

export default function AboutUs() {
  return (
    <>
      <main className="flex flex-col min-h-screen container">
        <Navbar />

        <section className="flex container items-center justify-center border rounded-3xl h-[50vh] mt-20 ">
          <div className="pb-10">
            <h1 className="text-5xl font-bold py-4 px-36 text-center">
              About Us
            </h1>
          </div>
          <Separator orientation="vertical" />
          <div className="pb-10 pl-8 text-justify">
            <p>
              InfluenceConnect acts as a bridge between the world of social
              media influencers and the strategic needs of businesses. It
              streamlines the often-complex process of influencer marketing by
              creating a centralized platform for collaboration. Businesses can
              leverage InfluenceConnect to identify influencers whose target
              audience aligns perfectly with their brand. Influencers, on the
              other hand, gain valuable exposure and partnership opportunities
              with credible brands. This mutually beneficial ecosystem fosters
              innovative marketing campaigns that resonate with target audiences
              and propel both businesses and influencers forward in the
              ever-evolving digital landscape.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
