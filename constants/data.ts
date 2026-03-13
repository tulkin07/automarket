import { MainProductsType } from "@/components/MainProducts";
export enum Transmission {
  AVTOMAT = "AVTOMAT",
  MEXANIKA = "MEXANIKA",
  CVT = "CVT",
  ROBOTIC = "ROBOTIC",
}
export const filtersData = [
  {
    key: "color",
    label: "Rang",
    options: [
      { value: "OQ", label: "Oq" },
      { value: "QORA", label: "Qora" },
      { value: "KULRANG", label: "Kulrang" },
      { value: "KUMUSH", label: "Kumush" },
      { value: "QIZIL", label: "Qizil" },
      { value: "KO_K", label: "Ko'k" },
      { value: "JIGARRANG", label: "Jigarrang" },
    ],
  },
  {
    key: "transmission",
    label: "Transmissiya",
    options: [
      { label: "Avtomat", value: Transmission.AVTOMAT },
      { label: "Mexanika", value: Transmission.MEXANIKA },
      { label: "CVT", value: Transmission.CVT },
      { label: "Robotic", value: Transmission.ROBOTIC },
    ],
  },
  {
    key: "fuel",
    label: "Yonilg‘i turi",
    options: [
      { value: "PETROL", label: "Benzin" },
      { value: "GAS", label: "Gaz" },
      { value: "HYBRID", label: "Gibrid" },
      { value: "ELECTRIC", label: "Elektr" },
      { value: "DIESEL", label: "Dizel" },
    ],
  },
];

export const products: MainProductsType[] = [];

