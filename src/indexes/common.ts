export type IndexableObj = Record<string, unknown>;

export type Properties = string[];
export type TargetProperty = string;

export type IndexOptions<T extends IndexableObj> = {
  targetProperties: Properties;
};
export type Extension = {
  deleteFromIndex: () => void ;
};
export type Captor<T extends IndexableObj> = (obj: T) => T & Extension;
export type Updater<T extends IndexableObj> = (
  obj: T,
  propName: string,
  newValue: T[string]
) => void;
export type Ingestor<T extends IndexableObj> = (obj: T) => void;
export type Deleter<T extends IndexableObj> = (obj: T) => void;

export class IndexError extends Error {}
export class MissingIndex extends IndexError {}
export class MissingIndexValue extends IndexError {}
export class ConfigurationError extends IndexError {}
