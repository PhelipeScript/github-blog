import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { GitHubBlog } from './pages/GitHubBlog'
import { Issue } from './pages/Issue'

export function Router() {
  return (
    <Routes>
      <Route path="/github-blog" element={<DefaultLayout />}>
        <Route path="/github-blog" element={<GitHubBlog />} />
        <Route path="/github-blog/issue/:id" element={<Issue />} />
      </Route>
    </Routes>
  )
}
