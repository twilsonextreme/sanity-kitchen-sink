export default {
  widgets: [
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
                  buildHookId: '5f83ba3c1a19b412f8081231',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-grj1ufu9',
                  apiId: 'f15a3d81-3f52-4836-b0c0-4536017e645b'
                },
                {
                  buildHookId: '5f83ba3c17be70814a406538',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-4u3zqexn',
                  apiId: 'e231a975-d1fa-4d92-8191-e1118ed84f21'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/twilsonextreme/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-4u3zqexn.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
