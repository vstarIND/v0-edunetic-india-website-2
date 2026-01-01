"use client"

import { use, useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Play, Clock, Users, Star, ChevronRight, Lock } from "lucide-react"
import Image from "next/image"
import { VideoPlayer } from "@/components/video-player"
import Link from "next/link"

// Course data (in a real app, this would come from a database)
const coursesData: { [key: string]: any } = {
  "1": {
    id: 1,
    title: "Introduction to AI & Machine Learning",
    instructor: "Raul John Aju",
    instructorTitle: "The AI Kid of India",
    description:
      "Master the fundamentals of Artificial Intelligence and Machine Learning with hands-on projects and real-world applications. This comprehensive course covers everything from basic concepts to building your first AI models.",
    thumbnail: "/ai-machine-learning-futuristic-technology.jpg",
    playlistUrl: "https://youtube.com/playlist?list=YOUR_PLAYLIST_ID_1",
    duration: "12 hours",
    students: "50+",
    rating: 4.9,
    reviews: 28,
    isPaid: false,
    videoId: "dQw4w9WgXcQ",
    videos: [
      {
        id: 1,
        title: "Course Introduction & Overview",
        duration: "15:30",
        videoId: "dQw4w9WgXcQ",
        isLocked: false,
      },
      {
        id: 2,
        title: "What is Artificial Intelligence?",
        duration: "22:45",
        videoId: "dQw4w9WgXcQ",
        isLocked: false,
      },
      {
        id: 3,
        title: "Machine Learning Fundamentals",
        duration: "28:15",
        videoId: "dQw4w9WgXcQ",
        isLocked: false,
      },
      {
        id: 4,
        title: "Python Programming Basics",
        duration: "35:20",
        videoId: "dQw4w9WgXcQ",
        isLocked: false,
      },
      {
        id: 5,
        title: "Introduction to Neural Networks",
        duration: "30:10",
        videoId: "dQw4w9WgXcQ",
        isLocked: false,
      },
    ],
    learningOutcomes: [
      "Understand core AI and ML concepts",
      "Build machine learning models from scratch",
      "Work with popular Python libraries like NumPy and Pandas",
      "Implement neural networks using TensorFlow",
      "Apply AI techniques to real-world problems",
      "Create a portfolio of AI projects",
    ],
  },
  "2": {
    id: 2,
    title: "Advanced AI Development & Applications",
    instructor: "Raul John Aju",
    instructorTitle: "The AI Kid of India",
    description:
      "Dive deep into advanced AI concepts, neural networks, and cutting-edge applications that are shaping the future. Build production-ready AI systems and deploy them at scale.",
    thumbnail: "/advanced-ai-neural-networks-technology.jpg",
    playlistUrl: "https://youtube.com/playlist?list=YOUR_PLAYLIST_ID_2",
    duration: "18 hours",
    students: "30+",
    rating: 5.0,
    reviews: 15,
    isPaid: true,
    price: "₹4,999",
    videoId: "dQw4w9WgXcQ",
    videos: [
      {
        id: 1,
        title: "Advanced Course Introduction",
        duration: "12:30",
        videoId: "dQw4w9WgXcQ",
        isLocked: false,
      },
      {
        id: 2,
        title: "Deep Learning Architectures",
        duration: "40:15",
        videoId: "dQw4w9WgXcQ",
        isLocked: true,
      },
      {
        id: 3,
        title: "Computer Vision with CNNs",
        duration: "45:20",
        videoId: "dQw4w9WgXcQ",
        isLocked: true,
      },
      {
        id: 4,
        title: "Natural Language Processing",
        duration: "50:10",
        videoId: "dQw4w9WgXcQ",
        isLocked: true,
      },
      {
        id: 5,
        title: "Reinforcement Learning Basics",
        duration: "38:45",
        videoId: "dQw4w9WgXcQ",
        isLocked: true,
      },
    ],
    learningOutcomes: [
      "Master advanced neural network architectures",
      "Build computer vision applications",
      "Develop NLP and chatbot systems",
      "Implement reinforcement learning algorithms",
      "Deploy AI models to production",
      "Optimize AI systems for performance",
    ],
  },
}

export default function CoursePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const course = coursesData[id]
  const [selectedVideo, setSelectedVideo] = useState<{ videoId: string; title: string } | null>(null)

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">Course Not Found</h1>
          <Button asChild>
            <Link href="/courses">Back to Courses</Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <ChevronRight size={16} />
            <Link href="/courses" className="hover:text-primary transition-colors">
              Courses
            </Link>
            <ChevronRight size={16} />
            <span className="text-foreground">{course.title}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Course Header */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <div
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${course.isPaid ? "bg-primary text-background" : "bg-secondary text-background"}`}
                  >
                    {course.isPaid ? course.price : "FREE COURSE"}
                  </div>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground">{course.title}</h1>
                <p className="text-lg text-primary font-medium">
                  {course.instructor} - {course.instructorTitle}
                </p>
                <p className="text-muted-foreground leading-relaxed">{course.description}</p>

                {/* Meta Info */}
                <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Clock size={16} className="text-primary" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users size={16} className="text-primary" />
                    <span>{course.students} students</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star size={16} className="text-primary fill-primary" />
                    <span>
                      {course.rating} ({course.reviews} reviews)
                    </span>
                  </div>
                </div>
              </div>

              {/* Thumbnail & Preview */}
              <Card className="bg-card border-border overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative aspect-video bg-muted group cursor-pointer">
                    <Image
                      src={course.thumbnail || "/placeholder.svg"}
                      alt={course.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div
                      className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      onClick={() => setSelectedVideo({ videoId: course.videoId, title: course.title })}
                    >
                      <div className="w-20 h-20 rounded-full bg-primary/90 flex items-center justify-center neon-glow">
                        <Play className="w-10 h-10 text-background fill-background ml-1" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Learning Outcomes */}
              <Card className="bg-card border-border">
                <CardContent className="p-6 space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">What You'll Learn</h2>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {course.learningOutcomes.map((outcome: string, index: number) => (
                      <li key={index} className="flex items-start gap-3 text-muted-foreground">
                        <span className="text-primary mt-1">✓</span>
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Course Content */}
              <Card className="bg-card border-border">
                <CardContent className="p-6 space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">Course Content</h2>
                  <div className="space-y-2">
                    {course.videos.map((video: any, index: number) => (
                      <div
                        key={video.id}
                        className={`flex items-center justify-between p-4 rounded-lg border border-border hover:border-primary/50 transition-all ${
                          video.isLocked ? "opacity-60" : "cursor-pointer"
                        }`}
                        onClick={() =>
                          !video.isLocked && setSelectedVideo({ videoId: video.videoId, title: video.title })
                        }
                      >
                        <div className="flex items-center gap-4">
                          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-semibold text-sm">
                            {index + 1}
                          </div>
                          <div>
                            <h3 className="font-medium text-foreground">{video.title}</h3>
                            <p className="text-sm text-muted-foreground">{video.duration}</p>
                          </div>
                        </div>
                        {video.isLocked ? (
                          <Lock size={20} className="text-muted-foreground" />
                        ) : (
                          <Play size={20} className="text-primary" />
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Card className="bg-card border-border sticky top-24">
                <CardContent className="p-6 space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-foreground">{course.isPaid ? course.price : "Free"}</h3>
                    <Button className="w-full bg-primary text-background hover:bg-primary/90 neon-glow font-semibold">
                      {course.isPaid ? (
                        <>
                          <Lock size={16} className="mr-2" />
                          Enroll Now
                        </>
                      ) : (
                        <>
                          <Play size={16} className="mr-2" />
                          Start Learning
                        </>
                      )}
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full border-primary text-primary hover:bg-primary/10 font-semibold bg-transparent"
                      onClick={() => setSelectedVideo({ videoId: course.videoId, title: course.title })}
                    >
                      Watch Preview
                    </Button>
                  </div>

                  <div className="border-t border-border pt-6 space-y-4">
                    <h4 className="font-semibold text-foreground">This course includes:</h4>
                    <ul className="space-y-3 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-0.5">✓</span>
                        <span>{course.duration} of video content</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-0.5">✓</span>
                        <span>Lifetime access to course materials</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-0.5">✓</span>
                        <span>Certificate of completion</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-0.5">✓</span>
                        <span>Access on mobile and desktop</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />

      {/* Video Player Modal */}
      {selectedVideo && (
        <VideoPlayer
          videoId={selectedVideo.videoId}
          title={selectedVideo.title}
          onClose={() => setSelectedVideo(null)}
        />
      )}
    </div>
  )
}
