"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { REALISE } from "@/lib/home";

export function RealiseBeat() {
  const ref = useRef<HTMLUListElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px" });

  return (
    <section
      id="realise"
      className="bg-dark-bg py-[clamp(112px,16vh,180px)] text-dark-text"
    >
      <div className="mx-auto max-w-[720px] px-5 md:px-8">
        <p className="eyebrow">{REALISE.eyebrow}</p>
        <h2 className="h2 mt-4 text-dark-text">{REALISE.h2}</h2>
        <p
          className="body-base mt-6"
          style={{ color: "rgba(231,232,240,0.78)" }}
        >
          {REALISE.body}
        </p>

        <p className="body-l mt-10 text-dark-text">{REALISE.leadIn}</p>

        <motion.ul
          ref={ref}
          className="mt-7 space-y-4"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.11 } },
          }}
        >
          {REALISE.questions.map((q) => (
            <motion.li
              key={q}
              className="flex gap-4"
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
                },
              }}
            >
              <span
                className="mt-3 h-px w-6 shrink-0 bg-accent-secondary"
                aria-hidden
              />
              <span
                className="body-base"
                style={{ color: "rgba(231,232,240,0.92)" }}
              >
                {q}
              </span>
            </motion.li>
          ))}
        </motion.ul>

        <p className="h3 mt-12 text-accent-secondary">{REALISE.closer}</p>
      </div>
    </section>
  );
}
