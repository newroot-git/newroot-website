export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  service: "websites" | "content" | "ai" | "growth";
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "They didn't just build us a website — they understood our business and built something that actually converts. Best decision we made.",
    name: "Sarah M.",
    role: "Founder",
    company: "NuHealth",
    service: "websites",
  },
  {
    quote:
      "We went from posting once a month to daily content across three platforms. And it actually sounds like us, not generic AI garbage.",
    name: "James K.",
    role: "CEO",
    company: "Meridian Co.",
    service: "content",
  },
  {
    quote:
      "The automation they built saves us 15 hours a week. That alone paid for the entire engagement within the first month.",
    name: "Priya D.",
    role: "Operations Lead",
    company: "Kinetic Labs",
    service: "ai",
  },
  {
    quote:
      "From Squarespace embarrassment to a site that closes deals. 8 days. I was skeptical about the timeline — they sent a staging link on day 4.",
    name: "Marcus W.",
    role: "CEO",
    company: "GreenCart",
    service: "websites",
  },
  {
    quote:
      "Our Google Ads were burning cash with no strategy. They restructured everything, connected it to our CRM, and we saw 3x ROAS within six weeks.",
    name: "David H.",
    role: "Marketing Director",
    company: "Apex Legal",
    service: "growth",
  },
  {
    quote:
      "I was paying three different freelancers and nothing connected. Now it's one team, one workflow, and everything actually talks to each other.",
    name: "Rachel T.",
    role: "Founder",
    company: "Bloom Studio",
    service: "ai",
  },
  {
    quote:
      "They built a content system that runs on its own. I approve stuff on Monday, and it publishes all week. I got my evenings back.",
    name: "Tom L.",
    role: "Owner",
    company: "FitTrack",
    service: "content",
  },
  {
    quote:
      "We needed a website that could handle bookings, showcase our work, and rank on Google. They delivered all three in 10 days.",
    name: "Nina P.",
    role: "Founder",
    company: "Waverly Salon",
    service: "websites",
  },
  {
    quote:
      "The SEO work alone has brought in 40+ organic leads per month. Before working with them, we were invisible on Google.",
    name: "Chris B.",
    role: "Managing Director",
    company: "StackBuild",
    service: "growth",
  },
];
