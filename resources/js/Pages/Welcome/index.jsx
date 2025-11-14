import { Instagram, Facebook, Twitter, Youtube, Linkedin, Mail, Globe, Sparkles } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";


import ApplicationLogo from "@/Components/ApplicationLogo";
import BackgroundDecoration from "./Partial/BackgroundDecoration";
import SocialLinkButton from "./Partial/SocialLinkButton";
import { Head } from "@inertiajs/react";


const socialLinks = [
  {
    name: "Website",
    icon: Globe,
    url: "https://timesindonesia.co.id/",
    color: "hover:bg-primary"
  },
  {
    name: "Facebook",
    icon: Facebook,
    url: "https://www.facebook.com/timesindonesia.co.id/",
    color: "hover:bg-blue-600"
  },
  {
    name: "Twitter / X",
    icon: Twitter,
    url: "https://x.com/timescoid",
    color: "hover:bg-black"
  },
  {
    name: "YouTube",
    icon: Youtube,
    url: "https://www.youtube.com/@timesIDN/",
    color: "hover:bg-red-600"
  },
  {
    name: "Whatsapp",
    icon: FaWhatsapp,
    url: "https://www.whatsapp.com/channel/0029VaFG7TP29757xsqaDd2D",
    color: "hover:bg-red-600"
  },
  {
    name: "Email",
    icon: Mail,
    url: "mailto:redaksi@timesmedia.co.id",
    color: "hover:bg-primary"
  }
];

const Index = () => {
  return (
    <div className="relative min-h-screen bg-[image:var(--gradient-bg)] flex items-center justify-center p-4 sm:p-6 overflow-hidden">
      {/* Background decorations */}
      <Head title="Instagram" />
      <BackgroundDecoration />

      <div className="w-full max-w-md relative z-10">
        {/* Profile Section */}
        <div className="text-center mb-8 animate-in fade-in-0 zoom-in-95 duration-700">
          <div className="relative inline-block mb-4">
            <ApplicationLogo className="w-full h-12" />

            {/* Sparkle decoration */}
            <div className="absolute -top-4 -right-4 bg-white rounded-full p-1 shadow-lg animate-pulse-glow">
              <Sparkles className="w-3 h-3 text-primary" />
            </div>
          </div>

          {/* <h1 className="text-4xl font-bold text-white mb-3 animate-in fade-in-0 slide-in-from-bottom-2 duration-700" style={{ animationDelay: '100ms' }}>
           TIMES Indonesia
          </h1>
           */}
          <p className="text-white/90 text-lg font-medium animate-in fade-in-0 slide-in-from-bottom-2 duration-700" style={{ animationDelay: '200ms' }}>
            Content Creator | Digital Enthusiast
          </p>

          <p className="text-white/80 text-sm mt-3 max-w-sm mx-auto animate-in fade-in-0 slide-in-from-bottom-2 duration-700" style={{ animationDelay: '300ms' }}>
            Connect with me on social media and explore my content across platforms ✨
          </p>
        </div>

        {/* Social Links */}
        <div className="space-y-4">
          {socialLinks.map((link, index) => (
            <SocialLinkButton
              key={link.name}
              name={link.name}
              icon={link.icon}
              url={link.url}
              index={index}
            />
          ))}


        </div>

        {/* Footer */}
        <footer className="text-center mt-12 text-white/70 text-sm animate-in fade-in-0 duration-1000">
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="h-px w-8 bg-white/30"></div>
            <Sparkles className="w-4 h-4 animate-pulse" />
            <div className="h-px w-8 bg-white/30"></div>
          </div>
          <p>© 2024 All rights reserved</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
