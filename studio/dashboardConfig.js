export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '61b38d5ac417794e9f4973d5',
                  title: 'Sanity Studio',
                  name: 'scripteam-new-marketing-site-studio',
                  apiId: '40e67ced-583b-45e7-a09c-7582ea1be98f'
                },
                {
                  buildHookId: '61b38d5a2a10a45d5314c19c',
                  title: 'Landing pages Website',
                  name: 'scripteam-new-marketing-site',
                  apiId: '3a005750-52cd-4e41-bba0-d658ca858f56'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/sbappan/scripteam-new-marketing-site',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://scripteam-new-marketing-site.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
