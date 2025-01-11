
import Link from 'next/link';

const page = [
    { id: '한글' },
    { id: 'english' },
];

const Page = () => {
    return (
        <div style={{ padding: '40px', background: 'red' }}>
            {page.map(({ id }) => {
                return (
                    <div key={id}>
                        <Link href={`/${id}`}>{id}</Link>
                        <br />
                    </div>
                );
            })}
        </div>
    );
};

export default Page;