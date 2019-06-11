export const imports = {
  'AppHeader.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "app-header" */ 'AppHeader.mdx'
    ),
  'ButtonTooltip.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "button-tooltip" */ 'ButtonTooltip.mdx'
    ),
  'DynamicElement.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "dynamic-element" */ 'DynamicElement.mdx'
    ),
  'EditableTable.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "editable-table" */ 'EditableTable.mdx'
    ),
  'EmptyState.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "empty-state" */ 'EmptyState.mdx'
    ),
  'Item.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "item" */ 'Item.mdx'),
  'ModalForm.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "modal-form" */ 'ModalForm.mdx'
    ),
  'NotificationIcon.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "notification-icon" */ 'NotificationIcon.mdx'
    ),
  'PageHeader.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "page-header" */ 'PageHeader.mdx'
    ),
  'PopoverDropdown.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "popover-dropdown" */ 'PopoverDropdown.mdx'
    ),
  'SkeletonTable.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "skeleton-table" */ 'SkeletonTable.mdx'
    ),
  'UserAvatar.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "user-avatar" */ 'UserAvatar.mdx'
    ),
}
