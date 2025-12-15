export default function TermsAndConditions() {
  return (
    <main className="max-w-4xl mx-auto px-8 py-24">
      <h1 className="text-4xl font-bold mb-8">
        Terms & Conditions
      </h1>

      <p className="opacity-80 mb-6">
        Last updated: {new Date().toLocaleDateString("en-GB")}
      </p>

      <section className="space-y-6 text-sm leading-relaxed opacity-90">
        <p>
          These Terms & Conditions govern your use of this website. By accessing
          or using the site, you agree to comply with these terms.
        </p>

        <h2 className="text-xl font-semibold">
          Use of the Website
        </h2>
        <p>
          This website is provided for general information purposes only. You
          agree not to use the site for any unlawful or prohibited activity.
        </p>

        <h2 className="text-xl font-semibold">
          Information Accuracy
        </h2>
        <p>
          While we aim to keep information on this website accurate and up to
          date, we make no guarantees regarding completeness or accuracy.
          Content may be updated or changed at any time.
        </p>

        <h2 className="text-xl font-semibold">
          Intellectual Property
        </h2>
        <p>
          All content on this website, including text, graphics, logos, and
          images, is the property of Raya Gifts & Stationery unless otherwise
          stated. Content may not be copied or reused without permission.
        </p>

        <h2 className="text-xl font-semibold">
          Third-Party Links
        </h2>
        <p>
          This website may contain links to third-party websites. We are not
          responsible for the content or practices of those sites.
        </p>

        <h2 className="text-xl font-semibold">
          Limitation of Liability
        </h2>
        <p>
          We are not liable for any loss or damage arising from the use of this
          website or reliance on its content.
        </p>

        <h2 className="text-xl font-semibold">
          Changes to These Terms
        </h2>
        <p>
          We may update these Terms & Conditions from time to time. Any changes
          will be posted on this page.
        </p>

        <h2 className="text-xl font-semibold">
          Governing Law
        </h2>
        <p>
          These terms are governed by the laws of the United Kingdom.
        </p>
      </section>
    </main>
  );
}
