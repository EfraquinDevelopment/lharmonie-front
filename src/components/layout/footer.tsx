import { Logo } from "@/components/logo";
import Link from "next/link";
import React from "react";
import content from "@/data/footer.json";
import {
  SiFacebook,
  SiInstagram,
  SiSpotify,
  SiX,
} from "@icons-pack/react-simple-icons";
import Heading from "./heading";

type SocialMedia = {
  label: string;
  href: string;
};

interface SocialMediaLinksProps {
  socialMedia: SocialMedia[];
}

const socialMediaIcons: Record<string, React.ElementType> = {
  facebook: SiFacebook,
  instagram: SiInstagram,
  twitter: SiX,
  spotify: SiSpotify,
};

const SocialMediaLinks: React.FC<SocialMediaLinksProps> = ({ socialMedia }) => (
  <div className="flex space-x-4">
    {socialMedia.map((social) => {
      const Icon = socialMediaIcons[social.label.toLowerCase()];
      return (
        <a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#8B7355] hover:text-[#5D4D3A] transition-colors duration-300"
          aria-label={social.label}
        >
          <Icon size={20} />
        </a>
      );
    })}
  </div>
);

const Footer: React.FC = () => {
  const {
    contactDetails,
    logoTagline,
    quickLinks,
    quickLinksTitle,
    socialMedia,
  } = content;

  return (
    <footer className="bg-[#f8f8f5] py-12 border-t border-[#e0d8c9]">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <Logo color="#8B7355" clickable={false} />
            <p className="text-sm leading-relaxed  max-w-md mb-4">
              {logoTagline}
            </p>
            <SocialMediaLinks socialMedia={socialMedia} />
          </div>
          <div>
            <Heading level={2} className="!text-lg font-semibold mb-4">
              {quickLinksTitle}
            </Heading>
            <ul className="space-y-2">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm hover:underline transition-colors duration-300"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Heading level={2} className="!text-lg font-semibold mb-4">
              Contacto
            </Heading>
            <ul className="space-y-2 text-sm">
              <li>Email: {contactDetails.email}</li>
              <li>Teléfono: {contactDetails.phone}</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-[#e0d8c9] pt-6 mt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs">
            &copy; {new Date().getFullYear()} Lharmonie. Todos los derechos
            reservados.
          </p>
          <div className="mt-4 md:mt-0 space-x-4">
            <Link
              href="/terminos"
              className="text-xs hover: transition-colors duration-300"
            >
              Términos de Servicio
            </Link>
            <Link
              href="/privacidad"
              className="text-xs hover: transition-colors duration-300"
            >
              Política de Privacidad
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
