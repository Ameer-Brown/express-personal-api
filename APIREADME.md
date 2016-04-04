JSON API Endpoint           Response JSON
=============               =============
GET /api/profile            {
                              name: "Ameer Brown",
                              profile_image: "https://scontent-lax3-1.xx.fbcdn.net/hphotos-xla1/v/t1.0-9/12938145_10206331753508701_5342059587620019442_n.jpg?oh=d6082eafa625e23dad5470cc10df75cd&oe=57BE0B76"
                              github_link: "https://github.com/Ameer-Brown/express-personal-api.git",
                              born: "Queens, NY",
                              current_city: "Oakland, CA",
                              height: "6'3",
                              states_lived: [{"California"},{"New York"},{"Florida"}],
                              family_members: [
                                { name: 'Rita Brown', relationship: 'mother' },
                                { name: 'Tony Brown Sr', relationship: 'dad' },
                                { name: 'Dr. Atira Charles', relationship: 'sister' },
                                { name: 'Tony Brown Jr', relationship: 'brother' },
                              ]
                            }

POST /api/memories           [
                             {
                                _id: 1,
                                your_name: 'Tony',
                                funniest_memory: 'Ran From Neighbors Dog',
                             },
                            ]

PUT /api/memories/name           [
                             {
                                _id: 1,
                                your_name: 'Tony',
                                funniest_memory: 'Ran From Neighbors Dog',
                             },
                            ]


GET /api/memories/name          [
                             {
                                _id: 1,
                                name: 'Tony',
                                funniest_memory: 'Ran From Neighbors Dog',
                             },
                            ]

DELETE /api/memories/name          [
                             {
                                _id: 1,
                                name: 'Tony',
                                funniest_memory: 'Ran From Neighbors Dog',
                             },
                            ]