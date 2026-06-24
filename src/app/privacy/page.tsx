import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/constants";
import { JsonLd, breadcrumbList } from "@/components/seo/JsonLd";

const title = "Privacy Policy";
const description =
  "How Dandora collects, uses, and protects your information, including form submissions and analytics cookies.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/privacy" },
  openGraph: { title, description },
};

const LAST_UPDATED = "24 June 2026";

export default function PrivacyPage() {
  return (
    <main>
      <JsonLd
        data={breadcrumbList([
          { name: "Home", path: "/" },
          { name: "Privacy Policy", path: "/privacy" },
        ])}
      />

      <section className="mx-auto max-w-3xl px-5 pt-32 pb-20 md:px-8 md:pt-40 md:pb-28">
        <p className="eyebrow">Privacy</p>
        <h1 className="h1-display mt-4 text-[clamp(2.25rem,6vw,3.25rem)]">
          Privacy Policy
        </h1>
        <p className="micro mt-4">Last updated: {LAST_UPDATED}</p>

        <div className="prose-muted mt-10 space-y-10 text-[1.0625rem] leading-relaxed">
          <section className="space-y-4">
            <p>
              This policy explains what information {SITE.name} (&ldquo;we&rdquo;,
              &ldquo;us&rdquo;, &ldquo;our&rdquo;) collects when you visit{" "}
              {SITE.url.replace("https://", "")} or get in touch with us, why we
              collect it, and the choices you have. We have written it in plain
              language so it is easy to follow. If anything is unclear, email us at{" "}
              <a
                href={`mailto:${SITE.email}`}
                className="focus-ring link-underline text-foreground"
              >
                {SITE.email}
              </a>{" "}
              and we will explain.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="h3 text-foreground">What we collect</h2>
            <p>
              <strong className="text-foreground">Information you give us.</strong>{" "}
              When you fill in our contact form, the &ldquo;scope your build&rdquo;
              form, or one of our sector questionnaires, you choose what to share —
              typically your name, email address, phone number, company, and a
              description of what you are working on. These submissions are sent to
              us by email so we can respond. We do not run a public account system
              and we do not ask you to create a login.
            </p>
            <p>
              <strong className="text-foreground">
                Information collected automatically.
              </strong>{" "}
              Like most websites, we use analytics and advertising cookies and
              similar technologies to understand how people find and use the site.
              This may include your approximate location, device and browser type,
              the pages you view, and how you arrived (for example, from a Meta or
              Google ad). Where present, this is handled by the Meta Pixel and, if
              enabled, Google services.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="h3 text-foreground">How we use it</h2>
            <p>We use the information above to:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Reply to your enquiry and decide, honestly, whether we can help.</li>
              <li>Understand which pages and topics are useful so we can improve them.</li>
              <li>
                Measure and, where relevant, target our marketing — for example, to
                see whether an ad led to a genuine conversation.
              </li>
              <li>Keep the site secure and working as intended.</li>
            </ul>
            <p>
              We do not sell your personal information, and we do not send marketing
              emails to people who simply browsed the site.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="h3 text-foreground">Third parties we rely on</h2>
            <p>
              We use a small number of trusted providers to run the site and our
              marketing. The main ones are:
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <strong className="text-foreground">Meta (Facebook &amp; Instagram)</strong>{" "}
                — the Meta Pixel measures ad performance and lets us reach similar
                audiences. Meta processes this data under its own privacy policy.
              </li>
              <li>
                <strong className="text-foreground">Google</strong> — if Google
                services are enabled, they help us measure traffic and search
                visibility. Google processes this data under its own privacy policy.
              </li>
              <li>
                <strong className="text-foreground">Our email provider</strong> —
                form submissions reach us as email, so they pass through the email
                service we use to receive them.
              </li>
            </ul>
            <p>
              These providers act as independent controllers or processors of the
              data they receive, and we recommend reviewing their privacy policies
              for the full picture.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="h3 text-foreground">Cookies and how to opt out</h2>
            <p>
              Cookies are small files stored by your browser. We use them mainly for
              analytics and advertising. You can control or block cookies in your
              browser settings, and most browsers let you delete existing cookies or
              refuse new ones. You can also opt out of interest-based advertising
              through your device or platform settings — for example, in your Meta ad
              preferences and Google ad settings. Blocking cookies will not stop you
              from using the site or contacting us.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="h3 text-foreground">How long we keep it</h2>
            <p>
              We keep enquiry emails for as long as we need them to follow up and to
              keep a record of work we discussed or carried out, and then we delete
              them when they are no longer useful. Analytics and advertising data is
              retained according to the settings and defaults of the providers above.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="h3 text-foreground">Your choices and rights</h2>
            <p>
              You can ask us what personal information we hold about you, request a
              copy, ask us to correct it, or ask us to delete it. To make any of
              these requests, just email{" "}
              <a
                href={`mailto:${SITE.email}`}
                className="focus-ring link-underline text-foreground"
              >
                {SITE.email}
              </a>
              . The simplest way to limit what we collect is to avoid submitting a
              form and to manage cookies in your browser as described above.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="h3 text-foreground">Changes to this policy</h2>
            <p>
              We may update this policy as our site and tools change. When we do, we
              will revise the &ldquo;last updated&rdquo; date at the top of this page.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="h3 text-foreground">Contact us</h2>
            <p>
              Questions about your privacy or this policy? Email us at{" "}
              <a
                href={`mailto:${SITE.email}`}
                className="focus-ring link-underline text-foreground"
              >
                {SITE.email}
              </a>{" "}
              or visit our{" "}
              <Link href="/contact" className="focus-ring link-underline text-foreground">
                contact page
              </Link>
              . We are based in {SITE.location}, India.
            </p>
          </section>

          <p className="rounded-2xl border border-border bg-surface/60 p-5 text-sm">
            <strong className="text-foreground">Please note:</strong> this is a
            general-purpose privacy notice provided as a starting point. It is not
            legal advice. {SITE.name} should review and adapt it — ideally with a
            qualified professional — to reflect its actual data practices and any
            laws that apply to its customers.
          </p>
        </div>
      </section>
    </main>
  );
}
