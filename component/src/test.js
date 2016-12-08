import asyncReactDOM from './index';

const data = {
  jsonTree: {
    string: 'string',
    number: 1,
    array: [1, 2, 3],
    object: {
      foo: 'bar'
    }
  },
  profitLoss: [
    {
      month: 'September',
      profit: 35000,
      loss: 2000
    },
    {
      month: 'October',
      profit: 42000,
      loss: 8000
    },
    {
      month: 'November',
      profit: 55000,
      loss: 5000
    }
  ],
  githubRepos: [{
    id: 33653601,
    name: 'notebook',
    full_name: 'jupyter/notebook',
    owner: {
      login: 'jupyter',
      id: 7388996,
      avatar_url: 'https://avatars.githubusercontent.com/u/7388996?v=3',
      gravatar_id: '',
      url: 'https://api.github.com/users/jupyter',
      html_url: 'https://github.com/jupyter',
      followers_url: 'https://api.github.com/users/jupyter/followers',
      following_url: 'https://api.github.com/users/jupyter/following{/other_user}',
      gists_url: 'https://api.github.com/users/jupyter/gists{/gist_id}',
      starred_url: 'https://api.github.com/users/jupyter/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/jupyter/subscriptions',
      organizations_url: 'https://api.github.com/users/jupyter/orgs',
      repos_url: 'https://api.github.com/users/jupyter/repos',
      events_url: 'https://api.github.com/users/jupyter/events{/privacy}',
      received_events_url: 'https://api.github.com/users/jupyter/received_events',
      type: 'Organization',
      site_admin: false
    },
    private: false,
    html_url: 'https://github.com/jupyter/notebook',
    description: 'Jupyter Interactive Notebook',
    fork: false,
    url: 'https://api.github.com/repos/jupyter/notebook',
    forks_url: 'https://api.github.com/repos/jupyter/notebook/forks',
    keys_url: 'https://api.github.com/repos/jupyter/notebook/keys{/key_id}',
    collaborators_url: 'https://api.github.com/repos/jupyter/notebook/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/jupyter/notebook/teams',
    hooks_url: 'https://api.github.com/repos/jupyter/notebook/hooks',
    issue_events_url: 'https://api.github.com/repos/jupyter/notebook/issues/events{/number}',
    events_url: 'https://api.github.com/repos/jupyter/notebook/events',
    assignees_url: 'https://api.github.com/repos/jupyter/notebook/assignees{/user}',
    branches_url: 'https://api.github.com/repos/jupyter/notebook/branches{/branch}',
    tags_url: 'https://api.github.com/repos/jupyter/notebook/tags',
    blobs_url: 'https://api.github.com/repos/jupyter/notebook/git/blobs{/sha}',
    git_tags_url: 'https://api.github.com/repos/jupyter/notebook/git/tags{/sha}',
    git_refs_url: 'https://api.github.com/repos/jupyter/notebook/git/refs{/sha}',
    trees_url: 'https://api.github.com/repos/jupyter/notebook/git/trees{/sha}',
    statuses_url: 'https://api.github.com/repos/jupyter/notebook/statuses/{sha}',
    languages_url: 'https://api.github.com/repos/jupyter/notebook/languages',
    stargazers_url: 'https://api.github.com/repos/jupyter/notebook/stargazers',
    contributors_url: 'https://api.github.com/repos/jupyter/notebook/contributors',
    subscribers_url: 'https://api.github.com/repos/jupyter/notebook/subscribers',
    subscription_url: 'https://api.github.com/repos/jupyter/notebook/subscription',
    commits_url: 'https://api.github.com/repos/jupyter/notebook/commits{/sha}',
    git_commits_url: 'https://api.github.com/repos/jupyter/notebook/git/commits{/sha}',
    comments_url: 'https://api.github.com/repos/jupyter/notebook/comments{/number}',
    issue_comment_url: 'https://api.github.com/repos/jupyter/notebook/issues/comments{/number}',
    contents_url: 'https://api.github.com/repos/jupyter/notebook/contents/{+path}',
    compare_url: 'https://api.github.com/repos/jupyter/notebook/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/jupyter/notebook/merges',
    archive_url: 'https://api.github.com/repos/jupyter/notebook/{archive_format}{/ref}',
    downloads_url: 'https://api.github.com/repos/jupyter/notebook/downloads',
    issues_url: 'https://api.github.com/repos/jupyter/notebook/issues{/number}',
    pulls_url: 'https://api.github.com/repos/jupyter/notebook/pulls{/number}',
    milestones_url: 'https://api.github.com/repos/jupyter/notebook/milestones{/number}',
    notifications_url: 'https://api.github.com/repos/jupyter/notebook/notifications{?since,all,participating}',
    labels_url: 'https://api.github.com/repos/jupyter/notebook/labels{/name}',
    releases_url: 'https://api.github.com/repos/jupyter/notebook/releases{/id}',
    deployments_url: 'https://api.github.com/repos/jupyter/notebook/deployments',
    created_at: '2015-04-09T06:58:03Z',
    updated_at: '2016-11-29T16:01:55Z',
    pushed_at: '2016-11-29T02:45:01Z',
    git_url: 'git://github.com/jupyter/notebook.git',
    ssh_url: 'git@github.com:jupyter/notebook.git',
    clone_url: 'https://github.com/jupyter/notebook.git',
    svn_url: 'https://github.com/jupyter/notebook',
    homepage: 'https://jupyter-notebook.readthedocs.io/',
    size: 26889,
    stargazers_count: 1705,
    watchers_count: 1705,
    language: 'JavaScript',
    has_issues: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 498,
    mirror_url: null,
    open_issues_count: 467,
    forks: 498,
    open_issues: 467,
    watchers: 1705,
    default_branch: 'master',
    score: 1
  },
    {
      id: 20785986,
      name: 'jupyterhub',
      full_name: 'jupyterhub/jupyterhub',
      owner: {
        login: 'jupyterhub',
        id: 17927519,
        avatar_url: 'https://avatars.githubusercontent.com/u/17927519?v=3',
        gravatar_id: '',
        url: 'https://api.github.com/users/jupyterhub',
        html_url: 'https://github.com/jupyterhub',
        followers_url: 'https://api.github.com/users/jupyterhub/followers',
        following_url: 'https://api.github.com/users/jupyterhub/following{/other_user}',
        gists_url: 'https://api.github.com/users/jupyterhub/gists{/gist_id}',
        starred_url: 'https://api.github.com/users/jupyterhub/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/jupyterhub/subscriptions',
        organizations_url: 'https://api.github.com/users/jupyterhub/orgs',
        repos_url: 'https://api.github.com/users/jupyterhub/repos',
        events_url: 'https://api.github.com/users/jupyterhub/events{/privacy}',
        received_events_url: 'https://api.github.com/users/jupyterhub/received_events',
        type: 'Organization',
        site_admin: false
      },
      private: false,
      html_url: 'https://github.com/jupyterhub/jupyterhub',
      description: 'Multi-user server for Jupyter notebooks',
      fork: false,
      url: 'https://api.github.com/repos/jupyterhub/jupyterhub',
      forks_url: 'https://api.github.com/repos/jupyterhub/jupyterhub/forks',
      keys_url: 'https://api.github.com/repos/jupyterhub/jupyterhub/keys{/key_id}',
      collaborators_url: 'https://api.github.com/repos/jupyterhub/jupyterhub/collaborators{/collaborator}',
      teams_url: 'https://api.github.com/repos/jupyterhub/jupyterhub/teams',
      hooks_url: 'https://api.github.com/repos/jupyterhub/jupyterhub/hooks',
      issue_events_url: 'https://api.github.com/repos/jupyterhub/jupyterhub/issues/events{/number}',
      events_url: 'https://api.github.com/repos/jupyterhub/jupyterhub/events',
      assignees_url: 'https://api.github.com/repos/jupyterhub/jupyterhub/assignees{/user}',
      branches_url: 'https://api.github.com/repos/jupyterhub/jupyterhub/branches{/branch}',
      tags_url: 'https://api.github.com/repos/jupyterhub/jupyterhub/tags',
      blobs_url: 'https://api.github.com/repos/jupyterhub/jupyterhub/git/blobs{/sha}',
      git_tags_url: 'https://api.github.com/repos/jupyterhub/jupyterhub/git/tags{/sha}',
      git_refs_url: 'https://api.github.com/repos/jupyterhub/jupyterhub/git/refs{/sha}',
      trees_url: 'https://api.github.com/repos/jupyterhub/jupyterhub/git/trees{/sha}',
      statuses_url: 'https://api.github.com/repos/jupyterhub/jupyterhub/statuses/{sha}',
      languages_url: 'https://api.github.com/repos/jupyterhub/jupyterhub/languages',
      stargazers_url: 'https://api.github.com/repos/jupyterhub/jupyterhub/stargazers',
      contributors_url: 'https://api.github.com/repos/jupyterhub/jupyterhub/contributors',
      subscribers_url: 'https://api.github.com/repos/jupyterhub/jupyterhub/subscribers',
      subscription_url: 'https://api.github.com/repos/jupyterhub/jupyterhub/subscription',
      commits_url: 'https://api.github.com/repos/jupyterhub/jupyterhub/commits{/sha}',
      git_commits_url: 'https://api.github.com/repos/jupyterhub/jupyterhub/git/commits{/sha}',
      comments_url: 'https://api.github.com/repos/jupyterhub/jupyterhub/comments{/number}',
      issue_comment_url: 'https://api.github.com/repos/jupyterhub/jupyterhub/issues/comments{/number}',
      contents_url: 'https://api.github.com/repos/jupyterhub/jupyterhub/contents/{+path}',
      compare_url: 'https://api.github.com/repos/jupyterhub/jupyterhub/compare/{base}...{head}',
      merges_url: 'https://api.github.com/repos/jupyterhub/jupyterhub/merges',
      archive_url: 'https://api.github.com/repos/jupyterhub/jupyterhub/{archive_format}{/ref}',
      downloads_url: 'https://api.github.com/repos/jupyterhub/jupyterhub/downloads',
      issues_url: 'https://api.github.com/repos/jupyterhub/jupyterhub/issues{/number}',
      pulls_url: 'https://api.github.com/repos/jupyterhub/jupyterhub/pulls{/number}',
      milestones_url: 'https://api.github.com/repos/jupyterhub/jupyterhub/milestones{/number}',
      notifications_url: 'https://api.github.com/repos/jupyterhub/jupyterhub/notifications{?since,all,participating}',
      labels_url: 'https://api.github.com/repos/jupyterhub/jupyterhub/labels{/name}',
      releases_url: 'https://api.github.com/repos/jupyterhub/jupyterhub/releases{/id}',
      deployments_url: 'https://api.github.com/repos/jupyterhub/jupyterhub/deployments',
      created_at: '2014-06-12T23:22:10Z',
      updated_at: '2016-11-28T20:35:43Z',
      pushed_at: '2016-11-29T12:23:43Z',
      git_url: 'git://github.com/jupyterhub/jupyterhub.git',
      ssh_url: 'git@github.com:jupyterhub/jupyterhub.git',
      clone_url: 'https://github.com/jupyterhub/jupyterhub.git',
      svn_url: 'https://github.com/jupyterhub/jupyterhub',
      homepage: 'https://jupyterhub.readthedocs.io',
      size: 2295,
      stargazers_count: 1446,
      watchers_count: 1446,
      language: 'Python',
      has_issues: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      forks_count: 312,
      mirror_url: null,
      open_issues_count: 86,
      forks: 312,
      open_issues: 86,
      watchers: 1446,
      default_branch: 'master',
      score: 1
    },
  ]
}

const components = {
  'react-json-tree': {
    type: 'JSONTree',
    props: {
      data: data.profitLoss
    }
  },
  'victory.VictoryPie': {
    type: 'VictoryPie',
    props: {
      data: data.profitLoss,
      x: 'month',
      y: x => x.profit - x.loss,
      // theme: 'victory.VictoryTheme.material'
    }
  },
  'victory.VictoryBar': {
    type: 'victory.VictoryChart',
    props: {
      children: {
        type: 'victory.VictoryBar',
        props: {
          data: data.profitLoss,
          x: 'month',
          y: x => x.profit - x.loss
        }
      },
      theme: 'victory.VictoryTheme.material'
    }
  },
  'react-chartjs': {
    type: 'Line',
    props: {
      data: {
        labels: [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July'
        ],
        datasets: [
          {
            label: 'My First dataset',
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
              'rgba(255,99,132,1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1,
            data: [
              65,
              59,
              80,
              81,
              56,
              55,
              40
            ]
          }
        ]
      },
      options: {
        responsive: true
      }
    }
  },
  'react-data-grid': {
    type: 'ReactDataGrid',
    props: {
      columns: [
        {
          name: 'month',
          key: 'month',
          width: 100,
          resizable: true
        },
        {
          name: 'profit',
          key: 'profit',
          width: 100,
          resizable: true
        },
        {
          name: 'loss',
          key: 'loss',
          width: 100,
          resizable: true
        }
      ],
      minHeight: 500,
      rowGetter: (index) => {
        return data.profitLoss[index];
      },
      rowsCount: 3,
      rowHeight: 40
    }
  },
  'react-inspector.Inspector': {
    type: 'Inspector',
    props: {
      data: data.githubRepos,
      expandPaths: ['$', '$.0', '$.1.owner']
    }
  },
  'react-inspector.DOMInspector': {
    type: 'DOMInspector',
    props: {
      data: document.head
    }
  },
  'react-inspector.TableInspector': {
    type: 'TableInspector',
    props: {
      data: data.profitLoss,
      columns: ['month', 'profit', 'loss']
    }
  }
}

asyncReactDOM.render('react-chartjs', components['react-chartjs'], document.getElementById('root'));
