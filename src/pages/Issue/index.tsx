import { IssueContainer, IssueHeader } from './styles'

import {
  ArrowSquareOut,
  Calendar,
  CaretCircleLeft,
  ChatCircle,
  GithubLogo,
} from 'phosphor-react'

export function Issue() {
  return (
    <IssueContainer>
      <IssueHeader>
        <div>
          <a>
            <CaretCircleLeft size={16} weight="bold" />
            voltar
          </a>

          <a>
            ver no github
            <ArrowSquareOut size={16} weight="bold" />
          </a>
        </div>

        <h1>JavaScript data types and data structures</h1>

        <div>
          <span>
            <GithubLogo size={16} weight="bold" /> phelipescript
          </span>
          <span>
            <Calendar size={16} weight="fill" /> Há 1 dia
          </span>
          <span>
            <ChatCircle size={16} weight="fill" /> 5 comentários
          </span>
        </div>
      </IssueHeader>
    </IssueContainer>
  )
}
