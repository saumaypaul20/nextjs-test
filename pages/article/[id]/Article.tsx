import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

interface Props {
    
}

const Article = (props: Props) => {
    const router = useRouter()
    const {id } = router.query
    const [article, setArticle] = useState(null)

    useEffect(() => {
        initFn(id)
        
    }, [id])

    const initFn = async(id:any)=>{
        if(!id) return
        let res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`) 
        const item = await res.json()
        setArticle(item)
    }

    return (
        <div>
            Article {id}
            <br></br>
            {article && JSON.stringify(article)}
        </div>
    )
}

export default Article
