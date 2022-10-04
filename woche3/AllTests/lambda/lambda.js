const id = x => x;
const fst = x => y => x;
const snd = x => y => y;

const T = fst;
const F = snd;

//Durch das erste x () wird geschaut, was ist, wenn es true ist.
// const and = x => y => x(y(T)(F))(y(F)(F));
const and = x => y => x(y)(x);
// const or = x => y => x(y(T)(T))(y(T)(F));
const or = x => y => x(x)(y);


// const Pair = x => y => {return {firstname: x, lastname: y}};
const Pair = fn => ln => selector => selector(fn)(ln);
const firstname = fst;
const lastname = snd;

const Triple = x => y => z => selector => selector(x)(selector(y)(z));
const tfirstname = fst;
const tlastname = () => snd(fst);
const tage = snd;


const Left = x => f => g => f(x);
const Right = x => f => g => g(x);

//eta reduktion
const either = e => x => y => e(x)(y); // kürzen von y
const either2 = e => x => e(x); // kürzen x
const either3 = e => e; // alpha translation
const either4 = id;


// ----- special -----

const Tuple = n => [
    parmStore(n + 1)([])(parms => parms.reduce((accu, it) => accu(it), parms.pop())), // ctor
    ...Array.from({length: n}, (it, idx) => iOfN(n)(idx)())                    // selectors
];

const iOfN = n => i => value => // from n curried params, take argument at position i,
    n === 0
        ? value
        : x => iOfN(n - 1)(i - 1)(i === 0 ? x : value);


const parmStore = n => args => onDone =>  // n args to come
    n === 0
        ? onDone(args)
        : arg => parmStore(n - 1)([...args, arg])(onDone); // store parms in array

const Choice = n => [
    ...Array.from({length: n}, (it, idx) => parmStore(n + 1)([])(parms => parms[idx + 1](parms[0]))), // ctors
    id
];




