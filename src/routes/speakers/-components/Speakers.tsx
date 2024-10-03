import { CardsListSuspenseFallback } from "@/components/loaders/GenericDataCardsListSuspenseFallback";
import { Suspense } from "react";
import { SpeakersList } from "./SpeakersList";
import { useSpeakersSearch } from "./use-serach-speakers";
import { SearchBox } from "@/components/search/SearchBox";

interface SpeakersProps {}

export function Speakers({}: SpeakersProps) {
  const { debouncedValue, isDebouncing, keyword, setKeyword } =
    useSpeakersSearch();
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <div className="sticky top-[8%] z-10 flex w-full  justify-evenly gap-1 bg-base-200 px-3 pr-5 md:flex-row">
        <div className="flex w-full gap-2 p-1">
          <h1 className="bg-base-200/30 text-2xl font-bold">Speakers</h1>
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
        <SpeakersList speakerKeyword={keyword} />
      </Suspense>
    </div>
  );
}
