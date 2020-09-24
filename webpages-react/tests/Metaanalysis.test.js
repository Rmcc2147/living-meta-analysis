import React from 'react';
import renderer from 'react-test-renderer';
import MetaanalysisApp from '../components/MetaanalysisApp';
import formulas from '../components/metaanalysis/aggregates/Formulas';

const formula1 = formulas().moderatorFormulas[0];

const testMA = {
  aggregates: [
    {
      formula: 'weightedMeanAggr(3,5)',
      formulaName: 'weightedMeanAggr',
      formulaObj: formula1,
      formulaParams: [],
      fullLabel: 'Weighted Mean( Exp Outcome [%], Control Outcome [%] )',
      metaanalysis: {},
      title: 'test',
    },
  ],
  apiurl: 'test',
  columns: [
    {
      description: 'How many participants (in %) endorsed misinformation.',
      id: '3',
      inputType: 'number',
      linkedN: '4',
      sourceColumnMap: {
        '/id/p/1089072434411': '5',
      },
      subType: 'calculator',
      title: 'Exp Outcome [%]',
      type: 'characteristic',
      visibility: true,
    },
    {
      id: '4',
      inputType: 'number',
      sourceColumnMap: {
        '/id/p/1089072434411': '3',
      },
      subType: 'calculatorN',
      title: 'n (exp)',
      type: 'characteristic',
      visibility: true,
    },
    {
      description: 'How many participants (in %) endorsed misinformation.',
      id: '5',
      inputType: 'number',
      linkedN: '6',
      sourceColumnMap: {
        '/id/p/1089072434411': '2',
      },
      subType: 'calculator',
      title: 'Control Outcome [%]',
      type: 'characteristic',
      visibility: true,
    },
    {
      id: '6',
      inputType: 'number',
      sourceColumnMap: {
        '/id/p/1089072434411': '4',
      },
      subType: 'calculatorN',
      title: 'n (con)',
      type: 'characteristic',
      visibility: true,
    },
    {
      id: '1',
      inputType: 'string',
      sourceColumnMap: {
        '/id/p/1089072434411': '6',
      },
      subType: 'pspecific',
      title: 'Specification',
      type: 'characteristic',
      visibility: true,
    },
  ],
  ctime: 1489071495934,
  description: 'This is a test analysis only',
  enteredBy: 'test@test.test',
  enteredByUsername: 'Test',
  excludedExperiments: [],
  graphs: [],
  groupingAggregates: [],
  groupingColumn: '1',
  groupingColumnObj: {},
  groups: [
    'test',
  ],
  hashcols: {},
  hiddenCols: [],
  hiddenExperiments: [],
  id: '/id/ma/0000000000001',
  mtime: 1599502628634,
  paperOrder: [
    '/id/p/1089072434411',
  ],
  papers: [],
  published: 'test publishing info',
  tags: [],
  title: 'testMA',
};
testMA.aggregates[0].metaanalysis = testMA;
testMA.aggregates[0].formulaParams[0] = testMA.columns[0];
testMA.aggregates[0].formulaParams[1] = testMA.columns[2];
testMA.groupingColumnObj = testMA.columns[4];

function fakeStateUpdate(x) {
  return x;
}

function testMetaanalysis() {
  const ma = [testMA, fakeStateUpdate];
  const mState = [[testMA], fakeStateUpdate];

  test('Metaanalysis renders', () => {
    const component = renderer.create(
      <MetaanalysisApp />,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
}

testMetaanalysis();
