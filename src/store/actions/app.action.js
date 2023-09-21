export const SET_ACTIVE_MENU = "SET_ACTIVE_MENU";

export function setActiveMenu(menuName) {
    return {
        type: SET_ACTIVE_MENU,
        payload: menuName
    };
}