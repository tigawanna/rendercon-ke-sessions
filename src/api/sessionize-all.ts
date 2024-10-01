import { queryOptions } from "@tanstack/react-query";

export const SESSIONIZE_ALL_ENDPOINT =
  "https://sessionize.com/api/v2/d899srzm/view/All";

export async function fetchAllSessionize() {
  const response = await fetch(SESSIONIZE_ALL_ENDPOINT);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data = (await response.json()) as SessionizeAllMain[];
  return data;
}





 interface SessionizeAllMain {
  sessions: SessionizeAllSession[];
  speakers: SessionizeAllSpeaker[];
  questions: any[];
  categories: any[];
  rooms: SessionizeAllRoom[];
}

 interface SessionizeAllRoom {
  id: number;
  name: string;
  sort: number;
}

 interface SessionizeAllSession {
  id: string;
  title: string;
  description: string;
  startsAt: Date;
  endsAt: Date;
  isServiceSession: boolean;
  isPlenumSession: boolean;
  speakers: string[];
  categoryItems: any[];
  questionAnswers: any[];
  roomId: number;
  liveUrl: null;
  recordingUrl: null;
  status: Status;
  isInformed: boolean;
  isConfirmed: boolean;
}

 enum Status {
  Accepted = "Accepted",
}

 interface SessionizeAllSpeaker {
  id: string;
  firstName: string;
  lastName: string;
  bio: string;
  tagLine: string;
  profilePicture: string;
  isTopSpeaker: boolean;
  links: Link[];
  sessions: number[];
  fullName: string;
  categoryItems: any[];
  questionAnswers: any[];
}

 interface Link {
  title: LinkType;
  url: string;
  linkType: LinkType;
}

 enum LinkType {
  LinkedIn = "LinkedIn",
  Twitter = "Twitter",
  XTwitter = "X (Twitter)",
}
