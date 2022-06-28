import Link from 'next/link'
import React from 'react'
import testStyles from "../../styles/Test.module.css"
interface Props {
    article: any
}

const TestArticles = ({article}: Props) => {
    return (
       <Link href="/article/[id]" as={`article/${article.id}`}>
        <a className={testStyles.titles} >{article.title}</a>
        </Link>
    )
}

export default TestArticles
