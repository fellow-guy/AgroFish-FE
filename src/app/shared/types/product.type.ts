import { TCategory } from "./category.type";

export type TProduct = {
    name: string;
    description: string;
    images: string[];
    price: number;
    longDescription: string;
    category: TCategory;
    link: string;
}