import { setupWorker } from 'msw/browser';
import { signup, user } from './handler';

export const worker = setupWorker(...signup, user);
