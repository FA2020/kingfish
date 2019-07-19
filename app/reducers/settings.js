// @flow
import {
    SET_IDLE_TIMEOUT,
    SET_C31_ENABLED,
    SET_IDLE_MINING_ENABLED,
    SET_OUTSIDE_WORLD_PAYMENTS_ENABLED,
    SET_WALLET_PASSWORD,
    SET_ENCRYPTED_SEED
} from '../actions/settings';
import type { Action } from './types';

const defaultState = {
    idleTimeout: 5,
    c31Enabled: false,
    idleMiningEnabled: true,
    outsideWorldPayments: true,
    walletPassword: undefined,
    encryptedSeed: undefined
}

export default function(state = defaultState, action: Action) {
    const getNextState = () => {
        switch (action.type) {
        case SET_OUTSIDE_WORLD_PAYMENTS_ENABLED:
            return {...state, outsideWorldPayments: action.payload}
        case SET_IDLE_TIMEOUT:
            return {...state, idleTimeout: action.payload}
        case SET_C31_ENABLED:
            return {...state, c31Enabled: action.payload}
        case SET_IDLE_MINING_ENABLED:
            return {...state, idleMiningEnabled: action.payload}
        case SET_WALLET_PASSWORD:
            return {...state, walletPassword: action.payload}
        case SET_ENCRYPTED_SEED:
            return {...state, encryptedSeed: action.payload}
        default:
            return state;
        }
    }
    const newState = getNextState();
    if(newState != state) {
        localStorage.kingfishMinerSettings = JSON.stringify(newState);
    }
    return newState;
}