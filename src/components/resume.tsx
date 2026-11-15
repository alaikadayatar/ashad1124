import { MailIcon, PhoneIcon, PinIcon } from "@/components/icons";
import { ResumeSection } from "@/components/resume-section";
import {
  about,
  contact,
  education,
  objective,
  profile,
  project,
  skills,
  strengths,
} from "@/lib/content";

const body = "text-[0.92rem] leading-[1.65] text-black";
const list = "list-disc space-y-1 pl-4 text-[0.92rem] leading-[1.55] text-black marker:text-black";

export function Resume() {
  return (
    <div className="page-in mx-auto w-full max-w-[860px] px-5 sm:px-8">
      <header className="px-2 pt-8 pb-5 text-center sm:pt-10 sm:pb-6">
        <h1 className="font-serif text-[clamp(1.85rem,6.2vw,3rem)] leading-none font-bold tracking-[0.04em] text-black">
          {profile.name.toUpperCase()}
        </h1>
        <p className="mt-2.5 text-[0.72rem] tracking-[0.34em] text-black">{profile.title.toUpperCase()}</p>
      </header>

      <div className="border-t border-line" />

      <main id="content" className="grid md:grid-cols-[45fr_55fr]">
        <div className="space-y-8 py-7 md:border-r md:border-line md:py-8 md:pr-8">
          <ResumeSection id="contact" title="Contact">
            <ul className="space-y-2.5">
              <li>
                <a
                  href={contact.whatsappHref}
                  className="contact-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <PhoneIcon />
                  <span className="sr-only">WhatsApp: </span>
                  {contact.whatsappLabel}
                </a>
              </li>
              <li>
                <a href={`mailto:${contact.email}`} className="contact-link">
                  <MailIcon />
                  <span className="sr-only">Email: </span>
                  <span className="break-all">{contact.email}</span>
                </a>
              </li>
              <li className="contact-link">
                <PinIcon />
                <span className="sr-only">Location: </span>
                <span>{contact.location}</span>
              </li>
            </ul>
          </ResumeSection>

          <ResumeSection id="education" title="Education">
            <div>
              {education.map((item, index) => (
                <article
                  key={item.title}
                  className={
                    index === education.length - 1
                      ? ""
                      : "mb-4 border-b border-line pb-4"
                  }
                >
                  <h3 className="text-[0.95rem] leading-snug font-semibold text-black">
                    {item.title}
                  </h3>
                  <p className={`mt-1 ${body}`}>{item.school}</p>
                  <p className={body}>{item.place}</p>
                  <p className={body}>{item.detail}</p>
                </article>
              ))}
            </div>
          </ResumeSection>

          <ResumeSection id="skills" title="Key Skills">
            <ul className={list}>
              {skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </ResumeSection>
        </div>

        <div className="space-y-8 border-t border-line py-7 md:border-t-0 md:py-8 md:pl-8">
          <ResumeSection id="about" title="About Me">
            <div className="space-y-3">
              {about.map((paragraph) => (
                <p key={paragraph} className={body}>
                  {paragraph}
                </p>
              ))}
            </div>
          </ResumeSection>

          <ResumeSection id="experience" title="Work Experience">
            <p className={body}>Fresher</p>
          </ResumeSection>

          <ResumeSection id="strengths" title="Strengths">
            <ul className={list}>
              {strengths.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </ResumeSection>

          <ResumeSection id="objective" title="Career Objective">
            <p className={body}>{objective}</p>
          </ResumeSection>

          <ResumeSection id="projects" title="Currently Working On a Project">
            <h3 className="font-serif text-[1.15rem] leading-snug font-bold text-black">
              {project.name}
            </h3>
            <div className="mt-2.5 space-y-3">
              {project.summary.map((paragraph) => (
                <p key={paragraph} className={body}>
                  {paragraph}
                </p>
              ))}
            </div>
          </ResumeSection>
        </div>
      </main>
    </div>
  );
}
