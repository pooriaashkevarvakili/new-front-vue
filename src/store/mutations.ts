/*=========================================================================================
  File Name: mutations.js
  Description: Vuex Store - mutations
  ----------------------------------------------------------------------------------------
  Item Name: Hacoupian - Technology Dep.
  Author: Ahmadreza Azizan

==========================================================================================*/


const mutations = {
    // /////////////////////////////////////////////
    // COMPONENTS
    // /////////////////////////////////////////////
    // Vertical NavMenu

    TOGGLE_IS_VERTICAL_NAV_MENU_ACTIVE(state: any, value: any) {
        state.isVerticalNavMenuActive = value
    },
    TOGGLE_REDUCE_BUTTON(state: any, val: any) {
        state.reduceButton = val
    },
    UPDATE_MAIN_LAYOUT_TYPE(state: any, val: any) {
        state.mainLayoutType = val
    },
    UPDATE_VERTICAL_NAV_MENU_ITEMS_MIN(state: any, val: any) {
        state.verticalNavMenuItemsMin = val
    },
    UPDATE_VERTICAL_NAV_MENU_WIDTH(state: any, width: any) {
        state.verticalNavMenuWidth = width
    },


    // VxAutoSuggest

    UPDATE_STARRED_PAGE(state: any, payload: any) {

        // find item index in search list state
        const index = state.navbarSearchAndPinList.data.findIndex((item: any) => item.index == payload.index)

        // update the main list
        state.navbarSearchAndPinList.data[index].highlightAction = payload.val

        // if val is true add it to starred else remove
        if (payload.val) {
            state.starredPages.push(state.navbarSearchAndPinList.data[index])
        } else {
            // find item index from starred pages
            const index = state.starredPages.findIndex((item: any) => item.index == payload.index)

            // remove item using index
            state.starredPages.splice(index, 1)
        }
    },

    // Navbar-Vertical

    ARRANGE_STARRED_PAGES_LIMITED(state: any, list: []) {
        const starredPagesMore = state.starredPages.slice(10)
        state.starredPages = list.concat(starredPagesMore)
    },
    ARRANGE_STARRED_PAGES_MORE(state: any, list: []) {
        let downToUp = false
        let lastItemInStarredLimited = state.starredPages[10]
        const starredPagesLimited = state.starredPages.slice(0, 10)
        state.starredPages = starredPagesLimited.concat(list)

        state.starredPages.slice(0, 10).map((i: any) => {
            // @ts-ignore
            if (list.indexOf(i) > -1) downToUp = true
        })

        if (!downToUp) {
            state.starredPages.splice(10, 0, lastItemInStarredLimited)
        }
    },


    // ////////////////////////////////////////////
    // UI
    // ////////////////////////////////////////////

    TOGGLE_CONTENT_OVERLAY(state: any, val: any) {
        state.bodyOverlay = val
    },
    UPDATE_PRIMARY_COLOR(state: any, val: any) {
        state.themePrimaryColor = val
    },
    UPDATE_THEME(state: any, val: any) {
        state.theme = val
    },
    UPDATE_WINDOW_WIDTH(state: any, width: any) {
        state.windowWidth = width
    },
    UPDATE_WINDOW_SCROLL_Y(state: any, val: any) {
        state.scrollY = val
    },


    // /////////////////////////////////////////////
    // User/Account
    // /////////////////////////////////////////////

    // Updates user info in state and localstorage
    UPDATE_USER_INFO(state: any, payload: any) {

        // Get Data localStorage
        //@ts-ignore
        let userInfo = JSON.parse(localStorage.getItem("userInfo")) || state.AppActiveUser

        for (const property of Object.keys(payload)) {

            if (payload[property] != null) {
                // If some of user property is null - user default property defined in state.AppActiveUser
                state.AppActiveUser[property] = payload[property]

                // Update key in localStorage
                userInfo[property] = payload[property]
            }


        }
        // Store data in localStorage
        localStorage.setItem("userInfo", JSON.stringify(userInfo))
    },
    stateGetAllApplicant(state: any, getAllApplicant: any) {
        state.getAllApplicant = getAllApplicant;
    },
}

export default mutations

