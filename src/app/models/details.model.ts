export class DetailsAbout {
    birthdate: Date;
    text: string;
}

export class DetailsSocialMedia {
    url: string;
    iconClass: string;
}

export class DetailsContact {
    socialMedia: DetailsSocialMedia[];
    address: string[];
}

export class Details {
    photo: string;
    about: DetailsAbout;
    contact: DetailsContact
}