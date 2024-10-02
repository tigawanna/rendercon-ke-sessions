import { sessionizeSessionsQueryOptions } from "@/api/query-options";
import { useSuspenseQuery } from "@tanstack/react-query";
import { SessionCard } from "../sessions/-components/SessionCard";
import { format } from "date-fns";
import { Atom, CalendarIcon } from "lucide-react";
import { twMerge } from "tailwind-merge";

interface SessionsStartingAtProps {}

function sessionPeriodStatus(startsAt: Date, endsAt: Date) {

  const now = Number(format(new Date(),'T'))
  const starts = Number(format(startsAt,'T'))
  const ends = Number(format(endsAt,'T'))

if (now >= starts && now <= ends) {
    return {
      status: "current",
      className:
        "bg-gradient-to-r from-base-300 to-secondary/30 brightness-125",
    };
  } else if (now > ends) {
    return {staus:"past",className:"brightness-50"};
  } else {
    return {status:"upcoming",className:""};
  }
}
// "2024-10-05T15:20:00 ""2024-10-05T16:05:00"

export function SessionsStartingAt({}: SessionsStartingAtProps) {
  const query = useSuspenseQuery({
    ...sessionizeSessionsQueryOptions({}),
    select(data) {
      const sessions = data.flatMap((session) => session.sessions);
      const sessionsGroupedByStartingTime: Record<
        string,
        {
          startsAt: Date;
          endsAt: Date;
          sessions: typeof sessions;
        }
      > = sessions.reduce(
        (acc, session) => {
          const key = session.startsAt.toString();
          acc[key] = {
            startsAt: session.startsAt,
            endsAt: session.endsAt,
            sessions: [...(acc[key]?.sessions || []), session],
          };
          return acc;
        },
        {} as Record<
          string,
          {
            startsAt: Date;
            endsAt: Date;
            sessions: typeof sessions;
          }
        >,
      );

      return sessionsGroupedByStartingTime;
    },
  });
  const data = query.data;

  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <ul className="grid w-full grid-cols-1 justify-center gap-4 ">
        {Object.entries(data).map(([key, value], idx) => {
            const {status,className} = sessionPeriodStatus(value.startsAt,value.endsAt)
          return (
            <li key={key}>
              <div
                className={twMerge(
                  `flex flex-col items-center justify-center gap-6 rounded-xl border bg-base-200/30 p-5`,
                  className,
                )}
              >
                <div className="flex flex-wrap items-center justify-center gap-2 text-4xl">
                  <CalendarIcon className="size-10" />
                  <span>{format(key, "PPPPpp")}</span>
                  {status === "current" && (
                    <span className="flex gap-2 text-2xl">
                     Happening now <Atom className="size-6 animate-spin" />
                    </span>
                  )}
                  {status === "past" && (
                    <span className="flex gap-2 text-2xl">
                      Past <Atom className="size-6 animate-spin text-primary" />
                    </span>
                  )}
                  {/* {status === "upcoming" && (
                    <span className="flex gap-2 text-2xl">
                      Coming Soon <Atom className="size-6 animate-spin" />
                    </span>
                  )} */}
                </div>
                <ul className="grid w-full grid-cols-1 justify-center gap-4 md:grid-cols-2 xl:grid-cols-3">
                  {value.sessions.map((session) => (
                    <SessionCard key={session.id} session={session} />
                  ))}
                </ul>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
