type MyOmit<T, K extends keyof T> = {
  [P in keyof T as P extends K ? never : P]: P extends K ? never : T[P];
}
