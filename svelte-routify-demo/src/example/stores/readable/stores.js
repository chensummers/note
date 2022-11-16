import { readable } from 'svelte/store';

export const time = readable(null, function start(set) {
	// implementation goes here

	const interval = setInterval(() => {
		set(new Date());
	}, 1000);

	return function stop() {
		clearInterval(interval);
	};
});
