// type Includes<T extends readonly unknown[], U> = U extends T[number] ? true : false

// import type { Equal } from '@type-challenges/utils'

type Includes<T extends readonly any[], U> = T extends [infer First, ...infer Rest]
  ? (<T>() => T extends U ? 1 : 2) extends (<T>() => T extends First ? 1 : 2)
    ? true
    : Includes<Rest, U>
  : false

