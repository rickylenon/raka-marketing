import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export default function SiteChromeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <SiteHeader />
      <main className="pt-[4.25rem] md:pt-[4.75rem]">{children}</main>
      <SiteFooter />
    </>
  );
}
