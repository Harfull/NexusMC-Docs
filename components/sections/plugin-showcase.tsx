import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Zap, Users, Award, BarChart } from "lucide-react"

export default function PluginShowcase() {
  return (
    <section className="py-16">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Levels Remastered</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              A comprehensive leveling system for your Minecraft server
            </p>
          </div>
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 mt-12">
          <Card className="bg-card transition-all hover:shadow-md hover:-translate-y-1">
            <CardHeader className="pb-2">
              <Zap className="h-6 w-6 text-primary mb-2" />
              <CardTitle>Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>Optimized for high-performance servers with minimal impact on TPS</CardDescription>
            </CardContent>
          </Card>

          <Card className="bg-card transition-all hover:shadow-md hover:-translate-y-1">
            <CardHeader className="pb-2">
              <Users className="h-6 w-6 text-primary mb-2" />
              <CardTitle>Multiplayer</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Designed for multiplayer environments with leaderboards and competitions
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="bg-card transition-all hover:shadow-md hover:-translate-y-1">
            <CardHeader className="pb-2">
              <Award className="h-6 w-6 text-primary mb-2" />
              <CardTitle>Rewards</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>Customizable rewards system for player progression and achievements</CardDescription>
            </CardContent>
          </Card>

          <Card className="bg-card transition-all hover:shadow-md hover:-translate-y-1">
            <CardHeader className="pb-2">
              <BarChart className="h-6 w-6 text-primary mb-2" />
              <CardTitle>Statistics</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>Detailed statistics tracking for player activities and progression</CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

