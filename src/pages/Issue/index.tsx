import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { BlogContext } from '../../contexts/BlogContext'

import { IssueContainer, IssueHeader } from './styles'

import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import ReactMarkdown from 'react-markdown'

import {
  ArrowSquareOut,
  Calendar,
  CaretCircleLeft,
  ChatCircle,
  GithubLogo,
} from 'phosphor-react'

export function Issue() {
  const { issueData, userData } = useContext(BlogContext)

  return (
    <IssueContainer>
      <IssueHeader>
        <div>
          <NavLink to="/github-blog">
            <CaretCircleLeft size={16} weight="bold" />
            voltar
          </NavLink>

          <a href={issueData.html_url} target="_blank" rel="noreferrer">
            ver no github
            <ArrowSquareOut size={16} weight="bold" />
          </a>
        </div>

        <h1>{issueData.title}</h1>

        <div>
          <span>
            <GithubLogo size={16} weight="bold" /> {userData.login}
          </span>
          <span>
            <Calendar size={16} weight="fill" />
            {formatDistanceToNow(new Date(issueData.created_at), {
              addSuffix: true,
              locale: ptBR,
            })}
          </span>
          <span>
            <ChatCircle size={16} weight="fill" /> {issueData.comments}{' '}
            comentários
          </span>
        </div>
      </IssueHeader>
      <div>
        <ReactMarkdown>{issueData.body}</ReactMarkdown>
      </div>
    </IssueContainer>
  )
}
