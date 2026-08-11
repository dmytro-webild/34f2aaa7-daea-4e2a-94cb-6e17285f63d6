import AboutText from '@/components/sections/about/AboutText';
import ContactCta from '@/components/sections/contact/ContactCta';
import FeaturesBento from '@/components/sections/features/FeaturesBento';
import FeaturesRevealCardsBento from '@/components/sections/features/FeaturesRevealCardsBento';
import HeroBillboardCarousel from '@/components/sections/hero/HeroBillboardCarousel';
import MetricsMediaCards from '@/components/sections/metrics/MetricsMediaCards';
import PricingMediaCards from '@/components/sections/pricing/PricingMediaCards';
import TestimonialMarqueeCards from '@/components/sections/testimonial/TestimonialMarqueeCards';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";

export default function HomePage() {
  return (
    <>
  <div id="hero" data-section="hero">
    <SectionErrorBoundary name="hero">
          <HeroBillboardCarousel
      tag="ATHLEISURE BOUTIQUE"
      title="MOVE WELL. LOOK EFFORTLESS."
      description="从 Pilates 到城市日常，让舒服与好看，不必成为选择题。"
      primaryButton={{
        text: "SHOP NEW ARRIVALS",
        href: "#new-arrivals",
      }}
      secondaryButton={{
        text: "OUR STORY",
        href: "#about",
      }}
      items={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/full-shot-woman-training-with-vr-glasses_23-2150405111.jpg?_wi=1",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/woman-doing-sport-home_23-2148547288.jpg?_wi=1",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-woman-with-skateboard_23-2148435996.jpg?_wi=1",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/decorative-items-cozy-interior-room-vase-with-dried-flowers-light-wooden-table_169016-4254.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/grapefruit-berries-near-shorts_23-2147750739.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/young-woman-exercising-stretching-outdoors_23-2149676929.jpg",
        },
      ]}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="new-arrivals" data-section="new-arrivals">
    <SectionErrorBoundary name="new-arrivals">
          <FeaturesRevealCardsBento
      tag="NEW COLLECTION"
      title="New Arrivals"
      description="最新都市运动服饰，兼顾机能与美学。"
      items={[
        {
          title: "Sculpt Leggings",
          description: "完美修身剪裁，透气面料。",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/sports-equipment-isolated-grey-surface_176420-11911.jpg",
        },
        {
          title: "Pilates Bodysuit",
          description: "极简线条，优雅运动感。",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/woman-sport-clothing-studio_23-2149374693.jpg",
        },
        {
          title: "Everyday Bra",
          description: "低支撑日常内衣。",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/high-angle-woman-lying-back_23-2148498692.jpg",
        },
        {
          title: "City Shorts",
          description: "都市轻运动版型。",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/warming-up_23-2148023742.jpg",
        },
        {
          title: "Seamless Top",
          description: "亲肤舒适面料。",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/fitness-sporty-girl-with-black-skin-afro-hairstyle-has-jogging-outdoor-wears-sportswear-smiles-looks-away-poses-white-wall-with-copy-space-your-sport-advertising-people-jogging_273609-29682.jpg",
        },
        {
          title: "Ribbed Set",
          description: "针织质感套装。",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-model-with-perfect-tanned-body-female-putting-hood_158538-3534.jpg",
        },
        {
          title: "Active Jacket",
          description: "防风都市外套。",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/vertical-shot-african-american-woman-wearing-coat-posing-street_181624-28798.jpg",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="activity" data-section="activity">
    <SectionErrorBoundary name="activity">
          <FeaturesBento
      tag="SHOP BY ACTIVITY"
      title="Diverse Motion"
      description="为每种身心频率设计的专属穿搭。"
      features={[
        {
          title: "Pilates",
          description: "核心控制的平衡美学。",
          bentoComponent: "media-stack",
          mediaItems: [
            {
              imageSrc: "http://img.b2bpic.net/free-photo/side-view-woman-looking-mirror_23-2149832697.jpg",
            },
            {
              imageSrc: "http://img.b2bpic.net/free-photo/side-view-women-doing-pilates-together_23-2150830109.jpg",
            },
            {
              imageSrc: "http://img.b2bpic.net/free-photo/young-brunette-female-standing-having-break-smiling_7502-9765.jpg",
            },
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/full-shot-woman-training-with-vr-glasses_23-2150405111.jpg?_wi=2",
          imageAlt: "pilates studio movement",
        },
        {
          title: "Yoga",
          description: "呼吸与伸展的轻盈感。",
          bentoComponent: "media-stack",
          mediaItems: [
            {
              imageSrc: "http://img.b2bpic.net/free-photo/young-beautiful-contemporary-dancer-posing-white-wall-copy-space_176420-7239.jpg",
            },
            {
              imageSrc: "http://img.b2bpic.net/free-photo/woman-meditating-with-tray-with-candles_23-2148896059.jpg",
            },
            {
              imageSrc: "http://img.b2bpic.net/free-photo/rolled-exercise-mat-bottle-water-parquet-floor_637285-5746.jpg",
            },
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/woman-doing-sport-home_23-2148547288.jpg?_wi=2",
          imageAlt: "pilates studio movement",
        },
        {
          title: "Everyday",
          description: "跨越场景的时尚穿搭。",
          bentoComponent: "media-stack",
          mediaItems: [
            {
              imageSrc: "http://img.b2bpic.net/free-photo/fit-woman-with-water-bottle-leaning-column-gym_23-2147949477.jpg",
            },
            {
              imageSrc: "http://img.b2bpic.net/free-photo/woman-applying-face-serum-her-beauty-routine_23-2150166415.jpg",
            },
            {
              imageSrc: "http://img.b2bpic.net/free-photo/young-adult-tokyo-streets_23-2149389172.jpg",
            },
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-woman-with-skateboard_23-2148435996.jpg?_wi=2",
          imageAlt: "pilates studio movement",
        },
      ]}
      textAnimation="fade"
    />
    </SectionErrorBoundary>
  </div>

  <div id="best-sellers" data-section="best-sellers">
    <SectionErrorBoundary name="best-sellers">
          <PricingMediaCards
      tag="BEST SELLERS"
      title="Brand Favorites"
      description="都市女性最爱的常态化单品。"
      plans={[
        {
          tag: "Top Rated",
          price: "NT$ 990",
          period: "单品",
          features: [
            "四向弹性面料",
            "高腰收腹剪裁",
            "速干吸湿",
          ],
          primaryButton: {
            text: "VIEW PRODUCT",
            href: "#",
          },
          imageSrc: "http://img.b2bpic.net/free-photo/bed-linen-background-home-decor_53876-133367.jpg",
        },
        {
          tag: "Essentials",
          price: "NT$ 1,290",
          period: "套装",
          features: [
            "极简设计",
            "零触感贴合",
            "城市百搭色",
          ],
          primaryButton: {
            text: "VIEW PRODUCT",
            href: "#",
          },
          imageSrc: "http://img.b2bpic.net/free-photo/workout-clothes-sports-ba-running_1303-1763.jpg",
        },
        {
          tag: "New In",
          price: "NT$ 790",
          period: "单品",
          features: [
            "轻盈透气",
            "支撑性强",
            "环保面料",
          ],
          primaryButton: {
            text: "VIEW PRODUCT",
            href: "#",
          },
          imageSrc: "http://img.b2bpic.net/free-photo/still-life-composition-sport-elements_23-2149006303.jpg",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="about" data-section="about">
    <SectionErrorBoundary name="about">
          <AboutText
      title="质感，不需要昂贵。"
      primaryButton={{
        text: "Read Our Philosophy",
        href: "#",
      }}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="complete-look" data-section="complete-look">
    <SectionErrorBoundary name="complete-look">
          <MetricsMediaCards
      tag="COMPLETE THE LOOK"
      title="Build Your Style"
      description="Mix & Match 你的都市运动穿搭。"
      metrics={[
        {
          value: "100+",
          title: "组合方式",
          description: "自由搭配你的运动与日常衣橱。",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-fit-athlete-outdoor_23-2148381893.jpg",
        },
        {
          value: "15",
          title: "设计细节",
          description: "每一个缝线都为都市美学服务。",
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-transgender-wearing-sunglasses_23-2149105415.jpg",
        },
      ]}
      textAnimation="fade"
    />
    </SectionErrorBoundary>
  </div>

  <div id="editorial" data-section="editorial">
    <SectionErrorBoundary name="editorial">
          <TestimonialMarqueeCards
      tag="LIFESTYLE"
      title="City Editorial"
      description="不仅是运动，更是你的都市日常态度。"
      testimonials={[
        {
          name: "Coffee Session",
          role: "Cafe Mood",
          quote: "从健身房到咖啡厅， effortlessly.",
          imageSrc: "http://img.b2bpic.net/free-photo/young-woman-drinking-coffee-talking-phone-cafe_1303-27372.jpg",
        },
        {
          name: "Modern Living",
          role: "Apartment",
          quote: "居家运动也是一种仪式感。",
          imageSrc: "http://img.b2bpic.net/free-photo/crop-woman-sitting-book-chocolate_23-2147888585.jpg",
        },
        {
          name: "Street Chic",
          role: "City Street",
          quote: "穿出自信的都市节奏。",
          imageSrc: "http://img.b2bpic.net/free-photo/vertical-shot-serious-curly-haired-woman-dressed-brown-sportswear-carries-rolled-karemat-goes-sport-regularly-looks-away-poses-against-modern-building-city-healthy-lifestyle-concept_273609-60545.jpg",
        },
        {
          name: "Weekend Vibe",
          role: "Studio",
          quote: "周末 Pilates 的完美陪伴。",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-fitness-girl-doing-yoga-rubber-mat-home-workout-indoors-kitchen-wearing_1258-200209.jpg",
        },
        {
          name: "Urban Flow",
          role: "Studio",
          quote: "专注当下的自我对话。",
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-couple-decorating-home_23-2150633264.jpg",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="contact" data-section="contact">
    <SectionErrorBoundary name="contact">
          <ContactCta
      tag="STAY CONNECTED"
      text="订阅品牌通讯，获取最新都市风格灵感与优先购买权。"
      primaryButton={{
        text: "JOIN NOW",
        href: "#",
      }}
      secondaryButton={{
        text: "FOLLOW US",
        href: "#",
      }}
      textAnimation="fade"
    />
    </SectionErrorBoundary>
  </div>
    </>
  );
}
