import { mkdir } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const src =
	'C:/Users/tsam2/.cursor/projects/c-Users-tsam2-OneDrive-Projects-trapp-tutoring/assets/brain-icon-recolor-10686020-ea66-44c1-a2d0-2090caa19196.jpg';
const out = path.resolve('public/images/dyslexia/letter-tiles.jpg');

const cream = [244, 239, 230];
const tealPaper = [95, 143, 134];
const book = [208, 144, 56];
const ink = [18, 56, 50];

const proto = {
	blue: [0, 172, 214],
	yellow: [226, 200, 46],
	wood: [206, 160, 118],
	ink: [62, 48, 48],
};

function lum(r, g, b) {
	return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

function clamp(n) {
	return Math.max(0, Math.min(255, Math.round(n)));
}

function dist(r, g, b, ref) {
	const dr = r - ref[0];
	const dg = g - ref[1];
	const db = b - ref[2];
	return Math.sqrt(dr * dr + dg * dg + db * db);
}

function shade(r, g, b, target, reference) {
	const scale = lum(r, g, b) / lum(...reference);
	return target.map((channel) => clamp(channel * scale));
}

const cropped = sharp(src).extract({ left: 0, top: 21, width: 1024, height: 684 });
const { data, info } = await cropped.removeAlpha().raw().toBuffer({ resolveWithObject: true });
const { width, height, channels } = info;
const next = Buffer.alloc(width * height * 3);
const keys = Object.keys(proto);

for (let p = 0; p < width * height; p += 1) {
	const i = p * channels;
	const r = data[i];
	const g = data[i + 1];
	const b = data[i + 2];
	let rgb;
	if (r > 242 && g > 242 && b > 242) {
		rgb = cream;
	} else {
		const weights = {};
		let total = 0;
		for (const key of keys) {
			const weight = Math.exp(-dist(r, g, b, proto[key]) / 26);
			weights[key] = weight;
			total += weight;
		}
		const painted = {
			blue: shade(r, g, b, cream, proto.blue),
			yellow: shade(r, g, b, tealPaper, proto.yellow),
			wood: shade(r, g, b, book, proto.wood),
			ink: shade(r, g, b, ink, proto.ink),
		};
		rgb = [0, 0, 0];
		for (const key of keys) {
			const share = weights[key] / total;
			rgb[0] += painted[key][0] * share;
			rgb[1] += painted[key][1] * share;
			rgb[2] += painted[key][2] * share;
		}
		rgb = rgb.map((channel) => clamp(channel));
	}
	const o = p * 3;
	next[o] = rgb[0];
	next[o + 1] = rgb[1];
	next[o + 2] = rgb[2];
}

await mkdir(path.dirname(out), { recursive: true });
await sharp(next, { raw: { width, height, channels: 3 } }).jpeg({ quality: 88, mozjpeg: true }).toFile(out);
console.log(out, width, height);
