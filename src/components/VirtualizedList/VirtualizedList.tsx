import React from 'react';
import { AutoSizer, List, ListRowRenderer } from 'react-virtualized';

type VirtualizedListProps<T> = {
  data: T[];
  rowHeight: number;
  overScanRowCount: number;
  onItemClick: (navigateTo: string) => void;
  renderRow: ListRowRenderer;
};

const VirtualizedList = <T extends object>({
  data,
  onItemClick,
  rowHeight,
  renderRow,
  overScanRowCount,
}: VirtualizedListProps<T>) => {
  return (
    <AutoSizer defaultWidth={100} defaultHeight={100}>
      {({ width, height }) => {
        return (
          <List
            width={width}
            height={height}
            rowHeight={rowHeight}
            rowRenderer={renderRow}
            rowCount={data.length}
            overscanRowCount={overScanRowCount}
            data={data}
            onItemClick={onItemClick}
          />
        );
      }}
    </AutoSizer>
  );
};

export default VirtualizedList;
