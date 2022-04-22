const FOLLOW = 'FOLLOW'
const UN_FOLLOW = 'UN-FOLLOW'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT'
const TOGGAL_IS_FETCHING = 'TOGGAL-IS-FETCHING'


let initialUsers = {
   users: [],
   pageSize: 10,
   totalUsersCount: 50,
   currentPage: 1,
   isFetching: false
}

const usersReducer = (state = initialUsers, action) => {
   switch (action.type) {
      case FOLLOW:
         return {
            ...state,
            users: state.users.map(u => {
               if (u.id === action.userId) {
                  return { ...u, followed: true }
               }
               return u
            }),

         }
      case UN_FOLLOW:
         return {
            ...state,
            users: state.users.map(u => {
               if (u.id === action.userId) {
                  return { ...u, followed: false }
               }
               return u
            }),

         }
      case SET_USERS:
         return { ...state, users: action.users }
      case SET_CURRENT_PAGE:
         return { ...state, currentPage: action.currentPage }
      case SET_TOTAL_USERS_COUNT:
         return { ...state, totalUsersCount: action.totalUsersCount }
      case TOGGAL_IS_FETCHING:
         return { ...state, isFetching: action.isFetching }
      default:
         return state
   }
}


export const followActionCreater = userId => {
   return {
      type: FOLLOW, userId
   }
}
export const unfollowActionCreater = userId => {
   return {
      type: UN_FOLLOW, userId
   }
}

export const setUsersActionCreate = (users) => {
   return { type: SET_USERS, users }
}

export const setCurrentPageActionCreate = (currentPage) => {
   return ({ type: SET_CURRENT_PAGE, currentPage })
}
export const setTotalUsersCountActionCreate = (totalUsersCount) => {
   return ({ type: SET_TOTAL_USERS_COUNT, totalUsersCount })
}

export const setIsFetchingActionCreate = (isFetching) => {
   return ({ type: TOGGAL_IS_FETCHING, isFetching })
}

export default usersReducer