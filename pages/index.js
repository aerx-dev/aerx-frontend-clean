import Head from "next/head";
import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";
import NewsLetterSection from "../components/NewsLetterSection";
import TeamSection from "../components/TeamSection";
import Layout from "../components/Layout";

export default function Home() {
  <Head>
    {/* Primary Meta Tags */}
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </Head>;
  return (
    <Layout>
      <div className="flex flex-col">
        <h1>TODO: lists most recent contents</h1>
        <div style={{ background: "white" }}>
          {[1, 1, 1].map((item, i) => (
            <div
              style={{
                margin: 20,
                height: 200,
                width: "60%",
                border: `1px solid black`,
              }}
            />
          ))}
        </div>
        {/* 
        <HeroSection />
        <FeaturesSection />
        <NewsLetterSection />
        <TeamSection />
         */}
      </div>
    </Layout>
  );
}
