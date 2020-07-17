export default interface AllDataProp {
  //many more
  indexProp: IndexProp;
  cardProps: CardProp[];
}

export interface IndexProp {
  welcome: string;
  name: string;
  social: Social[];
}

export interface Social {
  name: string;
  url: string;
  image: string;
}
type cardType = 'career' | 'hobby';
export interface CardProp {
  title: string;
  description: string;
  type: cardType;
  career?: CareerProp;
  hobby?: HobbyProp;
}
export interface CareerProp {
  introduction: string;
  github: string;
  linkedIn: string;
  email: string;
}

export interface HobbyProp {
  hobbies: Hobby[];
}

export interface Hobby {}
