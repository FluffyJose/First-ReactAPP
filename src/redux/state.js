let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'How are you?', likesCount: 12},
            {id: 2, message: 'its my first post!', likesCount: 5}
        ]
    },
    messagesPage: {
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How are you?'},
            {id: 3, message: 'I am fine!'}
        ],
        dialogs: [
            {id: 1, name: 'Dima'},
            {id: 2, name: 'Vasya'},
            {id: 3, name: 'Petya'},
            {id: 4, name: 'Kolya'},
            {id: 5, name: 'Tanya'}
        ]
    }
}

export default state;