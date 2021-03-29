export interface PriceDetail {
  category: string;
  save: string;
  price: number;
  detailsProject?: {projects:number,pages:number,mbDiskSpace:number}[];
}
export interface QuestionAsk {
  question: string;
  answer: string;
}
