export interface ILinks {
  id: Function;
  link: string;
  icon: JSX.Element;
}

export interface IProject {
  id: Function;
  tag: string;
  image: string;
  title: string;
  description: string;
  links: ILinks[];
}
