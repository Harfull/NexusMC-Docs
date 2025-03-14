import { Button } from "@/components/ui/button"

export default function LatestUpdates() {
  return (
    <div className="mt-12 space-y-4">
      <h2 className="text-2xl font-bold tracking-tight">Latest Updates</h2>
      <div className="space-y-4">
        <div className="rounded-lg border p-4 transition-all hover:shadow-md">
          <div className="flex items-center justify-between">
            <h3 className="font-medium">New Block API Released</h3>
            <span className="text-xs text-muted-foreground">2 days ago</span>
          </div>
          <p className="mt-1 text-sm text-muted-foreground">
            We&apos;ve released a new Block API that makes it easier to create custom blocks with advanced behaviors.
          </p>
          <div className="mt-3">
            <Button variant="outline" size="sm">
              Read More
            </Button>
          </div>
        </div>
        <div className="rounded-lg border p-4 transition-all hover:shadow-md">
          <div className="flex items-center justify-between">
            <h3 className="font-medium">Performance Optimization Guide</h3>
            <span className="text-xs text-muted-foreground">1 week ago</span>
          </div>
          <p className="mt-1 text-sm text-muted-foreground">
            Learn how to optimize your Minecraft mods for better performance on low-end devices.
          </p>
          <div className="mt-3">
            <Button variant="outline" size="sm">
              Read More
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

