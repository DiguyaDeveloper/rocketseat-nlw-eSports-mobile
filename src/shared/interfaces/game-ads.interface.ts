import { WeekDay } from "./week-days.interface";

export interface GameAds {
  id: string;
  createdAt: string;
  hourEnd: string;
  hourStart: string;
  name: string;
  useVoiceChannel: boolean;
  yearPlaying: number;
  AdWeekDays: WeekDay[];
}
