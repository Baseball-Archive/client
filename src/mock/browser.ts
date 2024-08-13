import { setupWorker } from 'msw/browser';
import { users } from './user';

const handlers = [users];

export const worker = setupWorker(...handlers);
