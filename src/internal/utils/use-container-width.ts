// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import React from 'react';
import { useContainerQuery } from '../hooks/container-queries';

export default function useContainerWidth(
  defaultValue = 0,
  threshold = 1
): [width: number, ref: React.Ref<HTMLDivElement>] {
  const [width, ref] = useContainerQuery<number>((rect, prev) => {
    if (prev === null) {
      return rect.width;
    }
    return Math.abs(prev - rect.width) >= threshold ? rect.width : prev;
  });

  return [width ?? defaultValue, ref];
}
