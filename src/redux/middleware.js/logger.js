const logger = (store) => (next) => (action) => {
    const currentState = store.getState();
    console.log("Current State : ", currentState);
    console.log("action : ", action);
    next(action);
    console.log("Updated state : ", store.getState());
}

export default logger;