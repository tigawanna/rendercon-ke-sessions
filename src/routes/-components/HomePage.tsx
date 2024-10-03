import { Suspense } from "react";
import { RealTimeClock } from "./RealTimeClock";
import { CardsListSuspenseFallback } from "@/components/loaders/GenericDataCardsListSuspenseFallback";
import { SessionsStartingAt } from "./SessionsStartingAt";

export function HomePage() {

  return (
    <div className="jusify-center flex h-full min-h-screen w-full flex-col items-center">
      <picture className="fixed inset-0 -z-30 size-full">
        <source
          media="(min-width:350px)"
          className="size-full object-fill"
          srcSet="adaptive-icon.png"
        />
        <source
          media="(min-width:465px)"
          className="size-full object-fill"
          srcSet="adaptive-icon.png"
        />
        <source
          media="(min-width:865px)"
          className="size-full object-fill"
          srcSet="adaptive-icon.png"
        />
        <img
          src="adaptive-icon.png"
          alt="main bg"
          className="size-full object-fill"
        />
      </picture>

      <div className="flex h-full min-h-screen w-full flex-col items-center justify-evenly gap-2 bg-base-300/90">
        <div className="w-full h-[30%] flex flex-col sm:flex-row justify-center items-center gap-2 ">
        <img className=" w-full md:w-fit md:h-[70%]  " src="/public/label-icon.png" />
        <RealTimeClock />
</div>
        {/* <div className="*:justfy-center grid grid-cols-1 justify-center gap-2 p-[5%] *:flex *:items-center *:rounded-xl *:bg-base-300/40 *:p-3 md:grid-cols-2 lg:grid-cols-2">
          <h1 className="text-7xl font-bold text-primary">welcome</h1>
        </div> */}
        <Suspense fallback={<CardsListSuspenseFallback />}>
          <SessionsStartingAt />
        </Suspense>
      </div>
    </div>
  );
}
