/**
 * Adapted from dominus v6.0.1
 * https://github.com/bevacqua/dominus/blob/master/src/classes.js
 */

const trim = /^\s+|\s+$/g;
const whitespace = /\s+/g;

const isElementObject = (o) => o && typeof o === 'object' && typeof o.nodeName === 'string' && o.nodeType === 1;

const isElement = (o) => {
  const elementObjects = typeof HTMLElement === 'object';
  return elementObjects ? o instanceof HTMLElement : isElementObject(o);
};

const interpret = (input) => (typeof input === 'string' ? input.replace(trim, '').split(whitespace) : input);

const classes = (el) => {
  if (isElement(el)) {
    return (el.getAttribute('class') || '').replace(trim, '').split(whitespace);
  }

  return [];
};

const set = (el, input) => {
  if (isElement(el)) {
    el.setAttribute('class', interpret(input).join(' '));
  }
};
const remove = (el, input) => {
  const current = classes(el);
  const values = interpret(input);

  values.forEach((value) => {
    const i = current.indexOf(value);
    if (i !== -1) {
      current.splice(i, 1);
    }
  });

  set(el, current);

  return current;
};
const add = (el, input) => {
  const current = remove(el, input);
  const values = interpret(input);
  /*eslint-disable */
  current.push.apply(current, values);
  /* eslint-enable */

  set(el, current);

  return current;
};

const contains = (el, input) => {
  const current = classes(el);
  const values = interpret(input);

  return values.every((value) => current.indexOf(value) !== -1);
};

export default {
  add,
  remove,
  contains,
  has: contains,
  set,
  get: classes,
};
