import FooterSimple from '@/components/sections/footer/FooterSimple';
import NavbarInline from '@/components/ui/NavbarInline';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";
import SiteBackgroundSlot from "@/components/ui/SiteBackgroundSlot";
import { Outlet } from 'react-router-dom';
import { StyleProvider } from "@/components/ui/StyleProvider";

export default function Layout() {
  const navItems = [
  {
    "name": "New Arrivals",
    "href": "#new-arrivals"
  },
  {
    "name": "Activity",
    "href": "#activity"
  },
  {
    "name": "Shop",
    "href": "#best-sellers"
  },
  {
    "name": "Hero",
    "href": "#hero"
  },
  {
    "name": "About",
    "href": "#about"
  },
  {
    "name": "Complete Look",
    "href": "#complete-look"
  },
  {
    "name": "Editorial",
    "href": "#editorial"
  }
];

  return (
    <StyleProvider buttonVariant="bounce" siteBackground="noise" heroBackground="gradientBars">
      <SiteBackgroundSlot />
      <SectionErrorBoundary name="navbar">
        <NavbarInline
      logo="LUXE MOVE"
      ctaButton={{
        text: "SHOP NOW",
        href: "#new-arrivals",
      }}
     navItems={navItems} />
      </SectionErrorBoundary>
      <main className="flex-grow">
        <Outlet />
      </main>
      <SectionErrorBoundary name="footer">
        <FooterSimple
      brand="LUXE MOVE"
      columns={[
        {
          title: "Shop",
          items: [
            {
              label: "All",
              href: "#",
            },
            {
              label: "Pilates",
              href: "#",
            },
            {
              label: "Yoga",
              href: "#",
            },
          ],
        },
        {
          title: "Support",
          items: [
            {
              label: "FAQ",
              href: "#",
            },
            {
              label: "Shipping",
              href: "#",
            },
            {
              label: "Returns",
              href: "#",
            },
          ],
        },
      ]}
      copyright="© 2024 Luxe Move Taiwan. All rights reserved."
      links={[
        {
          label: "Privacy Policy",
          href: "#",
        },
        {
          label: "Terms of Service",
          href: "#",
        },
      ]}
    />
      </SectionErrorBoundary>
    </StyleProvider>
  );
}
