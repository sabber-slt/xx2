export interface Main {
    id: number;
    desc: string;
    title: string;
    title1: string;
    title2: string;
    content: string;
    content1: string;
    content2: string;
    media: string;
    media1: string;
    media2: string;
    type: string;
    created_at: string;
    updated_at: string;
    slug?: string;
}

export interface Blog {
    id: number;
    content: string;
    desc: string;
    content1: string;
    content2?: string;
    content3?: string;
    media: string;
    media1?: string;
    media2?: string;
    media3?: string;
    title: string;
    title1?: string;
    title2?: string;
    title3?: string;
    updated_at?: string;
    created_at?: string;
}
export interface Project {
    id: number;
    content: string;
    desc: string;
    content1: string;
    content2?: string;
    content3?: string;
    media: string;
    media1?: string;
    media2?: string;
    media3?: string;
    title: string;
    title1?: string;
    title2?: string;
    title3?: string;
    app_url?: string;
    web_url?: string;
    updated_at?: string;
}

export interface ProjectProps {
    data: {
        json: {
            project: Project[];

        };
    };
}
export interface Food {
    id: number;
    desc: string;
    title: string;
    content: string;
    ingredients: string;
    recipes: string;
    time: string;
    media: string;
    media1: string;
    created_at: string;
    updated_at: string;
    type: string;
}