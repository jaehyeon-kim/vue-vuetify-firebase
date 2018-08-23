export const setBackPath = ({ commit }, payload) => {
    commit('setBackPath', payload)
}

export const createMeetup = ({ commit }, payload) => {
    const meetup = {
        title: payload.title,
        location: payload.location,
        imageUrl: payload.imageUrl,
        description: payload.description,
        date: new Date().toLocaleDateString('en-AU').split('/').reverse().join('-')
    }
    commit('createMeetup', payload)
}