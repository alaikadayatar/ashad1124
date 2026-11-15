import { contact } from "@/lib/content";
import { Reveal } from "@/components/reveal";

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-heading">
      <Reveal>
        <h2 id="contact-heading" className="section-title">
          /contact
        </h2>
        <dl className="contact-list">
          <div>
            <dt>WhatsApp</dt>
            <dd>
              <a href={contact.whatsappHref} target="_blank" rel="noopener noreferrer">
                {contact.whatsappLabel}
              </a>
            </dd>
          </div>
          <div>
            <dt>Email</dt>
            <dd>
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </dd>
          </div>
          <div>
            <dt>LinkedIn</dt>
            <dd>
              <a href={contact.linkedinHref} target="_blank" rel="noopener noreferrer">
                {contact.linkedinLabel}
              </a>
            </dd>
          </div>
          <div>
            <dt>Location</dt>
            <dd>{contact.location}</dd>
          </div>
        </dl>
      </Reveal>
    </section>
  );
}
