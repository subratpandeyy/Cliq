import { TOKEN_FILE } from "../cli/commands/auth/login";

export async function getStoredToken() {
    try {
        const data = await fs.readFile(TOKEN_FILE, "utf-8");
        const token = JSON.parse(data);
        return token;
    }
    catch(error) {
        // file doesn't exists or can't be read
        return null;
    }
}