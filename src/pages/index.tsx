import Head from 'next/head';

import type { NextPageExtended } from '@types';

const Home: NextPageExtended = () => {
    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <meta
                    name="description"
                    content=""
                />
                <link
                    rel="icon"
                    href="/favicon.ico"
                />
            </Head>
        </div>
    );
};

export default Home;
