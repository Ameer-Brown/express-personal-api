JSON API Endpoint           Response JSON
=============               =============

GET /api/profile            [
                              name: "Ameer Brown",

                              profile_image: "",

                              github_link: "https://github.com/Ameer-Brown/express-personal-api.git",

                              born: "Queens, NY",

                              current_city: "Oakland, CA",

                              height: "6'3",

                              favorite_food: "Italian",


                            ]

POST /api/memories           [
                             {
                                _id: 1,
                                name: 'Tony',
                                funniest_memory: 'Ran From Neighbors Dog',
                             },
                            ]

PUT /api/memories/_id           [
                             {
                                _id: 1,
                                name: 'Tony',
                                funniest_memory: 'Ran From Neighbors Dog',
                             },
                            ]


GET /api/memories/_id          [
                             {
                                _id: 1,
                                name: 'Tony',
                                funniest_memory: 'Ran From Neighbors Dog',
                             },
                            ]

DELETE /api/memories/_id          [
                             {
                                _id: 1,
                                name: 'Tony',
                                funniest_memory: 'Ran From Neighbors Dog',
                             },
                            ]
