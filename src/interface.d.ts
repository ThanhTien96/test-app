export interface IAnswer {
  readonly answer_id: number;
  text: string;
  img?: string | null;
}

export interface ITestData {
  readonly id: number;
  question: string;
  click: boolean;
  answer?: IAnswer[] | null;
  image?: string | null;
  description?: string | null;
}

export interface IResultData {
  readonly id: number;
  answer_id: number;
}

export interface ICheckResult {
  questionId: number;
  result: boolean;
  answerId: number | null;
}
