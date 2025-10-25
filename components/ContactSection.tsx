"use client";

import { FormEvent, useState } from "react";
import contactData from "@/data/contact.json";
import { Reveal } from "./Reveal";

export function ContactSection() {
  const { eyebrow, title, representation, direct, socials, form } = contactData;
  const [sent, setSent] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <section className="section contact" id="contact">
      <div className="section-header">
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
          <h2>{title}</h2>
        </Reveal>
      </div>
      <div className="contact-grid">
        <Reveal>
          <div className="contact-card">
            <h3>{representation.heading}</h3>
            <p>{representation.name}</p>
            <a href={`mailto:${representation.email}`}>{representation.email}</a>
            <a href={`tel:${representation.phoneLink}`}>{representation.phone}</a>
          </div>
        </Reveal>
        <Reveal delay={90}>
          <div className="contact-card">
            <h3>{direct.heading}</h3>
            <p>{direct.summary}</p>
            <a href={`mailto:${direct.email}`}>{direct.email}</a>
            <div className="socials">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </Reveal>
        <Reveal delay={180}>
          <form
            className={`contact-card form ${sent ? "sent" : ""}`}
            onSubmit={handleSubmit}
          >
            {form.fields.map((field) => (
              <label key={field.name}>
                {field.label}
                {field.type === "textarea" ? (
                  <textarea
                    name={field.name}
                    rows={3}
                    placeholder={field.placeholder}
                    required
                  />
                ) : (
                  <input
                    type={field.type}
                    name={field.name}
                    placeholder={field.placeholder}
                    required
                  />
                )}
              </label>
            ))}
            <button type="submit" className="primary-button">
              {sent ? "Sent" : "Send it"}
            </button>
            <p className="form-note">
              {sent
                ? "Message captured. Email hello@chanelmack.com to keep the vibe going."
                : form.note}
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
