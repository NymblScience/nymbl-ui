// Uses https://github.com/vuelidate/vuelidate as a core

import useVuelidate from '@vuelidate/core';

const useValidation = (rules, state, config) => useVuelidate(rules, state, config);

const getError = (field, v$) => (v$[field].$errors.length > 0 ? v$[field].$errors[0].$message : null);

const isInvalid = (field, v$) => v$[field].$invalid;

export { getError, isInvalid, useValidation };
