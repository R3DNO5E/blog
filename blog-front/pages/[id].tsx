import {NextPage} from "next";
import {useRouter} from "next/router";

const Id: NextPage<{ a: string }> = ({a}) => {
    const router = useRouter();
    return (
        <div>
            <h1>{router.query.id}</h1>
            <h2>{a}</h2>
        </div>
    );
}

export default Id;

export function getStaticProps() {
    return {
        props: {
            a: "hello!"
        }
    }
}

export function getStaticPaths() {
    return {
        paths: [
            {
                params: {
                    id: "1"
                }
            },
            {
                params: {
                    id: "3a"
                }
            }
        ],
        fallback: false
    };
}