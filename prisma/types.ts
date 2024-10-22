import { Decimal } from "@prisma/client/runtime/library"

export interface Ipackage{
        id: String,
        title?: String
        desc?: String
        duration?: String 
        destinationsJsonList?: Destination[]
        priceSingle?: Decimal
        priceDuo?: Decimal
        priceGroupMember?: Decimal
        tagsList?: String[]
        priority?: Number
        updatedAt?: Date
        createdAt?: Date
}

interface Destination {
    title: string;
    content: string[];
    images: string[];
    highlights: string[];
}