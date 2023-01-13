import { ArrowSquareOut, GithubLogo, Users } from 'phosphor-react'
import { ProfileContainer, ProfileData } from './styles'

export function Profile() {
  return (
    <ProfileContainer>
      <img src="https://avatars.githubusercontent.com/u/106886725?v=4" alt="" />
      <ProfileData>
        <h1>
          Cameron Williamson
          <a href="#">
            github <ArrowSquareOut />
          </a>
        </h1>
        <p>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </p>
        <div>
          <span>
            <GithubLogo size={14} weight="bold" />
            phelipescript
          </span>

          <span>
            <Users size={14} weight="bold" />
            32 seguidores
          </span>
        </div>
      </ProfileData>
    </ProfileContainer>
  )
}
