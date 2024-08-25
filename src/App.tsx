
import './App.css'
import { Header } from './components/Header'
import { Post, PostType } from './components/Post'
import { Sidebar } from './components/Sidebar'

// author : {avatar_url: "", name: "", role: ""}
//  publishedAt: Date
// content : String


const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/GuiChiste.png",
      name: "Guilherme Chisté",
      role: "Web Developer"
    },
    content: [
      {type: 'paragraph', content: 'Não sei o que colocar aqui'},
      {type: 'paragraph', content: 'Não sei'},
      {type: 'paragraph', content: 'Talvez, mas ainda não'}
    ],
    publishedAt: new Date('2024-08-03 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/felipefialho.png",
      name: "Felipe Fialho",
      role: "Front-end Challenge"
    },
    content: [
      {type: 'paragraph', content: 'Não sei o que colocar aqui 2'},
      {type: 'paragraph', content: 'Não sei o que pensar sobre a'},
      {type: 'paragraph', content: 'Talvez, mas ainda não'}
    ],
    publishedAt: new Date('2024-08-06 20:00:00')
  }
]

export function App() {
  return (
    <div>
      <Header />

      <div className='wrapper'>
        <Sidebar />
        <main>
          {posts.map(post => {
            return( 
            <Post 
              key={post.id}
              post={post}
            />)
          })}
        </main>
      </div>
    </div>
  )
}


