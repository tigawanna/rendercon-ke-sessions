import { sessionizeOneSpeakersQueryOptions } from "@/api/query-options";
import { useSuspenseQuery } from "@tanstack/react-query";
import { Link, useParams, Navigate } from "@tanstack/react-router";
import { useEffect } from "react";

interface OneSpeakerProps {}

export function OneSpeaker({}: OneSpeakerProps) {
  const { speaker } = useParams({
    from: "/speakers/$speaker",
  });
  const query = useSuspenseQuery(
    sessionizeOneSpeakersQueryOptions({ speaker_id: speaker }),
  );
  const oneSpeaker = query.data;
  useEffect(()=>{
    if(!oneSpeaker) return
    document.title = `Speaker: ${oneSpeaker.fullName}`
  },[oneSpeaker])
  if (!oneSpeaker) {
    return <Navigate to="/speakers" />;
  }

  return (
    <div className="flex h-full w-full flex-col items-center gap-4 p-4">
      <h2 className="w-full text-3xl underline underline-offset-8 sm:text-6xl">
        {oneSpeaker.fullName}
      </h2>
      <div className="flex w-full flex-col items-center gap-3 bg-base-200 p-5 md:flex-row">
        <img
          src={oneSpeaker.profilePicture}
          alt={oneSpeaker.fullName}
          className="aspect-square h-[50%] w-[90%] object-cover md:h-auto md:w-[50%]"
        />

        <div
          key={oneSpeaker.id}
          className="flex w-full flex-col gap-3 rounded-lg shadow-md"
        >
          <div className="flex flex-col justify-center gap-2 p-4">
            {/* <h2 className="w-full text-3xl underline underline-offset-8 sm:text-6xl">
            {oneSpeaker.fullName}
          </h2> */}
            {oneSpeaker.isTopSpeaker && (
              <span className="rounded bg-primary px-2.5 py-0.5 text-xs">
                Top Speaker
              </span>
            )}
            <div className="">
              <p className="text-lg">{oneSpeaker.tagLine}</p>
              <p className="text-sm brightness-75">{oneSpeaker.bio}</p>
            </div>

            <h3 className="font-semibold">Sessions:</h3>
            <ul className="list-inside list-disc">
              {oneSpeaker.sessions.map((session) => (
                <Link
                  to="/sessions/$session"
                  params={{ session: session.id.toString() }}
                  key={session.id}
                  className="link text-sm hover:link-hover hover:text-purple-600"
                >
                  {session.name}
                </Link>
              ))}
            </ul>

            <h3 className="mb-2 font-semibold">Links:</h3>
            <div className="flex flex-wrap gap-2">
              {oneSpeaker.links.map((link, index) => {
                return (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-500 hover:text-blue-700"
                  >
                    {link.title}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
