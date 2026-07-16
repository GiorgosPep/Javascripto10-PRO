// Μετατροπή δευτερολέπτων σε λεπτά και δευτερόλεπτα

const totalSeconds = 75;

const SECONDS_PER_MINUTE = 60;

const totalMinutes = Math.floor(totalSeconds / SECONDS_PER_MINUTE);

const remainingSeconds = totalSeconds % SECONDS_PER_MINUTE;

console.log(`Τα ${totalSeconds} είναι ${totalMinutes} λεπτά και ${remainingSeconds} δευτερόλεπτα`);