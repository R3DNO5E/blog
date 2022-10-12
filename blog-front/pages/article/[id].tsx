import {GetStaticProps, GetStaticPropsContext, NextPage} from "next";
import {useRouter} from "next/router";
import {Page} from "../../common_component/page";
import {Markdown} from "../../common_component/markdown";
import {Client, Pool} from "pg";

const pool = new Pool({
    user: "blogapp",
    password: "password",
    database: "blog",
    host: "localhost",
    port: 5432
});

interface ArticleProps {
    id: string,
    version: number,
    update: string,
    title: string,
    content: string
}

const Article: NextPage<ArticleProps> = (props: ArticleProps) => {
    const router = useRouter();
    return <Page title={props.title} content={() => {
        return <div className=""><Markdown>{props.content}</Markdown></div>
    }}/>;
}

export default Article;

export const getStaticProps
    : GetStaticProps<ArticleProps | {}, { id: string }>
    = async (context: GetStaticPropsContext<{ id: string }>) => {
    if (context.params === undefined) {
        return {
            props: {}
        };
    }
    const r = await pool.query("SELECT * FROM article WHERE id=$1 ORDER BY version DESC LIMIT 1", [context.params.id]);
    if (r.rows.length !== 1) {
        return {
            props: {}
        };
    } else {
        return {
            props: {
                id: r.rows[0].id,
                version: r.rows[0].version,
                update: r.rows[0].update.toString(),
                title: r.rows[0].title,
                content: r.rows[0].content
            }
        };
    }
}

export async function getStaticPaths() {
    return {
        paths: [
            {
                params: {
                    id: 'e3d7f41d-1910-4de9-b4ab-f01559802fc2'
                }
            }
        ],
        fallback: false
    }
}