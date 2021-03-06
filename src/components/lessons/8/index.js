import getDescriptionComponent from '../../taskDescription';
import raw from 'raw.macro';

import EventsTask1 from './events/1';
import EventsTask2 from './events/2';
import EventsTask3 from './events/3';

import ListsTask1 from './lists/1';
import ListsTask2 from './lists/2';
import ListsTask3 from './lists/3';
import ListsTask4 from './lists/4';

import FormsTask1  from './forms/1';
import FormsTask2  from './forms/2';
import FormsTask3  from './forms/3';

import CommonTask1  from './common/1';

//in codesandbox.io raw.macro can't load source from relative path
//raw('./lists/1/README.md')
const basePath = './src/components/lessons/8/';

const listsTask1Description = raw(basePath + 'lists/1/README.md');
const listsTask2Description = raw(basePath + 'lists/2/README.md');
const listsTask3Description = raw(basePath + 'lists/3/README.md');
const listsTask4Description = raw(basePath + 'lists/4/README.md');

const formsTask1Description = raw(basePath + 'forms/1/README.md');
const formsTask2Description = raw(basePath + 'forms/2/README.md');
const formsTask3Description = raw(basePath + 'forms/3/README.md');

const eventsTask1Description = raw(basePath + 'events/1/README.md');
const eventsTask2Description = raw(basePath + 'events/2/README.md');
const eventsTask3Description = raw(basePath + 'events/3/README.md');

const commonTask1Description = raw(basePath + 'common/1/README.md');

//map tasks to topics names
export default {
  events: [
    {task: EventsTask1, description: getDescriptionComponent(eventsTask1Description)},
    {task: EventsTask2, description: getDescriptionComponent(eventsTask2Description)},
    {task: EventsTask3, description: getDescriptionComponent(eventsTask3Description)},
  ],
  lists: [
    {task: ListsTask1, description: getDescriptionComponent(listsTask1Description)},
    {task: ListsTask2, description: getDescriptionComponent(listsTask2Description)},
    {task: ListsTask3, description: getDescriptionComponent(listsTask3Description)},
    {task: ListsTask4, description: getDescriptionComponent(listsTask4Description)},
  ],
  forms: [
    {task: FormsTask1, description: getDescriptionComponent(formsTask1Description)},
    {task: FormsTask2, description: getDescriptionComponent(formsTask2Description)},
    {task: FormsTask3, description: getDescriptionComponent(formsTask3Description)},
  ],
  common: [
    {task: CommonTask1, description: getDescriptionComponent(commonTask1Description)}
  ],
};
