export const SESSIONIZE_SPEAKERS_ENDPOINT =
  "https://sessionize.com/api/v2/d899srzm/view/Speakers";

export async function fetchSessionizeSpeakers() {
  const response = await fetch(SESSIONIZE_SPEAKERS_ENDPOINT);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data = (await response.json()) as SessionizeSpeakersMain[];
  return data;
}




export interface SessionizeSpeakersMain {
  id: string;
  firstName: string;
  lastName: string;
  fullName: string;
  bio: string;
  tagLine: string;
  profilePicture: string;
  sessions: SessionizeSession[];
  isTopSpeaker: boolean;
  links: Link[];
  questionAnswers: any[];
  categories: any[];
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

interface SessionizeSession {
  id: number;
  name: string;
}


