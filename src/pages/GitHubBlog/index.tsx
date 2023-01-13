import { Profile } from '../../components/Perfil'
import { BlogContainer, Publications } from './styles'

export function GitHubBlog() {
  return (
    <BlogContainer>
      <Profile />

      <Publications>
        <h2>
          Publicações
          <span>6 publicações</span>
        </h2>

        <form action="">
          <input type="text" placeholder="Buscar conteúdo" />
          <button>Buscar</button>
        </form>

        <div>
          <div>
            <h2>JavaScript data types and data structures</h2>
            <span>Há 1 dia</span>
          </div>
          <p>
            Programming languages all have built-in data structures, but these
            often differ from one language to another. This article attempts to
            list the built-in data structures available in
          </p>
        </div>
      </Publications>
    </BlogContainer>
  )
}
