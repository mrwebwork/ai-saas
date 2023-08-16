"use client";

import { useRouter } from "next/navigation";

import { Card } from "@/components/ui/card";

import { cn } from "@/lib/utils";

import {
  ArrowRight,
  Code,
  ImageIcon,
  MessageSquare,
  Music,
  VideoIcon,
} from "lucide-react";

const tools = [
  {
    label: "Conversation",
    icon: MessageSquare,
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
    href: "/conversation",
  },
  {
    label: "Image Generation",
    icon: ImageIcon,
    href: "/image",
    bgColor: "bg-fuchsia-500/10",
    color: "text-fuchsia-500",
  },
  {
    label: "Video Generation",
    icon: VideoIcon,
    href: "/video",
    bgColor: "bg-amber-500/10",
    color: "text-amber-500",
  },
  {
    label: "Music Generation",
    icon: Music,
    href: "/music",
    bgColor: "bg-emerald-500/10",
    color: "text-emerald-500",
  },
  {
    label: "Code Generation",
    icon: Code,
    href: "/code",
    bgColor: "bg-rose-500/10",
    color: "text-rose-500",
  },
];

const DashboardPage = () => {
  const router = useRouter();
  return (
    <div>
      <div className="mb-8 space-y-3 px-3 md:px-0">
        <h2 className="text-3xl md:text-4xl font-bold text-center ">
          {/* //? Other header titles  */}
          {/* Next-Level AI Integration. */}
          {/* Dive into AI Mastery */}
          AI Excellence Awaits
        </h2>
        <p className="text-muted-foreground font-normal text-md md:text-lg text-center">
          {/* //? Other subtitles  */}
          {/* Experience Next-gen SaaS. Witness AI evolution today. */}
          Embrace the future today and see AI in action.
        </p>
      </div>
      <div className="px-4 md:px-20 lg:px-32 space-y-3 max-w-7xl mx-auto">
        {tools.map((tool) => (
          <Card
            onClick={() => router.push(tool.href)}
            key={tool.href}
            className="p-4 border-black/5 flex items-center justify-between hover:shadow-lg transition cursor-pointer"
          >
            <div className="flex items-center gap-x-4">
              <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                <tool.icon className={cn("w-8 h-8", tool.color)} />
              </div>
              <div className="font-semibold">{tool.label}</div>
            </div>
            <ArrowRight className="w-6 h-6" />
          </Card>
        ))}
      </div>
    </div>
  );
};

export default DashboardPage;
