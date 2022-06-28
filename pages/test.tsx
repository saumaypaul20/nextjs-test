import React from 'react'
import TestArticles from '../components/TestArticles/TestArticles'
import testStyles from  "../styles/Test.module.css"
interface Props {
    articles:any[]
}

const Test = (props: Props)=> {
    return (
        <div className={testStyles.container}>
           {props.articles.map((i, index)=> {
               return (
                   <TestArticles article={i} key={i.userId+ index}/>
               )
           })}
        </div>
    )
}
export const getStaticProps = async ()=>{
  const res =   await fetch(`https://jsonplaceholder.typicode.com/posts`)
  const articles  = await res.json()
  return {
      props:{
          articles
      }
  }
}
export default Test
