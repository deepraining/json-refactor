import refactor from './refactor';
import set from './set';
import register from './register';
import intOperator from './operator/int';
import floatOperator from './operator/float';
import boolOperator from './operator/bool';
import stringOperator from './operator/string';
import sumOperator from './operator/sum';
import averageOperator from './operator/average';

// built-in operators
register(intOperator);
register(floatOperator);
register(boolOperator);
register(stringOperator);
register(sumOperator);
register(averageOperator);

refactor.set = set;
refactor.register = register;

export default refactor;
