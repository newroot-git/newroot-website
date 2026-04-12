"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";
import SectionHeader from "@/components/shared/section-header";

function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-full h-full">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  );
}

function MetaIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-full h-full" fill="#0081FB">
      <path d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.52 1.49-3.93 3.78-3.93 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.78-1.63 1.57v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 008.44-9.9c0-5.53-4.5-10.02-10-10.02z"/>
    </svg>
  );
}

function SeoIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-full h-full" fill="none" strokeWidth={2} stroke="#22C55E">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"/>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 8v4m0 0v2m0-2h3" stroke="#22C55E" strokeWidth={2.5}/>
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-full h-full" fill="#6366F1">
      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-full h-full" fill="#0A66C2">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-full h-full" fill="#25D366">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

function ChannelSticker({ children, rotation = 3 }: { children: ReactNode; rotation?: number }) {
  return (
    <div
      className="absolute -top-3 -right-3 w-10 h-10 bg-white rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.12)] p-2 border border-foreground/[0.06]"
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      {children}
    </div>
  );
}

const channels = [
  {
    name: "Google Ads",
    description: "Show up at the exact moment someone is searching for what you offer. Intent-based targeting.",
    stat: "Avg 200% ROI",
    statSource: "Google Economic Impact",
    icon: <GoogleIcon />,
    rotation: 6,
  },
  {
    name: "Meta Ads",
    description: "Reach your ideal customer on Facebook and Instagram with visual, scroll-stopping creative.",
    stat: "3.7B daily active users",
    statSource: "Meta Q4 2024",
    icon: <MetaIcon />,
    rotation: -4,
  },
  {
    name: "SEO",
    description: "Rank for the searches your customers are making. The #1 organic result gets 18x more clicks than the #1 paid ad.",
    stat: "Top 3 results get 68.7% of clicks",
    statSource: "First Page Sage, 2026",
    icon: <SeoIcon />,
    rotation: 8,
  },
  {
    name: "Email Marketing",
    description: "Nurture leads and drive repeat business. The highest ROI channel in digital marketing.",
    stat: "$36 return per $1 spent",
    statSource: "Litmus 2024",
    icon: <EmailIcon />,
    rotation: -5,
  },
  {
    name: "LinkedIn",
    description: "B2B lead generation and thought leadership. Reach decision-makers directly.",
    stat: "80% of B2B leads",
    statSource: "LinkedIn Business",
    icon: <LinkedInIcon />,
    rotation: 4,
  },
  {
    name: "WhatsApp",
    description: "Direct messaging for high-intent leads. 98% open rates. Conversational commerce.",
    stat: "98% open rate",
    statSource: "MessageBird",
    icon: <WhatsAppIcon />,
    rotation: -7,
  },
];

export default function ChannelsGrid() {
  return (
    <section className="py-[120px] px-6">
      <div className="max-w-[1280px] mx-auto">
        <SectionHeader
          label="Channels"
          headline="Every way your customers can"
          accentWord="find you."
          subtext="Most businesses are only visible in one or two places. Your customers are everywhere — you should be too."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {channels.map((channel, i) => (
            <motion.div
              key={channel.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.06 }}
              className="relative bg-white rounded-2xl border border-foreground/[0.06] p-8 overflow-visible"
            >
              <ChannelSticker rotation={channel.rotation}>
                {channel.icon}
              </ChannelSticker>
              <h3 className="text-lg font-semibold mb-2">{channel.name}</h3>
              <p className="text-sm text-muted leading-relaxed mb-4">
                {channel.description}
              </p>
              <div className="bg-accent/[0.06] rounded-lg px-3 py-2">
                <span className="text-sm font-semibold text-accent">
                  {channel.stat}
                </span>
                <span className="text-[10px] text-muted ml-2">
                  — {channel.statSource}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
