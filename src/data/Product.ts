export interface Product {
    id: string;
    breadCrumb: string;
    colors: Color[];
    freeInformation: string;
    genderName: string;
    images: ImageProduct;
    longDescription: string;
    name: string;
    prices: PriceProduct;
    rating: Rating;
    sizes: Size[];
    washingInformation: string;
    listProductItem: ProductItem[];
}
interface Size {
    code: string;
    displayCode: string;
    name: string;
}
interface Rating {
    average: number;
    rating: number;
    comment: string;
}
interface PriceProduct {
    base: number;
    promo: number;
}

interface Color {
    code: string;
    displayCode: string;
    name: string;
    isFavorite: boolean;
}

interface ImageProduct {
    main: Image[];
    chips: Image[];
    subImages: Image[];
}

interface Image {
    url: string;
    fileName: string;
    fileType: string;
    colorCode: string;
}

interface ProductItem {
    color: Color;
    price: PriceProduct;
    size: Size;
    stock: Stock;
    sales: boolean;
    salesType: string;
}

interface Stock {
    statusCode: string;
    statusLocalized: string;
    quantity: number;
    transitStatus: string;
}
