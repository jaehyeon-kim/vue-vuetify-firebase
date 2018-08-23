export const backPath = (state) => {
    return state.backPath
}

export const loadedMeetups = (state) => {
    return state.loadedMeetups.sort((x, y) => {
        return x.date < y.date
    })
}

export const recentMeetups = (getters) => {
    return getters.loadedMeetups.slice(0, 3)
}

export const loadedMeetup = (state) => {
    return id => {
        return state.loadedMeetups.find(x => x.id === id)
    }
}