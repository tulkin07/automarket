import { MainProductsType } from "@/components/MainProducts";
export enum Transmission {
  AVTOMAT = "AVTOMAT",
  MEXANIKA = "MEXANIKA",
  CVT = "CVT",
  ROBOTIC = "ROBOTIC",
}
export const filtersData = [
  // {
  //   key: "marka",
  //   label: "Marka",
  //   options: [
     
  //   ],
  // },
  // {
  //   key: "year",
  //   label: "Yil",
  //   options: [
  //     { value: 2024, label: "2024" },
  //     { value: 2023, label: "2023" },
  //     { value: 2022, label: "2022" },
  //     { value: 2021, label: "2021" },
  //     { value: 2020, label: "2020" },
  //     { value: 2019, label: "2019" },
  //     { value: 2018, label: "2018" },
  //     { value: 2017, label: "2017" },
  //   ],
  // },
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



// export const transmissionOptions = [
//   { label: "Avtomat", value: Transmission.AVTOMAT },
//   { label: "Mexanika", value: Transmission.MEXANIKA },
//   { label: "CVT", value: Transmission.CVT },
//   { label: "Robotic", value: Transmission.ROBOTIC },
// ];



export const bodyTypeOptions = [
  { label: "Sedan", value: "SEDAN" },
  { label: "Hatchback", value: "HATCHBACK" },
  { label: "SUV", value: "SUV" },
  { label: "Coupe", value: "COUPE" },
  { label: "Universal", value: "UNIVERSAL" },
];