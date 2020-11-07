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
  about: DetailsAbout;
  contact: DetailsContact
}