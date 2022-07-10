import { getServerSideSitemap } from 'next-sitemap';
import { GetServerSideProps } from 'next';
import { ISitemapField } from 'next-sitemap/dist/@types/interface';
import client from '@src/lib/apollo/apolloClient';
import { FRONTEND_URL } from '../config';
import { gql } from '@apollo/client';
import format from 'date-fns/format';

export const GET_ALL_PAGES = gql`
    query {
        pages(where: { statusView: { equals: "show" } }) {
            slug
            language
            lastModification
        }
    }
`;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const { data } = await client.query({
        query: GET_ALL_PAGES,
        fetchPolicy: 'no-cache'
    });

    const fields: ISitemapField[] = data.pages.map(
        (page: { language: string; slug: string; lastModification: string }) => {
            return {
                loc: `${FRONTEND_URL}/${page.language}/${page.slug}`,
                lastmod: format(new Date(page.lastModification), 'yyyy-MM-dd')
            };
        }
    );

    return getServerSideSitemap(ctx, fields);
};

export default function Sitemap() {}
