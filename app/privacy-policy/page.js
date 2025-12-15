export default function PrivacyPolicy() {
  return (
    <main className="max-w-4xl mx-auto px-8 py-24">
      <h1 className="text-4xl font-bold mb-8">
        Privacy Policy
      </h1>

      <p className="opacity-80 mb-6">
        Last updated: {new Date().toLocaleDateString("en-GB")}
      </p>

      <section className="space-y-6 text-sm leading-relaxed opacity-90">
        <p>
          This Privacy Policy explains how we collect, use, and protect
          information when you interact with our website.
        </p>

        <h2 className="text-xl font-semibold">
          Information We Collect
        </h2>
        <p>
          We may collect basic personal information such as your name, email
          address, and any details you choose to share when submitting enquiry
          or quote request forms.
        </p>

        <h2 className="text-xl font-semibold">
          How We Use Your Information
        </h2>
        <p>
          Information submitted through our website is used solely to respond
          to enquiries, provide requested information, or discuss potential
          services.
        </p>

        <h2 className="text-xl font-semibold">
          Data Sharing
        </h2>
        <p>
          We do not sell, trade, or rent your personal information to third
          parties. Information is shared only where necessary to respond to
          your enquiry or where required by law.
        </p>

        <h2 className="text-xl font-semibold">
          Data Security
        </h2>
        <p>
          We take reasonable steps to protect your personal information.
          However, no method of transmission over the internet is completely
          secure.
        </p>

        <h2 className="text-xl font-semibold">
          Cookies
        </h2>
        <p>
          Our website may use basic cookies to improve functionality and user
          experience. For more details, please refer to our Cookie Policy.
        </p>

        <h2 className="text-xl font-semibold">
          Your Rights
        </h2>
        <p>
          You have the right to request access to, correction of, or deletion
          of your personal information. To make a request, please contact us
          using the details provided on our website.
        </p>

        <h2 className="text-xl font-semibold">
          Changes to This Policy
        </h2>
        <p>
          We may update this Privacy Policy from time to time. Any changes will
          be posted on this page.
        </p>
      </section>
    </main>
  );
}
