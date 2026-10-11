import AboutTextSplit from '@/components/sections/about/AboutTextSplit';
import ContactCta from '@/components/sections/contact/ContactCta';
import FaqTabbedAccordion from '@/components/sections/faq/FaqTabbedAccordion';
import FeaturesTaggedCards from '@/components/sections/features/FeaturesTaggedCards';
import HeroSplitMediaGrid from '@/components/sections/hero/HeroSplitMediaGrid';
import SocialProofMarquee from '@/components/sections/social-proof/SocialProofMarquee';
import TeamOverlayCards from '@/components/sections/team/TeamOverlayCards';
import TestimonialQuoteCards from '@/components/sections/testimonial/TestimonialQuoteCards';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";

export default function HomePage() {
  return (
    <>
  <div id="hero" data-section="hero">
    <SectionErrorBoundary name="hero">
          <HeroSplitMediaGrid
      tag="Bakersfield's Finest"
      title="Fresh Cuts & Premium Care"
      description="Experience professional barbering in Bakersfield. From classic shaves to modern fades, we ensure you leave looking your absolute best."
      primaryButton={{
        text: "Book Now",
        href: "#contact",
      }}
      secondaryButton={{
        text: "Our Services",
        href: "#services",
      }}
      items={[
        {
          imageSrc: "https://storage.googleapis.com/webild/default/no-image.jpg?id=wxri9d",
        },
        {
          imageSrc: "https://storage.googleapis.com/webild/default/no-image.jpg?id=bx6bge",
        },
      ]}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="about" data-section="about">
    <SectionErrorBoundary name="about">
          <AboutTextSplit
      title="Why Bakersfield Trusts Kenny"
      descriptions={[
        "With years of experience, Kenny provides more than just a haircut. We pride ourselves on attention to detail, efficiency, and a comfortable environment that keeps our clients returning.",
        "Our philosophy is simple: precision, speed, and genuine care. Whether you are coming in for a weekly trim or a complete style change, your satisfaction is our only metric for success.",
      ]}
      textAnimation="fade"
    />
    </SectionErrorBoundary>
  </div>

  <div id="services" data-section="services">
    <SectionErrorBoundary name="services">
          <FeaturesTaggedCards
      tag="Services"
      title="Expert Barbering Care"
      description="Our signature services designed to make you look and feel your best."
      items={[
        {
          tag: "Popular",
          title: "Klassic Kutzz",
          description: "Precision haircut and beard shaping to suit your unique facial structure.",
          primaryButton: {
            text: "Learn More",
            href: "#",
          },
          imageSrc: "https://storage.googleapis.com/webild/default/no-image.jpg?id=02ay32",
        },
        {
          tag: "Specialty",
          title: "Premium Massage",
          description: "Relax after your fresh cut with our signature tension-relieving shoulder massage.",
          primaryButton: {
            text: "Learn More",
            href: "#",
          },
          imageSrc: "https://storage.googleapis.com/webild/default/no-image.jpg?id=enh8id",
        },
        {
          tag: "Fresh",
          title: "Hot Towel Shave",
          description: "A refined shaving experience focused on skin health and ultimate smoothness.",
          primaryButton: {
            text: "Learn More",
            href: "#",
          },
          imageSrc: "https://storage.googleapis.com/webild/default/no-image.jpg?id=oid848",
        },
      ]}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="testimonials" data-section="testimonials">
    <SectionErrorBoundary name="testimonials">
          <TestimonialQuoteCards
      tag="Reviews"
      title="What Our Clients Say"
      description="Don't just take our word for it—join the community of satisfied Bakersfield residents."
      testimonials={[
        {
          name: "Alec",
          role: "Confirmed Client",
          quote: "Best barber in town no questions.",
          imageSrc: "https://storage.googleapis.com/webild/default/no-image.jpg?id=njjrir",
        },
        {
          name: "Malik",
          role: "Confirmed Client",
          quote: "A barber that can relieve your back pain! I love my massage after a fresh cut.",
          imageSrc: "https://storage.googleapis.com/webild/default/no-image.jpg?id=npwoda",
        },
        {
          name: "Candace",
          role: "Confirmed Client",
          quote: "Always a 10/10. Best barber in Bakersfield! My son won't go to anyone else.",
          imageSrc: "https://storage.googleapis.com/webild/default/no-image.jpg?id=cq3y4g",
        },
        {
          name: "Anonymous",
          role: "Regular Client",
          quote: "Kenny always does a great job with my haircut every time never disappoints.",
          imageSrc: "https://storage.googleapis.com/webild/default/no-image.jpg?id=4q4jov",
        },
        {
          name: "Local Resident",
          role: "Client",
          quote: "He’s a great barber and he’s pretty quick with the service.",
          imageSrc: "https://storage.googleapis.com/webild/default/no-image.jpg?id=nr821d",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="team" data-section="team">
    <SectionErrorBoundary name="team">
          <TeamOverlayCards
      tag="Staff"
      title="Meet the Expert"
      description="Our professional team is here to provide the best service in the industry."
      members={[
        {
          name: "Kenny Holmes",
          role: "Master Barber",
          imageSrc: "https://storage.googleapis.com/webild/default/no-image.jpg?id=5o9j8c",
        },
      ]}
      textAnimation="fade"
    />
    </SectionErrorBoundary>
  </div>

  <div id="faq" data-section="faq">
    <SectionErrorBoundary name="faq">
          <FaqTabbedAccordion
      tag="Help"
      title="Frequently Asked Questions"
      description="Answers to our most common questions."
      categories={[
        {
          name: "General",
          items: [
            {
              question: "Do I need an appointment?",
              answer: "Yes, we prioritize appointments to ensure timely service for all our clients.",
            },
            {
              question: "Do you offer massage services?",
              answer: "Yes, our Klassic Kutzz appointments include a relaxing post-cut massage.",
            },
          ],
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="social" data-section="social">
    <SectionErrorBoundary name="social">
          <SocialProofMarquee
      tag="Community"
      title="Trusted by the Best"
      description="Join Bakersfield's local community."
      names={[
        "Bakersfield Barber Association",
        "Local Style Council",
        "Professional Barbers Alliance",
        "City Hair Guide",
        "Kutzz Community Network",
        "Bakersfield Style Collective",
        "Expert Grooming Guild",
      ]}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="contact" data-section="contact">
    <SectionErrorBoundary name="contact">
          <ContactCta
      tag="Book Now"
      text="Ready for your best haircut yet? Secure your chair at Kenny's Kutzz today."
      primaryButton={{
        text: "Book Appointment",
        href: "tel:5550101",
      }}
      secondaryButton={{
        text: "Visit Us",
        href: "#",
      }}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>
    </>
  );
}
