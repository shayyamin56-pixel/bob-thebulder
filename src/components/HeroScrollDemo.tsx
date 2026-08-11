import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

export function HeroScrollDemo() { 
  return (
    <div className="flex flex-col overflow-hidden bg-background">
      <ContainerScroll
        titleComponent={
          <div className="flex flex-col items-center justify-center px-4">
            <span className="text-lg md:text-xl font-semibold text-muted-foreground mb-2">
              בנייה ושיפוצים ברמה הגבוהה ביותר
            </span>
            <h1 className="text-4xl md:text-7xl font-black text-primary leading-tight">
              רוי המלך <br />
              <span className="text-3xl md:text-5xl font-bold text-secondary mt-2 block">
                משלב התכנון ועד למפתח
              </span>
            </h1>
          </div>
        }
      >
        <img
          src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1400&auto=format&fit=crop"
          alt="עבודות בנייה ושיפוצים"
          className="mx-auto rounded-2xl object-cover h-full w-full object-center"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}