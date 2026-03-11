// src/app/page.jsx
import { buildMetadata } from '@/lib/seo';
import Hero from '@/components/sections/Hero';
import MarqueeTicker from '@/components/sections/Marquee';
import FeaturedProducts from '@/components/sections/FeaturedProducts';
import WhyUs from '@/components/sections/WhyUs';
import HowItWorks from '@/components/sections/HowItWorks';
import CtaBanner from '@/components/sections/CtaBanner';

export const metadata = buildMetadata({
  title: 'Branded Promotional Products for UK Businesses',
  description:
    'Premium branded pens, notebooks, bags and corporate giveaways for UK businesses. Free visual proof, clear pricing, personal service — based in Tiverton, Devon.',
  path: '/',
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <MarqueeTicker />
      <FeaturedProducts />
      <WhyUs />
      <HowItWorks />
      <CtaBanner />
    </>
  );
}
