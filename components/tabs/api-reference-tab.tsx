import { Button } from "@/components/ui/button"

export default function ApiReferenceTab() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold tracking-tight">API Reference</h2>
      <div className="rounded-lg border">
        <div className="border-b p-4">
          <h3 className="font-medium">Block API</h3>
          <p className="mt-1 text-sm text-muted-foreground">Complete reference for creating and manipulating blocks.</p>
          <div className="mt-3">
            <Button variant="outline" size="sm">
              View Reference
            </Button>
          </div>
        </div>
        <div className="border-b p-4">
          <h3 className="font-medium">Entity API</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Documentation for entity creation and behavior programming.
          </p>
          <div className="mt-3">
            <Button variant="outline" size="sm">
              View Reference
            </Button>
          </div>
        </div>
        <div className="border-b p-4">
          <h3 className="font-medium">Rendering API</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Learn how to create custom models, textures, and visual effects.
          </p>
          <div className="mt-3">
            <Button variant="outline" size="sm">
              View Reference
            </Button>
          </div>
        </div>
        <div className="p-4">
          <h3 className="font-medium">Events API</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Comprehensive guide to the event system and custom event creation.
          </p>
          <div className="mt-3">
            <Button variant="outline" size="sm">
              View Reference
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

