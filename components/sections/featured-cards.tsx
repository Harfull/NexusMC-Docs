import Link from "next/link"
import { BookOpen, Code, Compass, FileText } from "lucide-react"

export default function FeaturedCards() {
  return (
    <div className="mx-auto grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:max-w-5xl">
      <Link
        href="#"
        className="group relative overflow-hidden rounded-lg border bg-background p-6 transition-all hover:shadow-md hover:-translate-y-1"
      >
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
          <BookOpen className="h-5 w-5 text-primary" />
        </div>
        <div className="mt-3 space-y-2">
          <h3 className="font-semibold">Introduction</h3>
          <p className="text-sm text-muted-foreground">
            Learn about the core concepts and architecture of our Minecraft studio.
          </p>
        </div>
        <span className="absolute right-4 top-4 opacity-0 transition-opacity group-hover:opacity-100">
          <Compass className="h-4 w-4" />
        </span>
      </Link>
      <Link
        href="#"
        className="group relative overflow-hidden rounded-lg border bg-background p-6 transition-all hover:shadow-md hover:-translate-y-1"
      >
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
          <Code className="h-5 w-5 text-primary" />
        </div>
        <div className="mt-3 space-y-2">
          <h3 className="font-semibold">Installation</h3>
          <p className="text-sm text-muted-foreground">
            Step-by-step guides to setting up your development environment.
          </p>
        </div>
        <span className="absolute right-4 top-4 opacity-0 transition-opacity group-hover:opacity-100">
          <Compass className="h-4 w-4" />
        </span>
      </Link>
      <Link
        href="#"
        className="group relative overflow-hidden rounded-lg border bg-background p-6 transition-all hover:shadow-md hover:-translate-y-1"
      >
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
          <FileText className="h-5 w-5 text-primary" />
        </div>
        <div className="mt-3 space-y-2">
          <h3 className="font-semibold">Tutorials</h3>
          <p className="text-sm text-muted-foreground">
            Hands-on tutorials to help you build your first Minecraft mod.
          </p>
        </div>
        <span className="absolute right-4 top-4 opacity-0 transition-opacity group-hover:opacity-100">
          <Compass className="h-4 w-4" />
        </span>
      </Link>
    </div>
  )
}

