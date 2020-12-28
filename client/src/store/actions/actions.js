export const set_db_profile = (profile) => {
    return {
      type: ACTION_TYPES.SET_DB_PROFILE,
      payload: profile
    }
  }

export const remove_db_profile = () => {
    return {
      type: ACTION_TYPES.REMOVE_DB_PROFILE
    }
  }

  export const set_db_posts = (posts) => {
    return {
      type: ACTION_TYPES.FETCH_DB_POSTS,
      payload: posts
    }
  }

  export const remove_db_posts = () => {
    return {
      type: ACTION_TYPES.REMOVE_DB_POSTS
    }
  }