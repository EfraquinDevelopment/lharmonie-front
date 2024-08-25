import { Logo } from "@/components/logo";
import Link from "next/link";
import React from "react";
import content from "@/data/footer.json";

const Footer = () => {
  const {
    contactDetails,
    contactTitle,
    logoTagline,
    quickLinks,
    quickLinksTitle,
  } = content;

  return (
    <footer className="bg-lharmonie-secondary text-lharmonie-primary py-10">
      <div className="container px-4 md:px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <Logo invert clickable={false} />
          <p className="text-sm text-gray-300">{logoTagline}</p>
        </div>
        <div>
          <h3 className="font-semibold mb-4">{quickLinksTitle}</h3>
          <nav className="flex flex-col space-y-2">
            {quickLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="text-sm text-lharmonie-primary hover:text-lharmonie-primary/80"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <div>
          <h3 className="font-semibold mb-4">{contactTitle}</h3>
          <address className="text-sm text-lharmonie-primary not-italic">
            <p>Email: {contactDetails.email}</p>
            <p>Teléfono: {contactDetails.phone}</p>
            <div className="mt-4 flex space-x-4">
              {/* Add social media icons/links here */}
            </div>
          </address>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
