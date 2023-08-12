import { Octokit } from 'octokit'

const filterRepoListByName = (repos, interestRepoList) => {
  return repos.filter((repo) => interestRepoList.includes(repo.name))
}

const fetchRepos = async () => {
  const interestedRepoList = ['cat-status', 'sqlite-example-node-js']
  const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN
  })

  const response = await octokit.request('GET /users/{username}/repos', {
    username: 'gabrielrizzo',
    type: 'all',
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  })

  return filterRepoListByName(response?.data, interestedRepoList)
}

const fetchUser = async () => {
  const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN
  })

  const response = await octokit.request('GET /users/{username}', {
    username: 'gabrielrizzo',
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  })

  const { avatar_url: avatarUrl, name, company, url, bio } = response?.data

  return { avatarUrl, name, company, url, bio }
}

const fetchYoonitRepos = async () => {
  const interestedRepoList = [
    'nativescript-yoonit-camera',
    'rxjs-yoonit-store',
    'vue-yoonit-components',
    'sass-yoonit-style'
  ]
  const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN
  })

  const response = await octokit.request('GET /orgs/{org}/repos', {
    org: 'Yoonit-Labs',
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  })

  return filterRepoListByName(response?.data, interestedRepoList)
}

export default async function fetchGitHubData() {
  const userRepos = await fetchRepos()
  const user = await fetchUser()
  const yoonitRepos = await fetchYoonitRepos()

  const githubData = { user, repos: [...userRepos, ...yoonitRepos] }

  githubData.repos.sort((repoA, repoB) => {
    return repoA.stargazers_count > repoB.stargazers_count ? -1 : 1
  })

  return githubData
}
