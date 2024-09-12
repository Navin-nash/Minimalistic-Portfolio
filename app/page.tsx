import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";
import Head from "next/head";


export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5">
      <Head>
      <title>Navin Raj | Portfolio</title>
      <meta name="description" content="Portfolio of Navin Raj showcasing web development, projects, and skills in frontend and backend development." />
      <meta name="keywords" content="Navin Raj, web developer, frontend, backend, portfolio, JavaScript, Next.js" />
      <meta name="robots" content="index, follow" />
      <meta property="og:title" content="Navin Raj | Portfolio" />
      <meta property="og:description" content="Explore the portfolio of Navin Raj, featuring projects, skills, and work in web development." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://navinraj-portfolio.vercel.app/" />
      <meta property="og:image" content="/path-to-your-image.jpg" />
    </Head>
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
}
