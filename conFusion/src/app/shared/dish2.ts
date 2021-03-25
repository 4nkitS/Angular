export class Comment{
    rating: number;
    comment: string;
    author: string;
    date: string;    
}

export class Dish2{
    id: string;
    name: string;
    image: string;
    category: string;
    featured: boolean;
    label: string;
    price: string;
    description: string;
    comments: Comment[];
}