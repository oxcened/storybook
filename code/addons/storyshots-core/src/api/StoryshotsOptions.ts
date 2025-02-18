import type { GlobOptionsWithFileTypesFalse } from 'glob';
import type { Stories2SnapsConverter } from '../Stories2SnapsConverter';
import type { SupportedFramework } from '../frameworks';
import type { RenderTree } from '../frameworks/Loader';

export interface TestMethodOptions {
  story: any;
  context: any;
  renderTree: RenderTree;
  renderShallowTree: RenderTree;
  stories2snapsConverter: Stories2SnapsConverter;
  snapshotFileName: string;
  options: any;
  done?: () => void;
}

export interface StoryshotsTestMethod {
  (args: TestMethodOptions): any;
  beforeAll?: () => void | Promise<void>;
  beforeEach?: () => void | Promise<void>;
  afterAll?: () => void | Promise<void>;
  afterEach?: () => void | Promise<void>;
}

export interface StoryshotsOptions {
  asyncJest?: boolean;
  config?: (options: any) => void;
  integrityOptions?: GlobOptionsWithFileTypesFalse | false;
  configPath?: string;
  suite?: string;
  storyKindRegex?: RegExp | string;
  storyNameRegex?: RegExp | string;
  framework?: SupportedFramework;
  test?: StoryshotsTestMethod;
  renderer?: Function;
  snapshotSerializers?: jest.SnapshotSerializerPlugin[];
  /**
   * @Deprecated The functionality of this option is completely covered by snapshotSerializers which should be used instead.
   */
  serializer?: any;
  stories2snapsConverter?: Stories2SnapsConverter;
}
