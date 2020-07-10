export class Product{
    name:string;
    description:string;
    image:string;
    company:string;
    price:number;

    constructor(name,description,image,company,price){
        this.name=name;
        this.description= description;
        this.image=image;
        this.company= company;
        this.price=price;
    }
}