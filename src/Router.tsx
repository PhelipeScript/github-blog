import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { GitHubBlog } from './pages/GitHubBlog'

export function Router() {
  return (
    <Routes>
      <Route path="/github-blog" element={<DefaultLayout />}>
        <Route path="/github-blog" element={<GitHubBlog />} />
      </Route>
    </Routes>
  )
}
