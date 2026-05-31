import { spawn } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const command = process.argv[2] || 'dev';
const root = dirname(dirname(fileURLToPath(import.meta.url)));
const astroBin = process.platform === 'win32'
  ? join(root, 'node_modules', '.bin', 'astro.cmd')
  : join(root, 'node_modules', '.bin', 'astro');

const child = spawn(process.platform === 'win32' ? `"${astroBin}" ${command}` : astroBin, process.platform === 'win32' ? [] : [command], {
  cwd: root,
  env: {
    ...process.env,
    ASTRO_TELEMETRY_DISABLED: '1',
  },
  shell: process.platform === 'win32',
  stdio: 'inherit',
});

child.on('exit', (code, signal) => {
  if (signal) {
    process.kill(process.pid, signal);
    return;
  }

  process.exit(code ?? 1);
});
