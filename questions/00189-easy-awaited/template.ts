type MyAwaited<T extends Promise<any>> = T extends Promise<infer Return>
  ? Return extends Promise<any>
    ? MyAwaited<Return>
    : Return
  : never
