import React from 'react';
import { getDatumValue, formatNumber, formatDateTime } from '../../../tools/datatools';
import Editable from '../Editable';

const dataCellDetails = ({ enteredBy, ctime }, value) => (
  <>
    <p>
      Cell value:
      { ' ' }
      { value }
    </p>
    <p>
      Entered by:
      { enteredBy }
    </p>
    <p>
      Creation time:
      { formatDateTime(ctime) }
    </p>
  </>
);
const computedCellDetails = ({ fullLabel }, value) => (
  <>
    <p>
      { value }
    </p>
    <p>
      Calculated as { fullLabel }
    </p>
  </>
);

export default function Cell(props) {
  const {
    col, exp, cellId, makeClickable, editCell,
  } = props;
  const value = getDatumValue(col, exp);
  const padding = Math.trunc(value).toString().length;
  return (
    col.id
      ? (
        <td {...makeClickable(cellId, dataCellDetails(exp, value))}>
          <Editable cellId={cellId} type="input" onSave={editCell}>{ value }</Editable>
        </td>
      )
      : (
        <td
          style={{ paddingRight: `${padding}ch` }}
          {...makeClickable(cellId, computedCellDetails(col, value), true)}
        >
          { formatNumber(value) }
        </td>
      )
  );
}
