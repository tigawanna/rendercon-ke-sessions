import { CardsListSuspenseFallback } from "@/components/loaders/GenericDataCardsListSuspenseFallback";
import { Suspense } from "react";
import { SessionsList } from "./SessionsList";
import { useSessionsSearch } from "./use-session-search";
import { SearchBox } from "@/components/search/SearchBox";

interface SessionsProps {

}

export function Sessions({}:SessionsProps){
   const { debouncedValue, isDebouncing, keyword, setKeyword } =
     useSessionsSearch();
return (
 <div className='w-full h-full flex flex-col items-center justify-center'>
 
          <div className="sticky top-[10%] z-20 flex w-full flex-col justify-evenly gap-1 bg-base-200 px-3 pr-5 md:flex-row">
        <div className="flex w-full gap-2 p-1">
          <h1 className="bg-base-200/30 text-2xl font-bold">Sessions</h1>
        </div>
 
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
            <SessionsList  sessionskeywords={keyword}/>
        </Suspense>
 </div>
);
}
