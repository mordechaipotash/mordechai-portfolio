'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Image from 'next/image'
import { projects } from '@/data/projects'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [visibleProjects, setVisibleProjects] = useState(5)
  const [isLoading, setIsLoading] = useState(false)
  const observerRef = useRef<IntersectionObserver | null>(null)
  const loadMoreRef = useRef<HTMLDivElement>(null)

  const openGallery = (project: typeof projects[0]) => {
    if (project.screenshots.length > 0) {
      setSelectedProject(project)
      setCurrentImageIndex(0)
    }
  }

  const nextImage = () => {
    if (selectedProject && currentImageIndex < selectedProject.screenshots.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1)
    }
  }

  const prevImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1)
    }
  }

  // Infinite scroll handler
  const loadMore = useCallback(() => {
    if (isLoading || visibleProjects >= projects.length) return
    
    setIsLoading(true)
    // Simulate loading delay for smooth experience
    setTimeout(() => {
      setVisibleProjects(prev => Math.min(prev + 3, projects.length))
      setIsLoading(false)
    }, 300)
  }, [isLoading, visibleProjects])

  // Set up intersection observer for infinite scroll
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadMore()
        }
      },
      { threshold: 0.1 }
    )

    if (loadMoreRef.current) {
      observerRef.current.observe(loadMoreRef.current)
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [loadMore])

  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-background to-muted/10">
      {/* Navigation Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-xl border-b border-border/10">
        <div className="max-w-5xl mx-auto px-6 py-5 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-foreground" />
            <span className="text-sm font-medium tracking-wide">Portfolio</span>
          </div>
          <a href="/hershman">
            <button className="px-5 py-2.5 text-sm font-medium text-foreground/60 hover:text-foreground transition-all border border-border/30 rounded-full hover:bg-muted/50 hover:border-border/50">
              Healthcare Opportunity →
            </button>
          </a>
        </div>
      </div>

      {/* Minimal Hero */}
      <div className="relative pt-24">
        <div className="max-w-4xl mx-auto px-6 py-32 text-center">
          <h1 className="text-6xl md:text-7xl font-extralight tracking-tight mb-6 bg-gradient-to-b from-foreground to-foreground/60 bg-clip-text text-transparent">
            Mordechai Potash
          </h1>
          <p className="text-2xl text-foreground/60 mb-12 font-light">
            I automate expensive problems with Python
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Badge variant="default" className="px-5 py-2 text-sm font-medium rounded-full bg-foreground text-background hover:bg-foreground/90 transition-all">
              Python Expert
            </Badge>
            <Badge variant="secondary" className="px-5 py-2 text-sm rounded-full border-border/30 hover:border-border/50 transition-all">Node.js</Badge>
            <Badge variant="secondary" className="px-5 py-2 text-sm rounded-full border-border/30 hover:border-border/50 transition-all">Next.js</Badge>
            <Badge variant="secondary" className="px-5 py-2 text-sm rounded-full border-border/30 hover:border-border/50 transition-all">FastAPI</Badge>
            <Badge variant="secondary" className="px-5 py-2 text-sm rounded-full border-border/30 hover:border-border/50 transition-all">Automation</Badge>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-border/30 to-transparent" />
      </div>

      {/* Projects - Single Column with Infinite Scroll */}
      <div className="max-w-5xl mx-auto px-6 py-20">
        <div className="space-y-32">
          {projects.slice(0, visibleProjects).map((project, index) => (
            <div
              key={project.id}
              className="group animate-in fade-in slide-in-from-bottom-4 duration-700"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Card 
                className={`overflow-hidden transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_20px_50px_rgba(255,255,255,0.05)] border-0 bg-card/30 backdrop-blur-sm ${
                  project.screenshots.length > 0 ? 'cursor-pointer' : ''
                }`}
                onClick={() => openGallery(project)}
              >
                {/* Preview Image - Much Larger with better aspect ratio */}
                {project.screenshots.length > 0 && (
                  <div className="relative h-[500px] w-full overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-900 dark:to-slate-800">
                    <Image
                      src={project.screenshots[0]}
                      alt={project.name}
                      fill
                      className="object-cover object-top transition-all duration-1000 group-hover:scale-105"
                      priority={index < 2}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60" />
                    
                    {/* Floating badge for additional screenshots */}
                    {project.screenshots.length > 1 && (
                      <div className="absolute top-8 right-8 bg-white/90 dark:bg-black/90 backdrop-blur-xl text-foreground px-5 py-2.5 rounded-full border border-white/20 shadow-2xl">
                        <span className="text-sm font-medium tracking-wide">+{project.screenshots.length - 1} screenshots</span>
                      </div>
                    )}
                    
                    {/* Project name overlay on image */}
                    <div className="absolute bottom-0 left-0 right-0 p-12 bg-gradient-to-t from-background via-background/90 to-transparent">
                      <h2 className="text-4xl font-light text-foreground mb-2 tracking-tight">
                        {project.name}
                      </h2>
                    </div>
                  </div>
                )}
                
                {/* Content with more padding */}
                <div className="p-12 space-y-10">
                  {!project.screenshots.length && (
                    <h2 className="text-4xl font-light mb-8 tracking-tight">
                      {project.name}
                    </h2>
                  )}
                  
                  {/* Problem & Solution with better spacing */}
                  <div className="grid md:grid-cols-2 gap-12">
                    {/* Problem */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-red-500" />
                        <p className="text-xs font-semibold text-red-600 dark:text-red-400 uppercase tracking-[0.2em]">Problem</p>
                      </div>
                      <p className="text-lg leading-relaxed text-foreground/70 font-light">
                        {project.problem}
                      </p>
                    </div>
                    
                    {/* Solution */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-green-500" />
                        <p className="text-xs font-semibold text-green-600 dark:text-green-400 uppercase tracking-[0.2em]">Solution</p>
                      </div>
                      <p className="text-lg leading-relaxed text-foreground/70 font-light">
                        {project.solution}
                      </p>
                    </div>
                  </div>
                  
                  {/* Tech Stack with better styling */}
                  <div className="flex flex-wrap gap-3 pt-6 border-t border-border/10">
                    {project.techStack.map((tech) => (
                      <Badge 
                        key={tech} 
                        variant={tech === 'Python' ? 'default' : 'outline'}
                        className={`px-5 py-2.5 text-sm font-normal rounded-full ${
                          tech === 'Python' 
                            ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white border-0 shadow-lg' 
                            : 'bg-background/50 hover:bg-background border-border/30 hover:border-border/50 transition-all'
                        }`}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
        
        {/* Load More Trigger */}
        {visibleProjects < projects.length && (
          <div 
            ref={loadMoreRef}
            className="py-12 flex justify-center"
          >
            <div className="flex space-x-2">
              <div className="w-2 h-2 bg-muted-foreground/30 rounded-full animate-pulse" />
              <div className="w-2 h-2 bg-muted-foreground/30 rounded-full animate-pulse delay-75" />
              <div className="w-2 h-2 bg-muted-foreground/30 rounded-full animate-pulse delay-150" />
            </div>
          </div>
        )}
      </div>

      {/* Image Gallery Dialog */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-4xl h-[80vh] p-0">
          {selectedProject && selectedProject.screenshots.length > 0 && (
            <div className="relative h-full">
              {/* Close button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-50 bg-black/50 text-white rounded-full p-2 hover:bg-black/70 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              
              {/* Project Title */}
              <div className="absolute top-4 left-4 z-50 bg-black/70 text-white px-3 py-2 rounded">
                <DialogTitle className="text-lg font-semibold">{selectedProject.name}</DialogTitle>
                <p className="text-sm opacity-90">
                  {currentImageIndex + 1} / {selectedProject.screenshots.length}
                </p>
              </div>
              
              {/* Main Image */}
              <div className="relative h-full w-full bg-black flex items-center justify-center">
                <Image
                  src={selectedProject.screenshots[currentImageIndex]}
                  alt={`${selectedProject.name} screenshot ${currentImageIndex + 1}`}
                  fill
                  className="object-contain"
                />
              </div>
              
              {/* Navigation */}
              {selectedProject.screenshots.length > 1 && (
                <>
                  <button
                    onClick={(e) => { e.stopPropagation(); prevImage(); }}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white rounded-full p-2 hover:bg-black/70 transition-colors disabled:opacity-50"
                    disabled={currentImageIndex === 0}
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={(e) => { e.stopPropagation(); nextImage(); }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white rounded-full p-2 hover:bg-black/70 transition-colors disabled:opacity-50"
                    disabled={currentImageIndex === selectedProject.screenshots.length - 1}
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Tech Summary - Minimalist */}
      <div className="max-w-4xl mx-auto px-6 py-32">
        <div className="text-center space-y-16">
          <h2 className="text-4xl font-extralight text-foreground/60">Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="space-y-3 p-8 rounded-2xl hover:bg-muted/30 transition-all">
              <p className="text-4xl font-extralight bg-gradient-to-br from-foreground to-foreground/60 bg-clip-text text-transparent">21</p>
              <p className="text-sm text-foreground/50 font-light">Systems Built</p>
            </div>
            <div className="space-y-3 p-8 rounded-2xl hover:bg-muted/30 transition-all">
              <p className="text-4xl font-extralight bg-gradient-to-br from-blue-600 to-blue-500 bg-clip-text text-transparent">Python</p>
              <p className="text-sm text-foreground/50 font-light">Expert Level</p>
            </div>
            <div className="space-y-3 p-8 rounded-2xl hover:bg-muted/30 transition-all">
              <p className="text-4xl font-extralight bg-gradient-to-br from-foreground to-foreground/60 bg-clip-text text-transparent">25K+</p>
              <p className="text-sm text-foreground/50 font-light">Documents</p>
            </div>
            <div className="space-y-3 p-8 rounded-2xl hover:bg-muted/30 transition-all">
              <p className="text-4xl font-extralight bg-gradient-to-br from-foreground to-foreground/60 bg-clip-text text-transparent">1000s</p>
              <p className="text-sm text-foreground/50 font-light">Hours Saved</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Contact Section */}
      <div className="border-t border-border/10 bg-gradient-to-b from-background to-muted/20">
        <div className="max-w-4xl mx-auto px-6 py-24">
          <div className="text-center space-y-8">
            <h3 className="text-3xl font-extralight text-foreground/80">Let&apos;s Build Something Together</h3>
            <p className="text-lg text-foreground/50 max-w-2xl mx-auto font-light leading-relaxed">
              Specializing in Python automation, secure APIs, and cloud infrastructure for production systems
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <button 
                onClick={() => {
                  navigator.clipboard.writeText('mordechaipotash@gmail.com');
                  const event = new CustomEvent('toast', { 
                    detail: { title: "✅ Email copied!", description: "mordechaipotash@gmail.com" }
                  });
                  window.dispatchEvent(event);
                }}
                className="px-10 py-4 bg-foreground text-background rounded-full font-medium hover:bg-foreground/90 transition-all text-sm tracking-wide shadow-xl"
              >
                Copy Email
              </button>
              <a href="/hershman">
                <button className="px-10 py-4 border border-border/30 rounded-full font-medium hover:bg-muted/50 hover:border-border/50 transition-all text-sm tracking-wide">
                  Healthcare Opportunity →
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}