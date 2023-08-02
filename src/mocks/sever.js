//use the following website to install and setup the Mock Service Worker(MSW)
// https://mswjs.io/docs/getting-started/install 

// src/mocks/server.js
import { setupServer } from 'msw/node'
import { handlers } from './handlers'

// This configures a request mocking server with the given request handlers.
export const server = setupServer(...handlers)