// Contact.tsx (or your page component)
import React, { useState } from "react";
import PageWrapper from "../PageWrapper";
import { useForm, ValidationError } from "@formspree/react";

type Data = {
  company: string; // honeypot
  name: string;
  email: string;
  subject: string;
  message: string;
};

const Field: React.FC<{ label: string; id: string; children: React.ReactNode }> = ({ label, id, children }) => (
  <label htmlFor={id} className="block text-sm font-medium text-gray-300">
    {label}
    <div className="mt-1">{children}</div>
  </label>
);

export default function Contact() {
  const [data, setData] = useState<Data>({
    company: "",
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [state, handleSubmit] = useForm("meolvbdy");

  const onChange =
    (field: keyof Data) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setData((d) => ({ ...d, [field]: e.target.value }));

  // Optional: clear after success
  React.useEffect(() => {
    if (state.succeeded) {
      setData({ company: "", name: "", email: "", subject: "", message: "" });
    }
  }, [state.succeeded]);

  return (
    <PageWrapper>
      <section className="bg-black text-white min-h-[calc(100svh-4rem)] overflow-y-auto">
        <div className="max-w-screen-md mx-auto px-6 py-16">
          {/* Heading */}
          <div className="text-center mb-10">
            <h1
              className="
                text-4xl md:text-5xl font-extrabold
                bg-clip-text text-transparent
                [background-image:linear-gradient(270deg,#00f6ff,#ff6ec7,#8b5cf6,#00f6ff)]
                bg-[length:300%_300%]
                [animation:gradient-shift_8s_linear_infinite]
              "
            >
              Get in touch
            </h1>
            <p className="mt-3 text-gray-300">
              From a project idea or to reach out to me, please feel free to fill out this form! I will get back to you as soon as possible.
            </p>
          </div>

          {/* Success / Error */}
          {state.succeeded && (
            <div className="mb-6 rounded-lg bg-emerald-500/15 border border-emerald-500/30 p-4 text-emerald-300">
              Thanks! Your message was sent. I’ll reply soon.
            </div>
          )}
          {state.errors && Object.keys(state.errors).length > 0 && (
            <div className="mb-6 rounded-lg bg-red-500/15 border border-red-500/30 p-4 text-red-300">
              There was an error. Please check the fields and try again.
            </div>
          )}

          {/* Formspree handles submission via handleSubmit */}
          <form
            onSubmit={handleSubmit}
            className="bg-zinc-900/70 backdrop-blur rounded-2xl p-6 md:p-8 shadow-lg space-y-5"
            noValidate
          >
            {/* Honeypot (hidden). If filled, bots get ignored */}
            <input
              type="text"
              name="company"
              value={data.company}
              onChange={onChange("company")}
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
              data-formspree-honeypot="company"
            />

            {/* Optional: control the email subject line you receive */}
            <input
              type="hidden"
              name="_subject"
              value={`Portfolio contact: ${data.subject || "New message"}`}
            />

            {/* Optional: redirect to a thank-you page after success */}
            {/* <input type="hidden" name="_redirect" value="https://yourdomain.com/thanks" /> */}

            <div className="grid md:grid-cols-2 gap-5">
              <Field label="Your name" id="name">
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={data.name}
                  onChange={onChange("name")}
                  className="w-full rounded-lg bg-black/40 border border-white/10 px-4 py-3 outline-none focus:border-white/30"
                  placeholder="Jane Doe"
                  required
                />
              </Field>

              <Field label="Email" id="email">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={data.email}
                  onChange={onChange("email")}
                  className="w-full rounded-lg bg-black/40 border border-white/10 px-4 py-3 outline-none focus:border-white/30"
                  placeholder="jane@example.com"
                  required
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
              </Field>
            </div>

            <Field label="Subject" id="subject">
              <input
                id="subject"
                name="subject"
                type="text"
                value={data.subject}
                onChange={onChange("subject")}
                className="w-full rounded-lg bg-black/40 border border-white/10 px-4 py-3 outline-none focus:border-white/30"
                placeholder="Subject Title"
                required
              />
            </Field>

            <Field label="Message" id="message">
              <textarea
                id="message"
                name="message"
                value={data.message}
                onChange={onChange("message")}
                className="w-full min-h-40 rounded-lg bg-black/40 border border-white/10 px-4 py-3 outline-none focus:border-white/30"
                placeholder="Hello! I would like to learn more about..."
                required
              />
              <ValidationError prefix="Message" field="message" errors={state.errors} />
            </Field>

            <div className="flex flex-col md:flex-row items-center gap-3 md:gap-4">
              <button
                type="submit"
                disabled={state.submitting}
                className="
                  inline-flex items-center justify-center gap-2
                  px-6 py-3 rounded-lg font-semibold
                  bg-white text-black hover:bg-gray-200
                  disabled:opacity-60 disabled:cursor-not-allowed
                  transition
                "
              >
                {state.submitting ? (
                  <>
                    <span className="size-4 rounded-full border-2 border-black/40 border-t-black animate-spin"></span>
                    Sending…
                  </>
                ) : (
                  "Send message"
                )}
              </button>

              <a
                href="mailto:saravia2019@hotmail.com?subject=Project%20inquiry"
                className="px-6 py-3 rounded-lg border border-white/20 text-white hover:bg-white/10 transition"
              >
                Email me instead
              </a>
            </div>

            <p className="text-xs text-gray-400">
              This site is protected by basic spam checks. By contacting me, you agree to be
              contacted back about your inquiry.
            </p>
          </form>
        </div>
      </section>
    </PageWrapper>
  );
}