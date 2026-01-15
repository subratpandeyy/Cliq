## Hi Devs
- This directory contains the `server` of the CLI based application.

## Setup
- Start with installing dependencies:
```bash
npm install express cors prisma @prisma/client better-auth dotenv commander chalk boxen figlet @clack/prompts yocto-spinner
```

- Open Git Bash and run: 
```bash
chmod +x src/cli/main.js
```

- Set up your .env with: 
```bash
PORT=
DATABASE_URL=
BETTER_AUTH_SECRET=
BETTER_AUTH_URL=http://localhost:3005 # Base URL of your app

PRISMA_CLIENT_ENGINE_TYPE=binary
GITHUB_CLIENT_ID=
GITHUB_CLIENT_SECRET=
```

-  Run the command to run the CLI Agent: 
```bash
cliq
```
