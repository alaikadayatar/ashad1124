import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Education } from "@/components/education";
import { Hero } from "@/components/hero";
import { Objective } from "@/components/objective";
import { Project } from "@/components/project";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Skills } from "@/components/skills";
import { Strengths } from "@/components/strengths";

export default function Home() {
  return (
    <div className="page" id="top">
      <a href="#about" className="skip">
        Skip to about
      </a>
      <SiteHeader />
      <main className="site-main" id="content">
        <Hero />
        <About />
        <Education />
        <Skills />
        <Project />
        <Strengths />
        <Objective />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}
