"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import GettingStartedTab from "@/components/tabs/getting-started-tab"
import GuidesTab from "@/components/tabs/guides-tab"
import ApiReferenceTab from "@/components/tabs/api-reference-tab"

export default function DocsTabs() {
  return (
    <>
      <Tabs defaultValue="getting-started" className="mt-6 w-full">
        <TabsList className="w-full justify-start rounded-none border-b bg-transparent p-0">
          <TabsTrigger
            value="getting-started"
            className="rounded-none border-b-2 border-b-transparent bg-transparent px-4 py-2 font-medium text-muted-foreground hover:text-foreground data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
          >
            Getting Started
          </TabsTrigger>
          <TabsTrigger
            value="guides"
            className="rounded-none border-b-2 border-b-transparent bg-transparent px-4 py-2 font-medium text-muted-foreground hover:text-foreground data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
          >
            Guides
          </TabsTrigger>
          <TabsTrigger
            value="api"
            className="rounded-none border-b-2 border-b-transparent bg-transparent px-4 py-2 font-medium text-muted-foreground hover:text-foreground data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
          >
            API Reference
          </TabsTrigger>
        </TabsList>
        <TabsContent value="getting-started" className="pt-6">
          <GettingStartedTab />
        </TabsContent>
        <TabsContent value="guides" className="pt-6">
          <GuidesTab />
        </TabsContent>
        <TabsContent value="api" className="pt-6">
          <ApiReferenceTab />
        </TabsContent>
      </Tabs>
    </>
  )
}

