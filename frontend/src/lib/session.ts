import crypto from "crypto";

export type SessionUser = {
  id: number;
  name: string;
  email: string;
  role: string;
};

const SESSION_COOKIE_NAME = "lms_session";

function getSessionSecret() {
  const secret = process.env.SESSION_SECRET;

  if (!secret) {
    throw new Error("SESSION_SECRET is not defined");
  }

  return secret;
}

function signPayload(payload: string) {
  return crypto
    .createHmac("sha256", getSessionSecret())
    .update(payload)
    .digest("hex");
}

export function createSessionValue(user: SessionUser) {
  const payload = Buffer.from(JSON.stringify(user)).toString("base64url");
  const signature = signPayload(payload);

  return payload + "." + signature;
}

export function readSessionValue(value: string | undefined) {
  if (!value) {
    return null;
  }

  const parts = value.split(".");

  if (parts.length !== 2) {
    return null;
  }

  const [payload, signature] = parts;
  const expectedSignature = signPayload(payload);

  if (signature !== expectedSignature) {
    return null;
  }

  try {
    return JSON.parse(
      Buffer.from(payload, "base64url").toString("utf8")
    ) as SessionUser;
  } catch {
    return null;
  }
}

export { SESSION_COOKIE_NAME };