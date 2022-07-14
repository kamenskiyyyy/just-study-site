import { getServerSideSitemap } from 'next-sitemap';
import { GetServerSideProps } from 'next';
import { ISitemapField } from 'next-sitemap/dist/@types/interface';
import client from '@src/lib/apollo/apolloClient';
import { FRONTEND_URL } from '../config';
import { gql } from '@apollo/client';
import format from 'date-fns/format';
import { Query } from '@src/lib/apollo/types';
import routes from '@src/routes';

export const GET_ALL_PAGES = gql`
    query {
        pages(where: { statusView: { equals: "show" } }) {
            slug
            language
            lastModification
        }
        posts(where: { statusView: { equals: "show" } }) {
            id
            language
            lastModification
        }
    }
`;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const { data } = await client.query<Query>({
        query: GET_ALL_PAGES,
        fetchPolicy: 'no-cache'
    });

    const fields: ISitemapField[] = [];

    if (data.pages) {
        data.pages.map(({ language, slug, lastModification }) => {
            fields.push({
                loc: `${FRONTEND_URL}/${language}/${slug}`,
                lastmod: format(new Date(lastModification), 'yyyy-MM-dd')
            });
        });
    }

    if (data.posts) {
        data.posts.map(({ language, id, lastModification }) => {
            fields.push({
                loc: `${FRONTEND_URL}/${language}${routes.blog}/${id}`,
                lastmod: format(new Date(lastModification), 'yyyy-MM-dd')
            });
        });
    }

    return getServerSideSitemap(ctx, fields);
};

export default function Sitemap() {}
