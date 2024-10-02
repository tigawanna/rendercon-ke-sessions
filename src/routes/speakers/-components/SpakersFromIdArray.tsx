import { CardsListSuspenseFallback } from "@/components/loaders/GenericDataCardsListSuspenseFallback";
import { Suspense } from "react";
import { SpeakerById } from "./SpeakersByIds";

interface SpakersFromIdArrayProps {
  speakers: string[];
}

export function SpakersFromIdArray({ speakers }: SpakersFromIdArrayProps) {
  return (
    <div className="xl:grid-cols- grid h-full w-full grid-cols-1 gap-4 md:grid-cols-2">
      {speakers.map((speaker) => (
        <Suspense fallback={<CardsListSuspenseFallback cards={1} />}>
          <SpeakerById speaker={speaker} />
        </Suspense>
      ))}
    </div>
  );
}
