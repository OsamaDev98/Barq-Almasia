import type { Metadata } from "next";

// This layout provides metadata for the /projects route.
// The page itself is a client component so metadata lives here.
export const metadata: Metadata = {
  title: "مشاريعنا المتميزة",
  description:
    "استعرض مشاريع شركة برق الماسية في تركيب أنظمة مكافحة الحريق والإنذار المبكر وكاميرات المراقبة الأمنية في المملكة العربية السعودية.",
  alternates: {
    canonical: "https://barqalmasia.net/projects",
  },
  openGraph: {
    title: "مشاريعنا المتميزة | برق الماسية",
    description:
      "استعرض مشاريع برق الماسية في تركيب أنظمة مكافحة الحريق والأمن والسلامة في المملكة العربية السعودية.",
    url: "https://barqalmasia.net/projects",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
