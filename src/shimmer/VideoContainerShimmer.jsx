import React from "react";
import { Skeleton } from "../components/ui/skeleton";
import { Card, CardContent, CardFooter } from "../components/ui/card";

const VideoContainerShimmer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 p-4">
      {Array.from({ length: 12 }).map((_, index) => (
        <Card key={index} className="overflow-hidden">
          <Skeleton className="h-48 w-full rounded-t-lg" />
          <CardContent className="pt-4">
            <div className="flex items-start gap-3">
              <Skeleton className="h-9 w-9 rounded-full" />
              <div className="w-full">
                <Skeleton className="h-4 w-3/4 mb-2" />
                <Skeleton className="h-4 w-1/2" />
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between pt-0">
            <Skeleton className="h-3 w-1/3" />
            <Skeleton className="h-3 w-1/4" />
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default VideoContainerShimmer;
