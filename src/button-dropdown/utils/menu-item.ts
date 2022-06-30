// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';

export interface GetMenuItemPropsParams {
  disabled: boolean;
  parent?: boolean;
  expanded?: boolean;
}
/**
 * @returns attributes for a menuitem widget given parameters
 */
export const getMenuItemProps: (params: GetMenuItemPropsParams) => React.HTMLProps<HTMLElement> = ({
  disabled,
  parent,
  expanded,
}: GetMenuItemPropsParams) => ({
  role: 'menuitem',
  'aria-disabled': disabled ? 'true' : undefined,
  'aria-haspopup': parent ? 'true' : undefined,
  'aria-expanded': expanded ? 'true' : parent ? 'false' : undefined,
});
