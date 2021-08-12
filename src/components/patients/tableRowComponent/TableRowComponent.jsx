import React from 'react';
import {
  TableCellElement,
  TableRowElement,
  basicStyles,
} from './TableRowComponent.style';

function renderName({ title, first, last }) {
  return `${title}. ${first} ${last} `;
}

export function TableRowComponent({ user }) {
  return (
    <TableRowElement>
      <TableCellElement align='center' className={basicStyles().customer}>
        <img
          src={user.picture.thumbnail}
          alt='avatar'
          className={basicStyles().avatar}
        />

        {renderName(user.name)}
      </TableCellElement>
      <TableCellElement align='center'>{`${user.gender}`}</TableCellElement>
      <TableCellElement align='center'>{`${user.nat}`}</TableCellElement>
      <TableCellElement align='center'>Actions</TableCellElement>
    </TableRowElement>
  );
}
