import dotenv from "dotenv";

dotenv.config();

function requireEnvironmentVariable(name: string): string {
  const value = process.env[name];

  if (!value) {
    throw new Error(
      `Required environment variable "${name}" is missing`
    );
  }

  return value;
}

export const environment = {
  todoBaseUrl: requireEnvironmentVariable("TODO_BASE_URL"),
  exampleBaseUrl: requireEnvironmentVariable("EXAMPLE_BASE_URL")
};
