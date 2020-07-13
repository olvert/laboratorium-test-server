export type FactoryArgs = {
  current: string,
  path: string,
  hash: string,
  depth: number,
}

export type Model = {
  current: string;
  links: string[];
}

export const createModel = (args: FactoryArgs): Model => {
  const {
    current,
    path,
    hash,
    depth,
  } = args;

  const nextDepth = depth + 1;

  const links = Array.from(Array(depth * 2).keys()).map((k) => {
    const nextHash = `${hash}${k}`;
    return `${path}?hash=${nextHash}&depth=${nextDepth}`;
  });

  return {
    current,
    links,
  };
};
