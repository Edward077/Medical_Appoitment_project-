import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { tabs } from "@/constants";
import { PlusCircle } from "lucide-react";

const Settings = () => {
  return (
    <div className="py-6">
      <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
        <Tabs defaultValue="general">
          <div className="flex items-center">
            <TabsList>
              {tabs.map((tab, index) => {
                return (
                  <TabsTrigger key={index} value={tab.value}>
                    {tab.label}
                  </TabsTrigger>
                );
              })}
            </TabsList>
            <div className="ml-auto flex items-center gap-2">
              <Button size="sm" className="h-8 gap-1">
                <PlusCircle className="h-3.5 w-3.5" />
                <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                  Add Product
                </span>
              </Button>
            </div>
          </div>
          {tabs.map((tab, index) => {
            const Component = tab.component;
            return (
              <TabsContent key={index} value={tab.value}>
                <Component />
              </TabsContent>
            );
          })}
        </Tabs>
      </main>
    </div>
  );
};

export default Settings;
