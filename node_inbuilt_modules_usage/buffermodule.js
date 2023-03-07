// 2.BUFFER: It is used to perform operations on raw bytes of data which reside in memory.
const buffer = Buffer.from('hello world', 'utf8');
console.log(buffer.toString('hex'));
