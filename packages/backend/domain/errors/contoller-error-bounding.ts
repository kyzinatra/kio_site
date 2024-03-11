import { CustomRequest, TController } from '../types';
import { NextFunction, Response } from 'express';

export const controllerErrorBounding = <T extends TController<any>>(controller: T) => {
    return async (...args: [CustomRequest<any>, Response, NextFunction]) => {
        let controllerRes;

        try {
            controllerRes = await controller(...args);
        } catch (e) {
            args[2]?.(e);
        }

        return controllerRes;
    };
};
