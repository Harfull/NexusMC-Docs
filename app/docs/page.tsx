import Link from "next/link"
import { ArrowRight, FileText, BookOpen, Zap } from "lucide-react"

export default function DocsPage() {
  return (
    <div className="space-y-12">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
          Documentation
        </h1>
        <p className="text-lg text-gray-300">
          Welcome to Nexus Studios Documentation. Find guides & references for all our plugins.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 mt-8">
        <Link 
          href="/docs/levels-remastered"
          className="group relative overflow-hidden rounded-xl border border-border/50 bg-secondary/20 p-6 transition-all hover:bg-secondary/30 hover:shadow-md hover:shadow-primary/5"
        >
          <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-purple-500 to-pink-500 transform scale-y-0 group-hover:scale-y-100 transition-transform origin-top"></div>
          
          <div className="flex flex-col h-full">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20">
                <FileText className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Levels Remastered</h3>
            </div>
            
            <p className="text-gray-400 mb-6 flex-grow">
              The best recreation of the LevelsSMP plugin. Built with the latest features and improvements.
            </p>
            
            <div className="flex items-center text-primary font-medium group-hover:text-primary/80 transition-colors">
              View Documentation
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </div>
          </div>
        </Link>

        {/* Placeholder for future plugins */}
        <div className="rounded-xl border border-border/50 bg-secondary/10 p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/20">
              <Zap className="h-5 w-5 text-accent" />
            </div>
            <h3 className="text-xl font-semibold text-gray-400">Coming Soon</h3>
          </div>
          
          <p className="text-gray-500 mb-6">
            More plugins and documentation coming soon. Stay tuned!
          </p>
          
          <div className="flex items-center text-gray-500 font-medium">
            Coming Soon
            <ArrowRight className="ml-2 h-4 w-4" />
          </div>
        </div>
      </div>
    </div>
  )
}

