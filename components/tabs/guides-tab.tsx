import { Button } from "@/components/ui/button"

export default function GuidesTab() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold tracking-tight">Comprehensive Guides</h2>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-lg border p-4 transition-all hover:shadow-md">
          <h3 className="font-medium">Creating Custom Entities</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Learn how to design and implement custom entities with unique behaviors.
          </p>
          <div className="mt-3">
            <Button variant="outline" size="sm">
              Read Guide
            </Button>
          </div>
        </div>
        <div className="rounded-lg border p-4 transition-all hover:shadow-md">
          <h3 className="font-medium">World Generation</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Master the art of creating custom biomes, structures, and terrain features.
          </p>
          <div className="mt-3">
            <Button variant="outline" size="sm">
              Read Guide
            </Button>
          </div>
        </div>
        <div className="rounded-lg border p-4 transition-all hover:shadow-md">
          <h3 className="font-medium">Networking & Multiplayer</h3>
          <p className="mt-1 text-sm text-muted-foreground">Implement robust networking for multiplayer experiences.</p>
          <div className="mt-3">
            <Button variant="outline" size="sm">
              Read Guide
            </Button>
          </div>
        </div>
        <div className="rounded-lg border p-4 transition-all hover:shadow-md">
          <h3 className="font-medium">UI Development</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Create intuitive and responsive user interfaces for your mods.
          </p>
          <div className="mt-3">
            <Button variant="outline" size="sm">
              Read Guide
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

