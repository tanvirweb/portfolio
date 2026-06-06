export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLinks {
  github: string;
  linkedin: string;
}

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const socialLinks: SocialLinks = {
  github: "https://github.com/",
  linkedin: "https://linkedin.com/",
};
