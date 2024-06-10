import * as user from './getUserInfo'

export default {
    namespaced: true,
    state: {
      ...user.stateUser,
      step: null,
      authStatus: true, // авторизация
      mainPageStatus: false,
      section: {
        news: false,
        services: false,
        about: false,
        employees: false,
        tasks: false
      },
      currentMenuItem: null

      /*
      status: {
        news: true,
        services: false,
        about: false,
        employees: false,
        tasks: false
      }
      */
    },
    actions: {
        ...user.actionsUser,
        setStep: ({ commit }, payload) => commit('SET_STEP', payload),
        setAuthStatus: ({ commit }, payload) => commit('SET_AUTH_STATUS', payload),
        setMainPageStatus: ({ commit }, payload) => commit('SET_MAINPAGE_STATUS', payload),

        setSectionNews: ({ commit }, payload) => commit('SET_SECTION_NEWS', payload),
        setSectionServices: ({ commit }, payload) => commit('SET_SECTION_SERVICES', payload),
        setSectionAbout: ({ commit }, payload) => commit('SET_SECTION_ABOUT', payload),
        setSectionEmployees: ({ commit }, payload) => commit('SET_SECTION_EMPLOYEES', payload),
        setSectionTasks: ({ commit }, payload) => commit('SET_SECTION_TASKS', payload),
 
        setCurrentMenuItem: ({ commit }, payload) => commit('SET_CURRENT_MENU_ITEM', payload)
        /*
        setStatusNews: ({ commit }, payload) => commit('SET_STATUS_NEWS', payload),
        setStatusServices: ({ commit }, payload) => commit('SET_STATUS_SERVICES', payload),
        setStatusAbout: ({ commit }, payload) => commit('SET_STATUS_ABOUT', payload),
        setStatusEmployees: ({ commit }, payload) => commit('SET_STATUS_EMPLOYEES', payload),
        setStatusTasks: ({ commit }, payload) => commit('SET_STATUS_TASKS', payload)
        */
    },
    mutations: {
        ...user.mutationsUser,
        SET_STEP: (state, payload) => { state.step = payload.data },
        SET_AUTH_STATUS: (state, payload) => { state.authStatus = payload.data },
        SET_MAINPAGE_STATUS: (state, payload) => { state.mainPageStatus = payload.data },

        SET_SECTION_NEWS: (state, payload) => { state.section.news = payload.data },
        SET_SECTION_SERVICES: (state, payload) => { state.section.services = payload.data },
        SET_SECTION_ABOUT: (state, payload) => { state.section.about = payload.data },
        SET_SECTION_EMPLOYEES: (state, payload) => { state.section.employees = payload.data },
        SET_SECTION_TASKS: (state, payload) => { state.section.tasks = payload.data },

        SET_CURRENT_MENU_ITEM: (state, payload) => { state.currentMenuItem = payload.data }

        /*
        SET_STATUS_NEWS: (state, payload) => { state.status.news = payload.data },
        SET_STATUS_SERVICES: (state, payload) => { state.status.services = payload.data },
        SET_STATUS_ABOUT: (state, payload) => { state.status.about = payload.data },
        SET_STATUS_EMPLOYEES: (state, payload) => { state.status.employees = payload.data },
        SET_STATUS_TASKS: (state, payload) => { state.status.tasks = payload.data }
        */
    },
    getters: {
        ...user.gettersUser,
        getStep: state => state.step,
        getAuthStatus: state => state.authStatus,
        getMainPageStatus: state => state.mainPageStatus,

        getSectionNews: state => state.section.news,
        getSectionServices: state => state.section.services,
        getSectionAbout: state => state.section.about,
        getSectionEmployees: state => state.section.employees,
        getSectionTasks: state => state.section.tasks,

        getCurrentMenuItem: state => state.currentMenuItem

        /*
        getStatusNews: state => state.status.news,
        getStatusServices: state => state.status.services,
        getStatusAbout: state => state.status.about,
        getStatusEmployees: state => state.status.employees,
        getStatusTasks: state => state.status.tasks
        */
    }
}