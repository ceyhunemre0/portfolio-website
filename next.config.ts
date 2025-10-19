import type { NextConfig } from "next";
import * as os from "os";

function getLocalIPv4(): string | undefined {
  const nets = os.networkInterfaces();
  for (const name of Object.keys(nets)) {
    const net = nets[name];
    if (!net) continue;
    for (const addr of net) {
      // addr.family can be "IPv4" or 4 depending on Node version/typings
      if ((addr.family === "IPv4") && !addr.internal) {
        return addr.address;
      }
    }
  }
  return undefined;
}

// You can override with DEV_HOST env var (e.g. "192.168.1.5")
const localIp = process.env.DEV_HOST || getLocalIPv4();

const nextConfig: NextConfig = {
  allowedDevOrigins: [
    "http://localhost:3000",
    ...(localIp ? [`http://${localIp}:3000`] : []),
  ],
};

export default nextConfig;
