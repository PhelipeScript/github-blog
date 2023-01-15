import { createContext, ReactNode, useEffect, useState } from 'react'
import { searchApi, userApi } from '../lib/axios'

interface UserDataProps {
  avatar_url: string
  bio: string
  followers: number
  login: string
  name: string
}

interface IssueDataProps {
  title: string
  body: string
  comments: number
  created_at: string
  html_url: string
}

interface BlogContextType {
  userData: UserDataProps
  issueData: IssueDataProps
}

export const BlogContext = createContext({} as BlogContextType)

interface BlogContextProviderProps {
  children: ReactNode
}

export function BlogContextProvider({ children }: BlogContextProviderProps) {
  const [userData, setUserData] = useState<UserDataProps>({
    avatar_url: '',
    bio: '',
    followers: 0,
    login: '',
    name: '',
  })

  const [issueData, setIssueData] = useState<IssueDataProps>({
    title: '',
    body: '',
    comments: 0,
    created_at: '',
    html_url: '',
  })

  async function getUserData() {
    const response = await userApi.get('/phelipescript')

    const { avatar_url, bio, followers, login, name } = response.data

    setUserData({ avatar_url, bio, followers, login, name })
  }

  async function getIssues() {
    const query = ''
    const response = await searchApi.get('/issues', {
      params: {
        q: `${query} repo:phelipescript/github-blog`,
      },
    })

    const [{ title, body, comments, created_at, html_url }] =
      response.data.items

    setIssueData({ title, body, comments, created_at, html_url })
  }

  useEffect(() => {
    getUserData()
    getIssues()
  }, [])

  return (
    <BlogContext.Provider value={{ userData, issueData }}>
      {children}
    </BlogContext.Provider>
  )
}
