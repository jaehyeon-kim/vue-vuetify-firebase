export const setBackPath = (state, payload) => {
    state.backPath = payload
}

export const createMeetup = (state, payload) => {
    state.loadedMeetups.push(payload)
}