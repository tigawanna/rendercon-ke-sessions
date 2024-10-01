import { CardsListSuspenseFallback } from "@/components/loaders/GenericDataCardsListSuspenseFallback";
import { Suspense } from "react";
import { SpeakersList } from "./SpeakersList";

interface SpeakersProps {

}

export function Speakers({}:SpeakersProps){
return (
 <div className='w-full h-full flex flex-col items-center justify-center'>

    {/* TODO  Add filtering by name here */} 
          <div className="sticky top-[10%] z-20 flex w-full flex-col justify-evenly gap-1 bg-base-200 px-3 pr-5 md:flex-row">
        <div className="flex w-full gap-2 p-1">
          <h1 className="bg-base-200/30 text-2xl font-bold">Shops</h1>
        </div>
        <SelectHouseFloor />
        <SearchBox
          inputProps={{
            placeholder: "Search by name",
          }}
          debouncedValue={debouncedValue}
          isDebouncing={isDebouncing}
          setKeyword={setKeyword}
          keyword={keyword}
        />
      </div>
        <Suspense fallback={<CardsListSuspenseFallback />}>
            <SpeakersList />
        </Suspense>
 </div>
);
}
