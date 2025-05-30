import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";

const footerLinks = [
  {
    title: "Linked",
    href: "https://www.linkedin.com/in/jayanithya-madhushani-a5b306218/",
  },
  {
    title: "GitHub",
    href: "https://github.com/Jayanithyaa",
  },
  {
    title: "Medium",
    href: "https://medium.com/@jayanithyamadhushani",
  },
  {
    title: "HackerRank",
    href: "https://www.hackerrank.com/profile/jayanithyamadhu1",
  },
];

export const Footer = () => {
  return (
    <footer className="relative overflow-x-clip">
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10"></div>
      <div className="container">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8">
          <div className="text-white/40">&copy; 2025 Jayanithya Madhushani</div>
          <nav className="flex flex-col md:flex-row items-center gap-8">
            {footerLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                className="inline-flex items-center gap-1.5"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ArrowUpRightIcon className="size-4 pointer-events-none" />
                <span className="font-semibold">{link.title}</span>
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
