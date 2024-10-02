import { Decimal } from "@prisma/client/runtime/library";

export interface DestinationContent {
  title: string;
  content: string[];
  images: string[];
  highlights: string[];
}

export type DestinationsType = DestinationContent[];

export interface PackageType {
  id: string;
  title: string;
  desc: string;
  destinations: string;
  priceSingle: Decimal;
  priceDuo: Decimal;
  priceGroupMember: Decimal;
  updatedAt: Date;
  createdAt: Date;
}