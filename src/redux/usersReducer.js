const FOLLOW = 'FOLLOW'
const UN_FOLLOW = 'UN-FOLLOW'
const SET_USERS = 'SET-USERS'


let initialUsers = {
   users: [

   ]
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
         return { ...state, users: [...state.users, ...action.users] }
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

export default usersReducer