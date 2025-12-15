export default function CookiePolicy() {
  return (
    <main className="max-w-4xl mx-auto px-8 py-24">
      <h1 className="text-4xl font-bold mb-8">
        Cookie Policy
      </h1>

      <p className="opacity-80 mb-6">
        Last updated: {new Date().toLocaleDateString("en-GB")}
      </p>

      <section className="space-y-6 text-sm leading-relaxed opacity-90">
        <p>
          This Cookie Policy explains how cookies are used on our website.
        </p>

        <h2 className="text-xl font-semibold">
          What Are Cookies?
        </h2>
        <p>
          Cookies are small text files placed on your device when you visit a
          website. They help websites function properly and improve user
          experience.
        </p>

        <h2 className="text-xl font-semibold">
          How We Use Cookies
        </h2>
        <p>
          Our website may use essential cookies to ensure basic functionality,
          such as page navigation and security. These cookies do not collect
          personal data.
        </p>

        <h2 className="text-xl font-semibold">
          Third-Party Cookies
        </h2>
        <p>
          We do not intentionally use third-party cookies for advertising or
          tracking purposes. If this changes in the future, this policy will be
          updated accordingly.
        </p>

        <h2 className="text-xl font-semibold">
          Managing Cookies
        </h2>
        <p>
          You can control or delete cookies through your browser settings. Please
          note that disabling cookies may affect website functionality.
        </p>

        <h2 className="text-xl font-semibold">
          Changes to This Policy
        </h2>
        <p>
          We may update this Cookie Policy from time to time. Any updates will be
          posted on this page.
        </p>
      </section>
    </main>
  );
}
