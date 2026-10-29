import { spawnSync } from 'node:child_process';
import { createRequire } from 'node:module';
import { mkdirSync } from 'node:fs';
import path from 'node:path';

const ffmpeg = createRequire(import.meta.url)('ffmpeg-static');
const root = path.resolve(import.meta.dirname, '..');
const outDir = path.join(root, 'public', 'videos');

const jobs = [
	{
		name: 'teaching',
		input: 'C:\\Users\\tsam2\\Downloads\\erin-teaching.mp4',
		output: path.join(outDir, 'erin-teaching-30s.mp4'),
		seek: ['-ss', '0', '-t', '30'],
		maxSeconds: 30.5,
	},
	{
		name: 'gameplay',
		input: 'C:\\Users\\tsam2\\Downloads\\student-gameplay.mp4',
		output: path.join(outDir, 'student-gameplay-from-1m28.mp4'),
		seek: ['-ss', '88'],
		maxSeconds: 30.5,
	},
];

mkdirSync(outDir, { recursive: true });

function run(args) {
	const result = spawnSync(ffmpeg, args, { encoding: 'utf8' });
	if (result.error) throw result.error;
	return result;
}

function inspect(file) {
	const result = run(['-hide_banner', '-i', file]);
	const info = `${result.stderr ?? ''}\n${result.stdout ?? ''}`;
	const duration = info.match(/Duration:\s+(\d+):(\d+):(\d+(?:\.\d+)?)/);
	const seconds = duration
		? Number(duration[1]) * 3600 + Number(duration[2]) * 60 + Number(duration[3])
		: null;
	return { seconds, hasAudio: /Audio:/.test(info) };
}

for (const job of jobs) {
	const args = [
		'-y',
		...job.seek,
		'-i',
		job.input,
		'-an',
		'-c:v',
		'libx264',
		'-preset',
		'veryfast',
		'-crf',
		'23',
		'-pix_fmt',
		'yuv420p',
		'-movflags',
		'+faststart',
		'-vf',
		'scale=min(1280\\,iw):-2',
		job.output,
	];
	const encoded = run(args);
	if (encoded.status !== 0) {
		console.error(encoded.stderr);
		process.exit(encoded.status ?? 1);
	}
	const info = inspect(job.output);
	console.log(`${job.name}: ${info.seconds}s audio=${info.hasAudio}`);
	if (info.hasAudio || info.seconds == null || info.seconds > job.maxSeconds || info.seconds < 5) {
		console.error(`Unexpected clip: ${job.name}`);
		process.exit(1);
	}
}
