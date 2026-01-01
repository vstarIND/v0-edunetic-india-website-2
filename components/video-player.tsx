"use client"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface VideoPlayerProps {
  videoId: string
  title: string
  onClose: () => void
}

export function VideoPlayer({ videoId, title, onClose }: VideoPlayerProps) {
  // Helper to extract video ID if a full URL is passed
  const getEmbedUrl = (id: string) => {
    if (id.includes("list=")) {
      const url = new URL(id)
      const listId = url.searchParams.get("list")
      return `https://www.youtube.com/embed/videoseries?list=${listId}&autoplay=1&modestbranding=1&rel=0`
    }
    if (id.includes("youtube.com") || id.includes("youtu.be")) {
      const url = new URL(id)
      let vid = ""
      if (id.includes("youtu.be")) {
        vid = url.pathname.slice(1)
      } else {
        vid = url.searchParams.get("v") || ""
      }
      return `https://www.youtube.com/embed/${vid}?autoplay=1&modestbranding=1&rel=0`
    }
    return `https://www.youtube.com/embed/${id}?autoplay=1&modestbranding=1&rel=0`
  }

  return (
    <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-300">
      <div className="relative w-full max-w-5xl group">
        {/* Close Button */}
        <Button
          onClick={onClose}
          variant="ghost"
          size="icon"
          className="absolute -top-14 right-0 text-white hover:text-[#00E5D4] hover:bg-white/10 transition-colors z-50"
        >
          <X size={28} />
        </Button>

        {/* Video Container */}
        <div className="relative aspect-video bg-[#0B1215] rounded-xl overflow-hidden border border-[#00E5D4]/20 shadow-[0_0_50px_-12px_rgba(0,229,212,0.3)]">
          <iframe
            src={getEmbedUrl(videoId)}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        </div>

        {/* Title */}
        <div className="mt-6 text-center">
          <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight">{title}</h2>
          <p className="text-[#00E5D4] text-sm mt-1 uppercase tracking-widest font-medium opacity-80">
            Edunetic Preview
          </p>
        </div>
      </div>
    </div>
  )
}
