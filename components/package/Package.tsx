
import { Decimal } from "@prisma/client/runtime/library";
export interface PackageProps {
    id: string;
    title: string;
    duration: string;
    priceSingle: Decimal;
    priceDuo: Decimal;
    priceGroupMember: Decimal;
    tags: string[];
  }
export async function Package(props : PackageProps)
{
    return (<>
            <h2>{props.title}</h2>
            <p>Duration: {props.duration}</p>
            <p>Price (Single): {props.priceSingle.toString()}</p>
            <p>Price (Duo): {props.priceDuo.toString()}</p>
            <p>Price (Group Member): {props.priceGroupMember.toString()}</p>
            <p>Tags: {props.tags}</p>
    </>)
}