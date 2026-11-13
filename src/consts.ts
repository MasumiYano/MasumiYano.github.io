import type { SvgComponent } from "astro/types"
import Email from "@/assets/icons/email.svg"
import GitHub from "@/assets/icons/github.svg"
import LinkedIn from "@/assets/icons/linkedin.svg"
import RSS from "@/assets/icons/rss.svg"

export const SITE = {
  title: "Slow ink",
  description: "Just an MLE thinking out loud on a green hill above the web",
  locale: "en-US",
  dir: "ltr",
  defaultPageImage: "/static/opengraph-image.png",
  defaultPostImage: "/static/1200x630.png",
} as const

export const NAVIGATION = [
  { href: "/blog", label: "Blog" },
  { href: "/authors", label: "Authors" },
]

export const SOCIALS: { href: string; label: string; icon: SvgComponent }[] = [
  { href: "https://github.com/MasumiYano", label: "GitHub", icon: GitHub },
  {
    href: "https://www.linkedin.com/in/masumiyano/",
    label: "LinkedIn",
    icon: LinkedIn,
  },
  { href: "mailto:masumiy76@gmail.com", label: "Email", icon: Email },
  { href: "/rss.xml", label: "RSS", icon: RSS },
]
