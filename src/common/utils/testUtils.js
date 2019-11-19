const findByAttribute = wrapper => attr =>
  !attr ? null : wrapper.find(`[data-test="${attr}"]`);

const componentRenders = (Component, selector) => {
  const component = findByAttribute(Component)(selector);
  expect(component.length).toBe(1);
};

export { findByAttribute, componentRenders };
