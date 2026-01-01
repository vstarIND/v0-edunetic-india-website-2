"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CourseCard } from "@/components/course-card"
import { VideoPlayer } from "@/components/video-player"

const COURSES = [
  {
    id: 1,
    title: "Introduction to AI & Future Skills",
    description: "Foundations of AI and modern tech skills",
    videoUrl: "https://youtu.be/8Gko-J-1PdA?si=hnWb2hwBNsTV9HZB",
    isFree: true,
  },
  {
    id: 2,
    title: "AI for Students & Beginners",
    description: "Learn AI concepts with real-world clarity",
    videoUrl: "https://youtu.be/DI2gyY8WxSg?si=bxZjJ_IsLIBAmH1u",
    isFree: true,
  },
]

export default function CoursesPage() {
  const [activeVideo, setActiveVideo] = useState<{ url: string; title: string } | null>(null)

  return (
    <div className="min-h-screen bg-[#05080A] text-white selection:bg-[#00E5D4]/30">
      {/* Grid Background Effect */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#1A2328_1px,transparent_1px),linear-gradient(to_bottom,#1A2328_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none opacity-20" />

      <Navbar />

      <main className="relative pt-32 pb-24">
        <div className="container max-w-5xl mx-auto px-6">
          {/* Header Section */}
          <div className="max-w-2xl mb-16 space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Courses</h1>
            <p className="text-lg text-[#8E9BA4] leading-relaxed">
              Learn future-ready skills with <span className="text-[#00E5D4] font-medium">Edunetic India</span>. Our
              curriculum is designed to bridge the gap between education and the AI revolution.
            </p>
          </div>

          {/* Course Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {COURSES.map((course) => (
              <CourseCard
                key={course.id}
                title={course.title}
                description={course.description}
                isFree={course.isFree}
                onClickPreview={() => setActiveVideo({ url: course.videoUrl, title: course.title })}
              />
            ))}
          </div>

          {/* Institutional Trust Banner */}
          <div className="mt-24 p-8 rounded-3xl border border-[#1A2328] bg-gradient-to-b from-[#0B1215] to-transparent text-center space-y-6">
            <h2 className="text-xl font-semibold text-white/80">Trusted by modern learners nationwide</h2>
            <div className="flex flex-wrap justify-center gap-8 opacity-40 grayscale contrast-125">
              {/* Add partner logos or icons here if needed */}
              <div className="text-sm font-bold tracking-widest uppercase">Innovation</div>
              <div className="text-sm font-bold tracking-widest uppercase">Technology</div>
              <div className="text-sm font-bold tracking-widest uppercase">Education</div>
            </div>
          </div>
        </div>
      </main>

      {activeVideo && (
        <VideoPlayer videoId={activeVideo.url} title={activeVideo.title} onClose={() => setActiveVideo(null)} />
      )}

      <Footer />
    </div>
  )
}
