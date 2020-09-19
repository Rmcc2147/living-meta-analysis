import React from 'react';

function Undo(props) {
  const { maState, updateMetaanalysis, updateComponents } = props;
  const [metaanalysisStates, setMetaanalysisStates] = maState;
  const [
    setDescription,
    setPublished,
    setColumns,
    setPapers,
    setPaperOrder,
    setAggregates,
    setGroupingAggregates,
    setGraphs,
  ] = updateComponents;

  function revertState() {
    const maStatesClone = [...metaanalysisStates];
    if (maStatesClone.length > 1) {
      maStatesClone.pop();
    }
    const newMa = maStatesClone[maStatesClone.length - 1];

    updateMetaanalysis(newMa);
    setMetaanalysisStates(maStatesClone);
    setDescription(newMa.description);
    setPublished(newMa.published);
    setColumns(newMa.columns);
    setPapers(newMa.papers);
    setPaperOrder(newMa.paperOrder);
    setAggregates(newMa.aggregates);
    setGroupingAggregates(newMa.groupingAggregates);
    setGraphs(newMa.graphs);
  }

  return (
    <button type="submit" className={metaanalysisStates.length === 0 ? 'undoButton inactive' : 'undoButton active'} onClick={revertState}>
      Undo
    </button>
  );
}

export default Undo;
