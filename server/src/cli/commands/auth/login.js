import { cancel, confirm, intro, isCancel, outro } from "@clack/prompts";
import { logger } from "better-auth";
import { createAuthClient } from "better-auth/client";
import { deviceAuthorizationClient } from "better-auth/client/plugins";

import chalk from "chalk";
import { Command } from "commander";
import fs from "fs/promises";
import open from "open";
import os from "os";
import path from "path";
import yoctoSpinner from "yocto-spinner";
import * as z from "zod";
import dotenv from "dotenv";
import prisma from "../../../lib/db.js";

dotenv.config();

const URL = "http://localhost:3005";
const CLIENT_ID = process.env.GITHUB_CLIENT_ID;
const CONFIG_DIR = path.join(os.homedir(), ".better-auth");
const TOKEN_FILE = path.join(CONFIG_DIR, "token.json");

export async function loginAction(opts) {
    const options = z.object({
        serverUrl: z.string().optional(),
        clientId: z.string().optional()
    });

    const serverUrl = options.serverUrl || URL;
    const clientId = options.clientId || CLIENT_ID;

    intro(chalk.bold("Auth CLI Login"));

    // TODO: Change this with token mgmt utils
    const existingToken = false;
    const expired = false;

    if(existingToken && !expired) {
        const shouldReAuth = await confirm({
            message: "You're already logged in. Do you want to log in again?",
            initialValue: false
        });

        if(isCancel(shouldReAuth) || !shouldReAuth) {
            cancel("Login Cancelled");
            process.exit(0);
        }
    }
}

// Commander Login