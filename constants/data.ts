import { MainProductsType } from "@/components/MainProducts";

export const filtersData = [
  {
    key: "marka",
    label: "Marka",
    options: [
      {
        value: "chevrolet",
        label: "Chevrolet",
        models: ["Cobalt", "Nexia", "Malibu", "Tracker", "Damas"],
      },
      {
        value: "toyota",
        label: "Toyota",
        models: ["Camry", "Corolla", "RAV4", "Land Cruiser"],
      },
      {
        value: "kia",
        label: "Kia",
        models: ["K5", "Sportage", "Cerato"],
      },
    ],
  },
  {
    key: "year",
    label: "Yil",
    options: [
      { value: 2024, label: "2024" },
      { value: 2023, label: "2023" },
      { value: 2022, label: "2022" },
      { value: 2021, label: "2021" },
      { value: 2020, label: "2020" },
      { value: 2019, label: "2019" },
      { value: 2018, label: "2018" },
      { value: 2017, label: "2017" },
    ],
  },
  {
    key: "color",
    label: "Rang",
    options: [
      { value: "white", label: "Oq" },
      { value: "black", label: "Qora" },
      { value: "silver", label: "Kumush" },
      { value: "blue", label: "Ko‘k" },
      { value: "red", label: "Qizil" },
    ],
  },
  {
    key: "transmission",
    label: "Transmissiya",
    options: [
      { value: "automatic", label: "Avtomat" },
      { value: "manual", label: "Mexanik" },
    ],
  },
  {
    key: "fuel",
    label: "Yonilg‘i turi",
    options: [
      { value: "petrol", label: "Benzin" },
      { value: "gas", label: "Gaz" },
      { value: "hybrid", label: "Gibrid" },
      { value: "electric", label: "Elektr" },
    ],
  },
];

export const products:MainProductsType[] = [
 
]

