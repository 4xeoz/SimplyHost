
export const headerLInks = [
    {
        name: 'Home',
        href: '/'
    },
    {
        name: 'Create event',
        href: '/events/create'
    },
    {
        name: 'my Profile',
        href: '/profile'
    },

]

export const eventDefualtValues = {
    title: '',
    description: '',
    location: '',
    imageUrl: '',
    startDateTime: new Date(),
    endDateTime: new Date(),
    categoryId: '',
    Price: '',
    isFree: false,
    url: '',
}