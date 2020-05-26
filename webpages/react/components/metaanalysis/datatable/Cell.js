import React from 'react';
import { getDatumValue, formatNumber } from '../../../tools/datatools';

function DataCellDetails(props) {
  const { exp } = props;

  return (
    <>
      <p>
        Entered by:
        {exp.enteredBy}
      </p>
      <p>
        Creation time:
        {exp.ctime}
      </p>
    </>
  );
}

function DataCell(props) {
  const {
    col, exp, makeClickable,
  } = props;
  const value = getDatumValue(col, exp);

  return (
    <td
      {...makeClickable(DataCellDetails)}
    >
      {value}
    </td>
  );
}

function ComputedCell(props) {
  const {
    col, exp, cellId, clickable,
  } = props;
  const value = getDatumValue(col, exp);

  return (
    <clickable.type
      {...clickable.props}
      cellId={cellId}
      cellContent={<td>{formatNumber(value)}</td>}
      cellDetails={(
        <>
          <p>
            {value}
          </p>
          <p>
            Calculated as
            {' '}
            {col.fullLabel}
          </p>
        </>
      )}
    />
  );
}

function Cell(props) {
  return props.col.id ? DataCell(props) : ComputedCell(props);
}

function shouldMemo(prev, next) {
  const oldDisplayedCell = prev.clickable.props.displayedCell;
  const newDisplayedCell = next.clickable.props.displayedCell;
  if ((oldDisplayedCell.cellId === next.cellId) || (newDisplayedCell.cellId === prev.cellId)) {
    return false;
  }
  return true;
}
// We'll re-render the Cell only when we detect a change (cell color)
export default React.memo(Cell, shouldMemo);
