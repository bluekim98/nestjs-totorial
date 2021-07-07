module.exports = {
    users: [
        {
            email: 'blue@email.com',
            name: '빈지노',
            nickname: 'blue',
            job: 'developer',
            isActivate: true
        },
        {
            email: 'yellow@email.com',
            name: '백예린',
            nickname: 'yellow',
            job: 'manager',
            isActivate: true
        },
        {
            email: 'red@email.com',
            name: '아이유',
            nickname: 'red',
            job: 'manager',
            isActivate: true
        }
    ],
    rooms: [
        {
            id: '1',
            title: 'headquarter',
            locations: [],
            isUsing: true   
        },
        {
            id: '2',
            title: 'research center',
            locations: [],
            isUsing: true
        }
    ],
    layouts: [
        {
            id: 1,
            rooms: []
        }
    ],
    teams: [
        {
            id: 1,
            name: 'business',
            users: []
        },
        {
            id: 2,
            name: 'development',
            users: []
        }
    ]
}