import React from 'react';

export const dynamicParams = true;

const page = [
    { id: '한글' },
    { id: 'english' },
];

type Props = {
    params: Promise<{ id: string }>;
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export const generateStaticParams = () => {
    try {
        return page.map(({ id }) => ({ id: id }));
    } catch (err) {
        console.log(err);
        return [];
    }
};

const Page = async ({ params }: Props) => {
    const { id } = await params;

    return (
        <div className={'p-16'}>
            <span>{id}</span>
        </div>
    );
};

export default Page;