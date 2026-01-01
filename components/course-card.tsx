"use client"

import { Eye } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface CourseCardProps {
  title: string
  description: string
  isFree?: boolean
  onClickPreview: () => void
}

export function CourseCard({ title, description, isFree = true, onClickPreview }: CourseCardProps) {
  return (
    <Card className="group relative bg-[#0B1215] border-[#1A2328] hover:border-[#00E5D4]/40 transition-all duration-500 overflow-hidden rounded-2xl">
      <CardContent className="p-8">
        {/* Hover Eye Icon Overlay */}
        <div
          className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer"
          onClick={(e) => {
            e.stopPropagation()
            onClickPreview()
          }}
        >
          <div className="p-2.5 rounded-full bg-[#00E5D4]/10 border border-[#00E5D4]/20 text-[#00E5D4] hover:bg-[#00E5D4] hover:text-[#05080A] transition-colors shadow-[0_0_15px_rgba(0,229,212,0.2)]">
            <Eye size={20} />
          </div>
        </div>

        <div className="space-y-4">
          {/* Badge */}
          {isFree && (
            <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase bg-[#00E5D4]/10 border border-[#00E5D4]/20 text-[#00E5D4]">
              Free
            </div>
          )}

          <div className="space-y-2">
            <h3 className="text-xl font-bold text-white group-hover:text-[#00E5D4] transition-colors duration-300 leading-tight">
              {title}
            </h3>
            <p className="text-[#8E9BA4] text-sm leading-relaxed line-clamp-2">{description}</p>
          </div>

          {/* Interactive Footer */}
          <div className="pt-4 flex items-center justify-between">
            <span className="text-[11px] font-medium text-[#4A555E] uppercase tracking-widest group-hover:text-[#00E5D4]/60 transition-colors">
              Self-Paced Learning
            </span>
            <button
              onClick={onClickPreview}
              className="text-[#00E5D4] text-xs font-semibold hover:underline underline-offset-4"
            >
              Preview Course
            </button>
          </div>
        </div>
      </CardContent>

      {/* Subtle bottom glow on card hover */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#00E5D4]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </Card>
  )
}
