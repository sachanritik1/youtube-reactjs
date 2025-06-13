import React from "react";
import { Skeleton } from "../components/ui/skeleton";
import { Card, CardContent } from "../components/ui/card";

const SearchPageShimmer = () => {
  return (
    <div className="container py-4 space-y-4">
      {Array.from({ length: 4 }).map((_, index) => (
        <Card key={index} className="overflow-hidden">
          <CardContent className="p-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <Skeleton className="h-48 w-full sm:w-72 rounded-md" />
              <div className="flex-1 space-y-4">
                <Skeleton className="h-6 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
                <Skeleton className="h-4 w-1/3" />
                <div className="flex gap-2">
                  <Skeleton className="h-3 w-16" />
                  <Skeleton className="h-3 w-16" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default SearchPageShimmer;
