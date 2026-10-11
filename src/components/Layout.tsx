import FooterBrand from '@/components/sections/footer/FooterBrand';
import NavbarDropdown from '@/components/ui/NavbarDropdown';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";
import SiteBackgroundSlot from "@/components/ui/SiteBackgroundSlot";
import { Outlet } from 'react-router-dom';
import { StyleProvider } from "@/components/ui/StyleProvider";

export default function Layout() {
  const navItems = [
  {
    "name": "About",
    "href": "#about"
  },
  {
    "name": "Services",
    "href": "#services"
  },
  {
    "name": "Testimonials",
    "href": "#testimonials"
  },
  {
    "name": "Contact",
    "href": "#contact"
  },
  {
    "name": "Hero",
    "href": "#hero"
  },
  {
    "name": "Team",
    "href": "#team"
  },
  {
    "name": "Faq",
    "href": "#faq"
  }
];

  return (
    <StyleProvider buttonVariant="bounce" siteBackground="gridDots" heroBackground="lightRaysCenter">
      <SiteBackgroundSlot />
      <SectionErrorBoundary name="navbar">
        <NavbarDropdown
      logo="KENNY'S KUTZZ"
      ctaButton={{
        text: "Book Appointment",
        href: "https://booksy.com/en-us/762624_kennyskutzz_barber-shop_134633_bakersfield#ba_s=sh_1",
      }}
     navItems={navItems} />
      </SectionErrorBoundary>
      <main className="flex-grow">
        <Outlet />
      </main>
      <SectionErrorBoundary name="footer">
        <FooterBrand
      brand="KENNY'S KUTZZ"
      columns={[
        {
          items: [
            {
              label: "About",
              href: "#about",
            },
            {
              label: "Services",
              href: "#services",
            },
          ],
        },
        {
          items: [
            {
              label: "Book Now",
              href: "#contact",
            },
            {
              label: "Privacy Policy",
              href: "#",
            },
          ],
        },
      ]}
    />
      </SectionErrorBoundary>
    </StyleProvider>
  );
}
