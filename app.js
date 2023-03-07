// for inttial development purposes
const mockData = [
  {
    id: 1,
    description: 'Go to the gym',
    status: false,
  },
  {
    id: 2,
    description: 'Buy groceries',
    status: false,
  },
  {
    id: 3,
    description: 'Call Amanda',
    status: false,
  },
];

// create tasks dynamically using template
const todoContainer = document.querySelector('.todo-list');

const createTasks = (tasks) => {
  const { description } = tasks;

  const template = document.querySelector('#template');
  const domFragment = template.content.cloneNode(true);

  // add task description into the element
  domFragment.querySelector('.task').textContent = description;

  // add the fragment into the document
  todoContainer.appendChild(domFragment);
};

mockData.forEach(createTasks);
