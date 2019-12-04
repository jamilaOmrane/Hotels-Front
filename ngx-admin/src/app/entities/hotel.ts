
export class Hotel {
    id: string;
    name: string;
    location: string;
    stars: number;

    constructor(id: string,
        name: string,
        location: string,
        stars: number) {
        this.id = id;
        this.name = name;
        this.location = location;
        this.stars = stars
    }
}