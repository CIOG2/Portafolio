export interface IBlog {
    _id: string;
    category: string[];
    title: string;
    resume: string;
    mainImage: IImage;
    mainContent: string;
    subtopics?: string[];
    images?: IImage[];
    slug: string;
}

export interface IImage{
    url: string;
    id: string;
}