export const ACTION_ADD = 'ACTION_ADD';
export const ACTION_REMOVE = 'ACTION_REMOVE';

export function actionAdd(feature) {
    return {
        type: ACTION_ADD, 
        payload: feature
    }
}; 

export function actionRemove(feature) {
    return {
        type: ACTION_REMOVE, 
        payload: feature
    }
}; 