export type AgeGroup = 'preschool' | 'elementary' | 'high-school' | 'adulthood';

export interface WarningSign {
	id: string;
	text: string;
	details?: string[];
}

export const ageGroups: { id: AgeGroup; label: string }[] = [
	{ id: 'preschool', label: 'Preschool' },
	{ id: 'elementary', label: 'Elementary' },
	{ id: 'high-school', label: 'High School' },
	{ id: 'adulthood', label: 'Adulthood' },
];

export const preschoolSigns: WarningSign[] = [
	{ id: 'p1', text: 'Delayed speech' },
	{ id: 'p2', text: 'Mixing up the sounds and syllables in long words' },
	{ id: 'p3', text: 'Chronic ear infections' },
	{ id: 'p4', text: 'Stuttering' },
	{ id: 'p5', text: 'Constant confusion of left versus right' },
	{ id: 'p6', text: 'Late establishing a dominant hand' },
	{ id: 'p7', text: 'Difficulty learning to tie shoes' },
	{ id: 'p8', text: 'Trouble memorizing their address, phone number, or the alphabet' },
	{ id: 'p9', text: 'Can’t create words that rhyme' },
	{ id: 'p10', text: 'Has a close relative with dyslexia' },
];

export const elementarySigns: WarningSign[] = [
	{
		id: 'e1',
		text: 'Dysgraphia (slow, non-automatic handwriting that is difficult to read)',
	},
	{ id: 'e2', text: 'Letter or number reversals continuing past the end of first grade' },
	{ id: 'e3', text: 'Extreme difficulty learning cursive' },
	{
		id: 'e4',
		text: 'Slow, choppy, inaccurate reading',
		details: [
			'Guesses based on shape or context',
			'Skips or misreads prepositions (at, to, of)',
			'Ignores suffixes',
			'Can’t sound out unknown words',
		],
	},
	{ id: 'e5', text: 'Terrible spelling' },
	{
		id: 'e6',
		text: 'Often can’t remember sight words (they, were, does) or homonyms (their, they’re, and there)',
	},
	{ id: 'e7', text: 'Difficulty telling time with a clock with hands' },
	{
		id: 'e8',
		text: 'Trouble with math',
		details: [
			'Memorizing multiplication tables',
			'Memorizing a sequence of steps',
			'Directionality',
		],
	},
	{
		id: 'e9',
		text: 'When speaking, difficulty finding the correct word',
		details: [
			'Lots of “whatyamacallits” and “thingies”',
			'Common sayings come out slightly twisted',
		],
	},
	{ id: 'e10', text: 'Extremely messy bedroom, backpack, and desk' },
	{
		id: 'e11',
		text: 'Dreads going to school',
		details: [
			'Complains of stomach aches or headaches',
			'May have nightmares about school',
		],
	},
];

export const highSchoolSigns: WarningSign[] = [
	{ id: 'h1', text: 'Limited vocabulary' },
	{ id: 'h2', text: 'Extremely poor written expression' },
	{ id: 'h3', text: 'Large discrepancy between verbal skills and written compositions' },
	{ id: 'h4', text: 'Unable to master a foreign language' },
	{ id: 'h5', text: 'Difficulty reading printed music' },
	{ id: 'h6', text: 'Poor grades in many classes' },
	{ id: 'h7', text: 'May drop out of high school' },
];

export const adulthoodSigns: WarningSign[] = [
	{ id: 'a1', text: 'Slow reader' },
	{ id: 'a2', text: 'May have to read a page 2 or 3 times to understand it' },
	{ id: 'a3', text: 'Terrible speller' },
	{
		id: 'a4',
		text: 'Difficulty putting thoughts onto paper',
		details: ['Dreads writing memos or letters'],
	},
	{ id: 'a5', text: 'Still has difficulty with right versus left' },
	{ id: 'a6', text: 'Often gets lost, even in a familiar city' },
	{ id: 'a7', text: 'Sometimes confuses b and d, especially when tired or sick' },
];

export function signsForGroup(group: AgeGroup, includeEarlier: boolean): WarningSign[] {
	if (group === 'preschool') {
		return preschoolSigns;
	}
	if (group === 'elementary') {
		return elementarySigns;
	}
	if (group === 'high-school') {
		return includeEarlier
			? [...preschoolSigns, ...elementarySigns, ...highSchoolSigns]
			: highSchoolSigns;
	}
	return includeEarlier
		? [...preschoolSigns, ...elementarySigns, ...highSchoolSigns, ...adulthoodSigns]
		: adulthoodSigns;
}
