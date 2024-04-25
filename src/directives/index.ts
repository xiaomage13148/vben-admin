/**
 * Configure and register global directives
 */
import type { App } from 'vue';
import { setupPermissionDirective } from './permission';
import { setupLoadingDirective } from './loading';
import { setupEllipsisDirective } from './ellipsis';

export function setupGlobDirectives(app: App) {
  // 设置权限指令
  setupPermissionDirective(app);
  // 设置正在加载指令
  setupLoadingDirective(app);
  // 设置省略指令
  setupEllipsisDirective(app);
}
