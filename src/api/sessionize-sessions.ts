export const SESSIONIZE_SESSION_ENDPOINT =
  "https://sessionize.com/api/v2/d899srzm/view/Sessions";

export async function fetchSessionizeSessions() {
  const response = await fetch(SESSIONIZE_SESSION_ENDPOINT);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data = (await response.json()) as SessionizeSessionsMain[];
  return data;
}

interface SessionizeSessionsMain {
  groupId: null;
  groupName: string;
  sessions: SessionizeSession[];
  isDefault: boolean;
}

interface SessionizeSession {
  questionAnswers: any[];
  id: string;
  title: string;
  description: string;
  startsAt: Date;
  endsAt: Date;
  isServiceSession: boolean;
  isPlenumSession: boolean;
  speakers: Speaker[];
  categories: any[];
  roomId: number;
  room: Room;
  liveUrl: null;
  recordingUrl: null;
  status: Status;
  isInformed: boolean;
  isConfirmed: boolean;
}

enum Room {
  DianiBreakout = "Diani Breakout",
  KilifiBreakout = "Kilifi Breakout",
  MainAuditorium = "Main Auditorium",
}

interface Speaker {
  id: string;
  name: string;
}

enum Status {
  Accepted = "Accepted",
}
