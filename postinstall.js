import fse from "fs-extra";
import path from "path";
import { fileURLToPath } from "url";

// Get the directory name of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define the topDir
const topDir = __dirname;

// Empty the directory
fse.emptyDirSync(path.join(topDir, "public", "tinymce"));

// Copy the TinyMCE files
fse.copySync(
  path.join(topDir, "node_modules", "tinymce"),
  path.join(topDir, "public", "tinymce"),
  { overwrite: true }
);
