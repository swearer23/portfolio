import { IconType } from "react-icons";

export type LangStats = {
  key: string,
  value: number,
  percentage: string,
  icon: IconType|undefined,
}

type Repo = {
  name: string,
  url: string,
  description: string,
  language: string,
}
