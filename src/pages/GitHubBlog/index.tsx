import { IssueCard } from '../../components/IssueCard'
import { Profile } from '../../components/Perfil'
import {
  BlogContainer,
  FormContainer,
  IssuesContainer,
  Publications,
} from './styles'

export function GitHubBlog() {
  return (
    <BlogContainer>
      <Profile />

      <Publications>
        <h2>
          Publicações
          <span>6 publicações</span>
        </h2>

        <FormContainer action="">
          <input type="text" placeholder="Buscar conteúdo" />
          <button>Buscar</button>
        </FormContainer>

        <IssuesContainer>
          <IssueCard />
          <IssueCard />
          <IssueCard />
          <IssueCard />
          <IssueCard />
          <IssueCard />
        </IssuesContainer>
      </Publications>
    </BlogContainer>
  )
}
