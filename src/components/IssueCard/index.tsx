import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import { BlogContext } from '../../contexts/BlogContext'
import { IssueContent } from './styles'

export function IssueCard() {
  const { issueData } = useContext(BlogContext)

  const navigate = useNavigate()

  function handleReadEntireIssue() {
    navigate('issue')
  }

  return (
    <IssueContent onClick={handleReadEntireIssue}>
      <div>
        <h2>{issueData.title}</h2>
        <span>
          {issueData.created_at &&
            formatDistanceToNow(new Date(issueData.created_at), {
              addSuffix: true,
              locale: ptBR,
            })}
        </span>
      </div>

      <p>{issueData.body}</p>
    </IssueContent>
  )
}
