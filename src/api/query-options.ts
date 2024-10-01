import { queryOptions } from "@tanstack/react-query";
import { fetchAllSessionize } from "./sessionize-all";
import { fetchSessionizeSessions } from "./sessionize-sessions";
import { fetchSessionizeSpeakers } from "./sessionize-speakers";


export function sessionizeAllQueryOptions() {
  return queryOptions({
    queryKey: ["sessionize-all"],
    queryFn: fetchAllSessionize,
    staleTime: 1000 * 60 * 60,
  });
}
type TSessionQueryOptions = {
    
}
export function sessionizeSessionsQueryOptions({}: TSessionQueryOptions) {
  return queryOptions({
    queryKey: ["sessionize-sessions"],
    queryFn: fetchSessionizeSessions,
    staleTime: 1000 * 60 * 60,
  });
}
type TSessionOneQueryOptions = {
    session_id:string
}
export function sessionizeOneSessionsQueryOptions({session_id}: TSessionOneQueryOptions) {
  return queryOptions({
    queryKey: ["sessionize-sessions",session_id],
    queryFn: fetchSessionizeSessions,
    staleTime: 1000 * 60 * 60,
    select(data) {
      return data[0]?.sessions.find((session) => session.id === session_id);
    }
  });
}

type TSessionSpeakerQueryOptions = {
name: string;
};
export function sessionizeSpeakersQueryOptions({name}: TSessionSpeakerQueryOptions) {
  return queryOptions({
    queryKey: ["sessionize-speakers"],
    queryFn: fetchSessionizeSpeakers,
    staleTime: 1000 * 60 * 60,
    select(data) {
      return data.filter((speaker) => speaker.fullName.toLowerCase().includes(name.toLowerCase()));
    }
  });
}
type TSessionOneSpeakerQueryOptions={
    speaker_id:string
}
export function sessionizeOneSpeakersQueryOptions({speaker_id}: TSessionOneSpeakerQueryOptions) {
  return queryOptions({
    queryKey: ["sessionize-speakers",speaker_id],
    queryFn: fetchSessionizeSpeakers,
    staleTime: 1000 * 60 * 60,
    select(data) {
      return data.find((speaker) => speaker.id === speaker_id);
    },
  });
}
