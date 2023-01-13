import { HeaderContainer } from './styles'
import LogoGitHubBlog from '../../assets/header-logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={LogoGitHubBlog} alt="" />
    </HeaderContainer>
  )
}
