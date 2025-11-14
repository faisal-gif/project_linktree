
const SocialLinkButton = ({ name, icon: Icon, url, index }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block animate-in fade-in-0 slide-in-from-bottom-4 duration-500"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div
        className="
          relative inline-flex items-center justify-center gap-2
          text-base font-medium px-5 py-3 rounded-lg
          border border-neutral/20 bg-white text-black
          hover:bg-[#b41d1d] hover:text-white transition-all duration-300
          overflow-hidden group
          w-full
        "
      >
        {/* Shimmer effect */}
        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

        {/* Icon with animation */}
        <Icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12" />

        {/* Text */}
        <span className="relative z-10">{name}</span>

        {/* Hover glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
    </a>
  );
};

export default SocialLinkButton;
