(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('clone')) :
  typeof define === 'function' && define.amd ? define(['clone'], factory) :
  (global.JSONRefactor = factory(global.clone));
}(this, (function (clone) {
  clone = clone && clone.hasOwnProperty('default') ? clone['default'] : clone;

  var prefix = 'json-refactor: ';
  var error = function (str) {
      var rest = [], len = arguments.length - 1;
      while ( len-- > 0 ) rest[ len ] = arguments[ len + 1 ];

      console.error.apply(console, [ prefix + str ].concat( rest ));
  };


  //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2dlci5qcyhvcmlnaW5hbCkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsS0FBQSxDQUFNLFNBQVM7QUFFZixPQUFPLEtBQUEsQ0FBTSxPQUFPLEdBQUssRUFBQSxHQUFHLE1BQVQsR0FBa0I7SUFDbkMsT0FBQSxDQUFRLEdBQVIsQ0FBWSxNQUFBLENBQUEsQ0FBQSxDQUFTLEtBQUssR0FBRztBQUMvQjtBQUVBLE9BQU8sS0FBQSxDQUFNLFFBQVEsR0FBSyxFQUFBLEdBQUcsTUFBVCxHQUFrQjtJQUNwQyxPQUFBLENBQVEsSUFBUixDQUFhLE1BQUEsQ0FBQSxDQUFBLENBQVMsS0FBSyxHQUFHO0FBQ2hDO0FBRUEsT0FBTyxLQUFBLENBQU0sUUFBUSxHQUFLLEVBQUEsR0FBRyxNQUFULEdBQWtCO0lBQ3BDLE9BQUEsQ0FBUSxJQUFSLENBQWEsTUFBQSxDQUFBLENBQUEsQ0FBUyxLQUFLLEdBQUc7QUFDaEM7QUFFQSxPQUFPLEtBQUEsQ0FBTSxTQUFTLEdBQUssRUFBQSxHQUFHLE1BQVQsR0FBa0I7SUFDckMsT0FBQSxDQUFRLEtBQVIsQ0FBYyxNQUFBLENBQUEsQ0FBQSxDQUFTLEtBQUssR0FBRztBQUNqQztBQUVBLE9BQU8sS0FBQSxDQUFNLGFBQWEsR0FBQSxJQUFPO0lBQy9CLE1BQU0sSUFBSSxLQUFKLENBQVUsTUFBQSxDQUFBLENBQUEsQ0FBUztBQUMzQjtBQXBCQSIsImZpbGUiOiJsb2dnZXIuanMob3JpZ2luYWwpIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcHJlZml4ID0gJ2pzb24tcmVmYWN0b3I6ICc7XG5cbmV4cG9ydCBjb25zdCBsb2cgPSAoc3RyLCAuLi5yZXN0KSA9PiB7XG4gIGNvbnNvbGUubG9nKHByZWZpeCArIHN0ciwgLi4ucmVzdCk7XG59O1xuXG5leHBvcnQgY29uc3QgaW5mbyA9IChzdHIsIC4uLnJlc3QpID0+IHtcbiAgY29uc29sZS5pbmZvKHByZWZpeCArIHN0ciwgLi4ucmVzdCk7XG59O1xuXG5leHBvcnQgY29uc3Qgd2FybiA9IChzdHIsIC4uLnJlc3QpID0+IHtcbiAgY29uc29sZS53YXJuKHByZWZpeCArIHN0ciwgLi4ucmVzdCk7XG59O1xuXG5leHBvcnQgY29uc3QgZXJyb3IgPSAoc3RyLCAuLi5yZXN0KSA9PiB7XG4gIGNvbnNvbGUuZXJyb3IocHJlZml4ICsgc3RyLCAuLi5yZXN0KTtcbn07XG5cbmV4cG9ydCBjb25zdCB0aHJvd0Vycm9yID0gc3RyID0+IHtcbiAgdGhyb3cgbmV3IEVycm9yKHByZWZpeCArIHN0cik7XG59O1xuIl19

  var class2type = {};
  var toString = class2type.toString;
  'Boolean Number String Function Array Date RegExp Object Error Symbol'.split(' ').forEach(function (name) {
      class2type[("[object " + name + "]")] = name.toLowerCase();
  });
  function type (obj) {
      if (obj === null) 
          { return ("" + obj); }
      return typeof obj === 'object' || typeof obj === 'function' ? class2type[toString.call(obj)] || 'object' : typeof obj;
  }



  //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInR5cGUuanMob3JpZ2luYWwpIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLEtBQUEsQ0FBTSxhQUFhO0FBQ25CLEtBQUEsQ0FBTSxDQUFFLFlBQWE7QUFFckIsc0VBQUEsQ0FBdUUsS0FBdkUsQ0FBNkUsSUFBN0UsQ0FBa0YsT0FBbEYsQ0FBMEYsSUFBQSxJQUFRO0lBQ2hHLFVBQUEsQ0FBVyxXQUFXLE1BQVgsRUFBWCxDQUFBLENBQUEsQ0FBaUMsSUFBQSxDQUFLLFdBQUw7QUFDbkM7QUFFQSxlQUFlLFVBQVMsS0FBSztJQUMzQixJQUFJLEdBQUEsQ0FBQSxHQUFBLENBQVE7UUFBTSxPQUFPLEdBQUcsSUFBSDtJQUV6QixPQUFPLE1BQUEsQ0FBTyxHQUFQLENBQUEsR0FBQSxDQUFlLFFBQWYsQ0FBQSxFQUFBLENBQTJCLE1BQUEsQ0FBTyxHQUFQLENBQUEsR0FBQSxDQUFlLFVBQTFDLEdBQXVELFVBQUEsQ0FBVyxRQUFBLENBQVMsSUFBVCxDQUFjLEtBQXpCLENBQUEsRUFBQSxDQUFrQyxXQUFXLE1BQUEsQ0FBTztBQUNwSDs7QUFiQSIsImZpbGUiOiJ0eXBlLmpzKG9yaWdpbmFsKSIsInNvdXJjZXNDb250ZW50IjpbIi8vIGZyb20ganF1ZXJ5W2h0dHBzOi8vZ2l0aHViLmNvbS9qcXVlcnkvanF1ZXJ5L2Jsb2IvbWFzdGVyL3NyYy9jb3JlLmpzI0wyNzFdXG5cbmNvbnN0IGNsYXNzMnR5cGUgPSB7fTtcbmNvbnN0IHsgdG9TdHJpbmcgfSA9IGNsYXNzMnR5cGU7XG5cbidCb29sZWFuIE51bWJlciBTdHJpbmcgRnVuY3Rpb24gQXJyYXkgRGF0ZSBSZWdFeHAgT2JqZWN0IEVycm9yIFN5bWJvbCcuc3BsaXQoJyAnKS5mb3JFYWNoKG5hbWUgPT4ge1xuICBjbGFzczJ0eXBlW2Bbb2JqZWN0ICR7bmFtZX1dYF0gPSBuYW1lLnRvTG93ZXJDYXNlKCk7XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24ob2JqKSB7XG4gIGlmIChvYmogPT09IG51bGwpIHJldHVybiBgJHtvYmp9YDtcblxuICByZXR1cm4gdHlwZW9mIG9iaiA9PT0gJ29iamVjdCcgfHwgdHlwZW9mIG9iaiA9PT0gJ2Z1bmN0aW9uJyA/IGNsYXNzMnR5cGVbdG9TdHJpbmcuY2FsbChvYmopXSB8fCAnb2JqZWN0JyA6IHR5cGVvZiBvYmo7XG59XG4iXX0=

  function check (target, keysMap) {
      if (!target || typeof target !== 'object') {
          error('target is invalid, it should be a map or an array');
          error('target: ', target);
          return !1;
      }
      if (!keysMap || typeof keysMap !== 'object') {
          error('keysMap is invalid, it should be a map or an array');
          error('keysMap: ', keysMap);
          return !1;
      }
      if (type(target) !== type(keysMap)) {
          error('target and keysMap are not the same type, they both should be map or array');
          error('target: ', target);
          error('keysMap: ', keysMap);
          return !1;
      }
      return !0;
  }



  //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoZWNrLmpzKG9yaWdpbmFsKSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxRQUFTLFlBQWE7QUFDdEIsT0FBTyxVQUFVO0FBRWpCLGVBQWUsVUFBUyxNQUFRLEVBQUEsU0FBUztJQUN2QyxJQUFJLENBQUMsTUFBRCxDQUFBLEVBQUEsQ0FBVyxNQUFBLENBQU8sTUFBUCxDQUFBLEdBQUEsQ0FBa0IsVUFBVTtRQUN6QyxLQUFBLENBQU07UUFDTixLQUFBLENBQU0sWUFBWTtRQUNsQixPQUFPLENBQUM7SUFDWjtJQUVFLElBQUksQ0FBQyxPQUFELENBQUEsRUFBQSxDQUFZLE1BQUEsQ0FBTyxPQUFQLENBQUEsR0FBQSxDQUFtQixVQUFVO1FBQzNDLEtBQUEsQ0FBTTtRQUNOLEtBQUEsQ0FBTSxhQUFhO1FBQ25CLE9BQU8sQ0FBQztJQUNaO0lBRUUsSUFBSSxJQUFBLENBQUssT0FBTCxDQUFBLEdBQUEsQ0FBaUIsSUFBQSxDQUFLLFVBQVU7UUFDbEMsS0FBQSxDQUFNO1FBQ04sS0FBQSxDQUFNLFlBQVk7UUFDbEIsS0FBQSxDQUFNLGFBQWE7UUFDbkIsT0FBTyxDQUFDO0lBQ1o7SUFFRSxPQUFPLENBQUM7QUFDVjs7QUF4QkEiLCJmaWxlIjoiY2hlY2suanMob3JpZ2luYWwpIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZXJyb3IgfSBmcm9tICcuL2xvZ2dlcic7XG5pbXBvcnQgdHlwZSBmcm9tICcuL3R5cGUnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbih0YXJnZXQsIGtleXNNYXApIHtcbiAgaWYgKCF0YXJnZXQgfHwgdHlwZW9mIHRhcmdldCAhPT0gJ29iamVjdCcpIHtcbiAgICBlcnJvcigndGFyZ2V0IGlzIGludmFsaWQsIGl0IHNob3VsZCBiZSBhIG1hcCBvciBhbiBhcnJheScpO1xuICAgIGVycm9yKCd0YXJnZXQ6ICcsIHRhcmdldCk7XG4gICAgcmV0dXJuICExO1xuICB9XG5cbiAgaWYgKCFrZXlzTWFwIHx8IHR5cGVvZiBrZXlzTWFwICE9PSAnb2JqZWN0Jykge1xuICAgIGVycm9yKCdrZXlzTWFwIGlzIGludmFsaWQsIGl0IHNob3VsZCBiZSBhIG1hcCBvciBhbiBhcnJheScpO1xuICAgIGVycm9yKCdrZXlzTWFwOiAnLCBrZXlzTWFwKTtcbiAgICByZXR1cm4gITE7XG4gIH1cblxuICBpZiAodHlwZSh0YXJnZXQpICE9PSB0eXBlKGtleXNNYXApKSB7XG4gICAgZXJyb3IoJ3RhcmdldCBhbmQga2V5c01hcCBhcmUgbm90IHRoZSBzYW1lIHR5cGUsIHRoZXkgYm90aCBzaG91bGQgYmUgbWFwIG9yIGFycmF5Jyk7XG4gICAgZXJyb3IoJ3RhcmdldDogJywgdGFyZ2V0KTtcbiAgICBlcnJvcigna2V5c01hcDogJywga2V5c01hcCk7XG4gICAgcmV0dXJuICExO1xuICB9XG5cbiAgcmV0dXJuICEwO1xufVxuIl19

  var marker = {
      keepOnHandling: '_',
      operatorDelimiter: '|'
  };


  //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hcmtlci5qcyhvcmlnaW5hbCkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZUFBZTtJQVliLGdCQUFnQixHQVpILENBQUE7SUFzQmIsbUJBQW1COztBQXRCckIiLCJmaWxlIjoibWFya2VyLmpzKG9yaWdpbmFsKSIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcbiAgLyoqXG4gICAqIE1ha2UgYSBuZXcga2V5LCBhbmQga2VlcCBvbiByZWZhY3RvcmluZyB0aGUgbmV3IGtleS5cbiAgICpcbiAgICogQGV4YW1wbGVcbiAgICpcbiAgICogYGBgXG4gICAqIHRhcmdldDoge2xpc3Q6IFt7fV19XG4gICAqXG4gICAqIGtleXNNYXA6IHtkYXRhOiAnbGlzdCcsIF9kYXRhOiBbe31dfVxuICAgKiBgYGBcbiAgICovXG4gIGtlZXBPbkhhbmRsaW5nOiAnXycsXG4gIC8qKlxuICAgKiBEZWxpbWl0ZXIgb2Ygb3BlcmF0b3JzLlxuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKlxuICAgKiBgYGBcbiAgICoga2V5c01hcDoge3RvS2V5OiAnZnJvbUtleXxvcGVyYXRvcjF8b3BlcmF0b3IyfG9wZXJhdG9yMyd9XG4gICAqIGBgYFxuICAgKi9cbiAgb3BlcmF0b3JEZWxpbWl0ZXI6ICd8Jyxcbn07XG4iXX0=

  var operations = [];


  //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9wZXJhdGlvbnMuanMob3JpZ2luYWwpIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBLGVBQWU7QUFMZiIsImZpbGUiOiJvcGVyYXRpb25zLmpzKG9yaWdpbmFsKSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogT3BlcmF0aW9ucyBjb2xsZWN0aW9uLlxuICpcbiAqIEB0eXBlIHtBcnJheX1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgW1xuICAvKipcbiAgICoge1xuICAgKiAgIHRlc3Q6IHN0cmluZy9SZWdFeHBcbiAgICogICAvLyB2YWx1ZTogb3JpZ2luYWwgdmFsdWUgb2YgY3VycmVudCBrZXlcbiAgICogICAvLyBvcGVyYXRvcjogb3BlcmF0b3Igb2YgY3VycmVudCBoYW5kbGluZ1xuICAgKiAgIGhhbmRsZXI6ICh2YWx1ZSwgb3BlcmF0b3IpID0+IHtcbiAgICpcbiAgICogICAgIC8vIFNob3VsZCByZXR1cm4gYSBuZXcgdmFsdWUgYXQgbGFzdC5cbiAgICogICAgIHJldHVybiBuZXdWYWx1ZTtcbiAgICogICB9XG4gICAqIH1cbiAgICovXG5dO1xuIl19

  function dotConvert (target, fromKey) {
      var fromKeyItems = fromKey.split('.');
      var result;
      var tempTarget = target;
      var tempKey;
      for (var i = 0;i < fromKeyItems.length; i += 1) {
          tempKey = fromKeyItems[i];
          if (typeof tempTarget[tempKey] !== 'undefined') {
              tempTarget = tempTarget[tempKey];
              result = tempTarget;
          } else {
              result = undefined;
              break;
          }
      }
      if (typeof result === 'undefined') 
          { return; }
      return result && typeof result === 'object' ? clone(result) : result;
  }



  //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvdC5qcyhvcmlnaW5hbCkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxXQUFXO0FBRWxCLGVBQWUsVUFBUyxNQUFRLEVBQUEsU0FBUztJQUV2QyxLQUFBLENBQU0sZUFBZSxPQUFBLENBQVEsS0FBUixDQUFjO0lBQ25DLEdBQUEsQ0FBSTtJQUVKLEdBQUEsQ0FBSSxhQUFhO0lBQ2pCLEdBQUEsQ0FBSTtJQUVKLEtBQUssR0FBQSxDQUFJLElBQUksRUFBRyxDQUFBLENBQUEsQ0FBQSxDQUFJLFlBQUEsQ0FBYSxRQUFRLENBQUEsQ0FBQSxFQUFBLENBQUssR0FBRztRQUMvQyxPQUFBLENBQUEsQ0FBQSxDQUFVLFlBQUEsQ0FBYTtRQUV2QixJQUFJLE1BQUEsQ0FBTyxVQUFBLENBQVcsUUFBbEIsQ0FBQSxHQUFBLENBQStCLGFBQWE7WUFHOUMsVUFBQSxDQUFBLENBQUEsQ0FBYSxVQUFBLENBQVc7WUFDeEIsTUFBQSxDQUFBLENBQUEsQ0FBUztRQUNmLE9BQVc7WUFHTCxNQUFBLENBQUEsQ0FBQSxDQUFTO1lBQ1Q7UUFDTjtJQUNBO0lBR0UsSUFBSSxNQUFBLENBQU8sTUFBUCxDQUFBLEdBQUEsQ0FBa0I7UUFBYTtJQUduQyxPQUFPLE1BQUEsQ0FBQSxFQUFBLENBQVUsTUFBQSxDQUFPLE1BQVAsQ0FBQSxHQUFBLENBQWtCLFFBQTVCLEdBQXVDLEtBQUEsQ0FBTSxVQUFVO0FBQ2hFOztBQS9CQSIsImZpbGUiOiJkb3QuanMob3JpZ2luYWwpIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNsb25lIGZyb20gJ2Nsb25lJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24odGFyZ2V0LCBmcm9tS2V5KSB7XG4gIC8vIFtrZXksIHN1YktleSwgc3ViU3ViS2V5LCAuLi5dXG4gIGNvbnN0IGZyb21LZXlJdGVtcyA9IGZyb21LZXkuc3BsaXQoJy4nKTtcbiAgbGV0IHJlc3VsdDtcblxuICBsZXQgdGVtcFRhcmdldCA9IHRhcmdldDtcbiAgbGV0IHRlbXBLZXk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBmcm9tS2V5SXRlbXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICB0ZW1wS2V5ID0gZnJvbUtleUl0ZW1zW2ldO1xuXG4gICAgaWYgKHR5cGVvZiB0ZW1wVGFyZ2V0W3RlbXBLZXldICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gSGFzIHZhbHVlLCBjb250aW51ZS5cblxuICAgICAgdGVtcFRhcmdldCA9IHRlbXBUYXJnZXRbdGVtcEtleV07XG4gICAgICByZXN1bHQgPSB0ZW1wVGFyZ2V0O1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBObyB2YWx1ZSwgYnJlYWsuXG5cbiAgICAgIHJlc3VsdCA9IHVuZGVmaW5lZDtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIC8vIE5vdCBmb3VuZC5cbiAgaWYgKHR5cGVvZiByZXN1bHQgPT09ICd1bmRlZmluZWQnKSByZXR1cm47XG5cbiAgLy8gSXMgYG9iamVjdFthcnJheXxtYXBdYCBhbmQgbm90IGBudWxsYCwgY2xvbmUgaXQuXG4gIHJldHVybiByZXN1bHQgJiYgdHlwZW9mIHJlc3VsdCA9PT0gJ29iamVjdCcgPyBjbG9uZShyZXN1bHQpIDogcmVzdWx0O1xufVxuIl19

  function convert (target, keysMap, toKey) {
      var fullFromKey = keysMap[toKey];
      var fullFromKeyItems = fullFromKey.split(marker.operatorDelimiter);
      var fromKey = fullFromKeyItems.shift();
      var operators = fullFromKeyItems;
      if (fromKey.indexOf('.') > -1) 
          { target[toKey] = dotConvert(target, fromKey); }
       else 
          { target[toKey] = target[fromKey]; }
      operators.forEach(function (operator) {
          operations.forEach(function (operation) {
              if (typeof operation.test === 'string') {
                  if (operator === operation.test) 
                      { target[toKey] = operation.handler(target[toKey], operator); }
              } else if (type(operation.test) === 'regexp') {
                  if (operation.test.test(operator)) 
                      { target[toKey] = operation.handler(target[toKey], operator); }
              }
          });
      });
  }



  //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzKG9yaWdpbmFsKSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLFlBQVk7QUFDbkIsT0FBTyxVQUFVO0FBQ2pCLE9BQU8sZ0JBQWdCO0FBQ3ZCLE9BQU8sZ0JBQWdCO0FBU3ZCLGVBQWUsVUFBUyxNQUFRLEVBQUEsT0FBUyxFQUFBLE9BQU87SUFJOUMsS0FBQSxDQUFNLGNBQWMsT0FBQSxDQUFRO0lBRzVCLEtBQUEsQ0FBTSxtQkFBbUIsV0FBQSxDQUFZLEtBQVosQ0FBa0IsTUFBQSxDQUFPO0lBR2xELEtBQUEsQ0FBTSxVQUFVLGdCQUFBLENBQWlCLEtBQWpCO0lBR2hCLEtBQUEsQ0FBTSxZQUFZO0lBR2xCLElBQUksT0FBQSxDQUFRLE9BQVIsQ0FBZ0IsSUFBaEIsQ0FBQSxDQUFBLENBQXVCLENBQUM7UUFBRyxNQUFBLENBQU8sTUFBUCxDQUFBLENBQUEsQ0FBZ0IsVUFBQSxDQUFXLFFBQVE7O1FBRTdELE1BQUEsQ0FBTyxNQUFQLENBQUEsQ0FBQSxDQUFnQixNQUFBLENBQU87SUFHNUIsU0FBQSxDQUFVLE9BQVYsQ0FBa0IsUUFBQSxJQUFZO1FBQzVCLFVBQUEsQ0FBVyxPQUFYLENBQW1CLFNBQUEsSUFBYTtZQUM5QixJQUFJLE1BQUEsQ0FBTyxTQUFBLENBQVUsSUFBakIsQ0FBQSxHQUFBLENBQTBCLFVBQVU7Z0JBR3RDLElBQUksUUFBQSxDQUFBLEdBQUEsQ0FBYSxTQUFBLENBQVU7b0JBQU0sTUFBQSxDQUFPLE1BQVAsQ0FBQSxDQUFBLENBQWdCLFNBQUEsQ0FBVSxPQUFWLENBQWtCLE1BQUEsQ0FBTyxRQUFRO1lBQzFGLE9BQWEsSUFBSSxJQUFBLENBQUssU0FBQSxDQUFVLEtBQWYsQ0FBQSxHQUFBLENBQXlCLFVBQVU7Z0JBRzVDLElBQUksU0FBQSxDQUFVLElBQVYsQ0FBZSxJQUFmLENBQW9CO29CQUFXLE1BQUEsQ0FBTyxNQUFQLENBQUEsQ0FBQSxDQUFnQixTQUFBLENBQVUsT0FBVixDQUFrQixNQUFBLENBQU8sUUFBUTtZQUM1RjtRQUNBO0lBQ0E7QUFDQTs7QUE5Q0EiLCJmaWxlIjoiaW5kZXguanMob3JpZ2luYWwpIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1hcmtlciBmcm9tICcuLi9tYXJrZXInO1xuaW1wb3J0IHR5cGUgZnJvbSAnLi4vdXRpbC90eXBlJztcbmltcG9ydCBvcGVyYXRpb25zIGZyb20gJy4uL29wZXJhdGlvbnMnO1xuaW1wb3J0IGRvdENvbnZlcnQgZnJvbSAnLi9kb3QnO1xuXG4vKipcbiAqIENvbnZlcnQgdGFyZ2V0IGJhc2VkIG9uIGBrZXlzTWFwYCBhbmQgYHRvS2V5YC5cbiAqXG4gKiBAcGFyYW0gdGFyZ2V0XG4gKiBAcGFyYW0ga2V5c01hcFxuICogQHBhcmFtIHRvS2V5XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHRhcmdldCwga2V5c01hcCwgdG9LZXkpIHtcbiAgLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cblxuICAvLyBgZnJvbUtleXxvcGVyYXRvcjF8b3BlcmF0b3IyfG9wZXJhdG9yM2BcbiAgY29uc3QgZnVsbEZyb21LZXkgPSBrZXlzTWFwW3RvS2V5XTtcblxuICAvLyBbZnJvbUtleSwgb3BlcmF0b3IxLCBvcGVyYXRvcjIsIG9wZXJhdG9yM11cbiAgY29uc3QgZnVsbEZyb21LZXlJdGVtcyA9IGZ1bGxGcm9tS2V5LnNwbGl0KG1hcmtlci5vcGVyYXRvckRlbGltaXRlcik7XG5cbiAgLy8gUmVhbCBmcm9tIGtleS5cbiAgY29uc3QgZnJvbUtleSA9IGZ1bGxGcm9tS2V5SXRlbXMuc2hpZnQoKTtcblxuICAvLyBBbGwgb3BlcmF0b3JzLlxuICBjb25zdCBvcGVyYXRvcnMgPSBmdWxsRnJvbUtleUl0ZW1zO1xuXG4gIC8vIEhhcyBkb3QgbWFyay5cbiAgaWYgKGZyb21LZXkuaW5kZXhPZignLicpID4gLTEpIHRhcmdldFt0b0tleV0gPSBkb3RDb252ZXJ0KHRhcmdldCwgZnJvbUtleSk7XG4gIC8vIEJhc2UuXG4gIGVsc2UgdGFyZ2V0W3RvS2V5XSA9IHRhcmdldFtmcm9tS2V5XTtcblxuICAvLyBPcGVyYXRvcnMgYW5kIG9wZXJhdGlvbnMuXG4gIG9wZXJhdG9ycy5mb3JFYWNoKG9wZXJhdG9yID0+IHtcbiAgICBvcGVyYXRpb25zLmZvckVhY2gob3BlcmF0aW9uID0+IHtcbiAgICAgIGlmICh0eXBlb2Ygb3BlcmF0aW9uLnRlc3QgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIC8vIHN0cmluZ1xuXG4gICAgICAgIGlmIChvcGVyYXRvciA9PT0gb3BlcmF0aW9uLnRlc3QpIHRhcmdldFt0b0tleV0gPSBvcGVyYXRpb24uaGFuZGxlcih0YXJnZXRbdG9LZXldLCBvcGVyYXRvcik7XG4gICAgICB9IGVsc2UgaWYgKHR5cGUob3BlcmF0aW9uLnRlc3QpID09PSAncmVnZXhwJykge1xuICAgICAgICAvLyBSZWdFeHBcblxuICAgICAgICBpZiAob3BlcmF0aW9uLnRlc3QudGVzdChvcGVyYXRvcikpIHRhcmdldFt0b0tleV0gPSBvcGVyYXRpb24uaGFuZGxlcih0YXJnZXRbdG9LZXldLCBvcGVyYXRvcik7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufVxuIl19

  var handle = function (target, keysMap) {
      if (!check(target, keysMap)) 
          { return; }
      if (Array.isArray(keysMap)) 
          { target.forEach(function (item) {
          handle(item, keysMap[0]);
      }); }
       else 
          { Object.keys(keysMap).forEach(function (toKey) {
          var fromKey = keysMap[toKey];
          var oldValue = target[toKey];
          if (toKey.slice(0, marker.keepOnHandling.length) === marker.keepOnHandling) {
              oldValue = target[toKey.slice(marker.keepOnHandling.length)];
          }
          if (typeof fromKey === 'object') {
              if (!check(oldValue, fromKey)) 
                  { return; }
              if (Array.isArray(fromKey)) {
                  oldValue.forEach(function (item) {
                      if (!check(item, fromKey[0])) 
                          { return; }
                      handle(item, fromKey[0]);
                  });
              } else {
                  handle(oldValue, fromKey);
              }
          } else if (typeof fromKey === 'string') {
              convert(target, keysMap, toKey);
          } else {
              error(("can't resolve key: " + (JSON.stringify(fromKey))));
          }
      }); }
  };


  //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhhbmRsZS5qcyhvcmlnaW5hbCkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxXQUFXO0FBQ2xCLFFBQVMsWUFBYTtBQUN0QixPQUFPLFlBQVk7QUFDbkIsT0FBTyxhQUFhO0FBUXBCLEtBQUEsQ0FBTSxVQUFVLE1BQVEsRUFBQSxTQUFULEdBQXFCO0lBQ2xDLElBQUksQ0FBQyxLQUFBLENBQU0sUUFBUTtRQUFVO0lBRzdCLElBQUksS0FBQSxDQUFNLE9BQU4sQ0FBYztRQUNoQixNQUFBLENBQU8sT0FBUCxDQUFlLElBQUEsSUFBUTtRQUNyQixNQUFBLENBQU8sTUFBTSxPQUFBLENBQVE7SUFDM0I7O1FBR0ksTUFBQSxDQUFPLElBQVAsQ0FBWSxRQUFaLENBQXFCLE9BQXJCLENBQTZCLEtBQUEsSUFBUztRQVVwQyxLQUFBLENBQU0sVUFBVSxPQUFBLENBQVE7UUFFeEIsR0FBQSxDQUFJLFdBQVcsTUFBQSxDQUFPO1FBR3RCLElBQUksS0FBQSxDQUFNLEtBQU4sQ0FBWSxHQUFHLE1BQUEsQ0FBTyxjQUFQLENBQXNCLE9BQXJDLENBQUEsR0FBQSxDQUFpRCxNQUFBLENBQU8sZ0JBQWdCO1lBQzFFLFFBQUEsQ0FBQSxDQUFBLENBQVcsTUFBQSxDQUFPLEtBQUEsQ0FBTSxLQUFOLENBQVksTUFBQSxDQUFPLGNBQVAsQ0FBc0I7UUFDNUQ7UUFFTSxJQUFJLE1BQUEsQ0FBTyxPQUFQLENBQUEsR0FBQSxDQUFtQixVQUFVO1lBWS9CLElBQUksQ0FBQyxLQUFBLENBQU0sVUFBVTtnQkFBVTtZQUcvQixJQUFJLEtBQUEsQ0FBTSxPQUFOLENBQWMsVUFBVTtnQkFDMUIsUUFBQSxDQUFTLE9BQVQsQ0FBaUIsSUFBQSxJQUFRO29CQUN2QixJQUFJLENBQUMsS0FBQSxDQUFNLE1BQU0sT0FBQSxDQUFRO3dCQUFLO29CQUU5QixNQUFBLENBQU8sTUFBTSxPQUFBLENBQVE7Z0JBQ2pDO1lBQ0EsT0FFYTtnQkFDSCxNQUFBLENBQU8sVUFBVTtZQUMzQjtRQUNBLE9BQWEsSUFBSSxNQUFBLENBQU8sT0FBUCxDQUFBLEdBQUEsQ0FBbUIsVUFBVTtZQVd0QyxPQUFBLENBQVEsUUFBUSxTQUFTO1FBQ2pDLE9BQWE7WUFHTCxLQUFBLENBQU0sc0JBQXNCLElBQUEsQ0FBSyxTQUFMLENBQWUsU0FBckM7UUFDZDtJQUNBO0FBQ0E7QUFFQSxlQUFlO0FBdEZmIiwiZmlsZSI6ImhhbmRsZS5qcyhvcmlnaW5hbCkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2hlY2sgZnJvbSAnLi91dGlsL2NoZWNrJztcbmltcG9ydCB7IGVycm9yIH0gZnJvbSAnLi91dGlsL2xvZ2dlcic7XG5pbXBvcnQgbWFya2VyIGZyb20gJy4vbWFya2VyJztcbmltcG9ydCBjb252ZXJ0IGZyb20gJy4vY29udmVydCc7XG5cbi8qKlxuICogSGFuZGxlIGZ1bmN0aW9uLlxuICpcbiAqIEBwYXJhbSB0YXJnZXQgVGFyZ2V0IHRvIGhhbmRsZS5cbiAqIEBwYXJhbSBrZXlzTWFwIFJ1bGVzXG4gKi9cbmNvbnN0IGhhbmRsZSA9ICh0YXJnZXQsIGtleXNNYXApID0+IHtcbiAgaWYgKCFjaGVjayh0YXJnZXQsIGtleXNNYXApKSByZXR1cm47XG5cbiAgLy8gYXJyYXlcbiAgaWYgKEFycmF5LmlzQXJyYXkoa2V5c01hcCkpXG4gICAgdGFyZ2V0LmZvckVhY2goaXRlbSA9PiB7XG4gICAgICBoYW5kbGUoaXRlbSwga2V5c01hcFswXSk7XG4gICAgfSk7XG4gIC8vIG1hcFxuICBlbHNlXG4gICAgT2JqZWN0LmtleXMoa2V5c01hcCkuZm9yRWFjaCh0b0tleSA9PiB7XG4gICAgICAvKipcbiAgICAgICAqIEp1c3QgY29weSB2YWx1ZSBvZiBgZnJvbUtleWAgdG8gYHRvS2V5YC5cbiAgICAgICAqXG4gICAgICAgKiBAZXhhbXBsZVxuICAgICAgICpcbiAgICAgICAqIGBgYFxuICAgICAgICoge3RvS2V5OiBmcm9tS2V5fVxuICAgICAgICogYGBgXG4gICAgICAgKi9cbiAgICAgIGNvbnN0IGZyb21LZXkgPSBrZXlzTWFwW3RvS2V5XTtcblxuICAgICAgbGV0IG9sZFZhbHVlID0gdGFyZ2V0W3RvS2V5XTtcblxuICAgICAgLy8ge2RhdGE6ICdsaXN0JywgX2RhdGE6IFt7Li4ufV19XG4gICAgICBpZiAodG9LZXkuc2xpY2UoMCwgbWFya2VyLmtlZXBPbkhhbmRsaW5nLmxlbmd0aCkgPT09IG1hcmtlci5rZWVwT25IYW5kbGluZykge1xuICAgICAgICBvbGRWYWx1ZSA9IHRhcmdldFt0b0tleS5zbGljZShtYXJrZXIua2VlcE9uSGFuZGxpbmcubGVuZ3RoKV07XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgZnJvbUtleSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIGBmcm9tS2V5YCBpcyBvYmplY3QuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBleGFtcGxlXG4gICAgICAgICAqXG4gICAgICAgICAqIGBgYFxuICAgICAgICAgKiB7a2V5OiB7Li4ufX1cbiAgICAgICAgICoge2tleTogW3suLi59XX1cbiAgICAgICAgICogYGBgXG4gICAgICAgICAqL1xuXG4gICAgICAgIGlmICghY2hlY2sob2xkVmFsdWUsIGZyb21LZXkpKSByZXR1cm47XG5cbiAgICAgICAgLy8gYXJyYXlcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZnJvbUtleSkpIHtcbiAgICAgICAgICBvbGRWYWx1ZS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgaWYgKCFjaGVjayhpdGVtLCBmcm9tS2V5WzBdKSkgcmV0dXJuO1xuXG4gICAgICAgICAgICBoYW5kbGUoaXRlbSwgZnJvbUtleVswXSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gbWFwXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGhhbmRsZShvbGRWYWx1ZSwgZnJvbUtleSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGZyb21LZXkgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBgZnJvbUtleWAgaXMgc3RyaW5nLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAZXhhbXBsZVxuICAgICAgICAgKlxuICAgICAgICAgKiBgYGBcbiAgICAgICAgICoge3RvS2V5OiBmcm9tS2V5fVxuICAgICAgICAgKiBgYGBcbiAgICAgICAgICovXG5cbiAgICAgICAgY29udmVydCh0YXJnZXQsIGtleXNNYXAsIHRvS2V5KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIE90aGVycy5cblxuICAgICAgICBlcnJvcihgY2FuJ3QgcmVzb2x2ZSBrZXk6ICR7SlNPTi5zdHJpbmdpZnkoZnJvbUtleSl9YCk7XG4gICAgICB9XG4gICAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGU7XG4iXX0=

  function refactor (target, keysMap, returnNew) {
      if (!check(target, keysMap)) 
          { return target; }
      var newTarget = returnNew ? clone(target) : target;
      handle(newTarget, keysMap);
      return newTarget;
  }



  //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZmFjdG9yLmpzKG9yaWdpbmFsKSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLFdBQVc7QUFDbEIsT0FBTyxXQUFXO0FBQ2xCLE9BQU8sWUFBWTtBQVNuQixlQUFlLFVBQVMsTUFBUSxFQUFBLE9BQVMsRUFBQSxXQUFXO0lBQ2xELElBQUksQ0FBQyxLQUFBLENBQU0sUUFBUTtRQUFVLE9BQU87SUFFcEMsS0FBQSxDQUFNLFlBQVksU0FBQSxHQUFZLEtBQUEsQ0FBTSxVQUFVO0lBRTlDLE1BQUEsQ0FBTyxXQUFXO0lBRWxCLE9BQU87QUFDVDs7QUFuQkEiLCJmaWxlIjoicmVmYWN0b3IuanMob3JpZ2luYWwpIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNsb25lIGZyb20gJ2Nsb25lJztcbmltcG9ydCBjaGVjayBmcm9tICcuL3V0aWwvY2hlY2snO1xuaW1wb3J0IGhhbmRsZSBmcm9tICcuL2hhbmRsZSc7XG5cbi8qKlxuICogTWFpblxuICpcbiAqIEBwYXJhbSB0YXJnZXQgVGFyZ2V0IHRvIGhhbmRsZS5cbiAqIEBwYXJhbSBrZXlzTWFwIEtleXMgbWFwIHRvIHJlZmFjdG9yLlxuICogQHBhcmFtIHJldHVybk5ldyBXaGV0aGVyIHJldHVybiBuZXcganNvbiwgaWYgdHJ1ZSwgYSBuZXcgY2xvbmUgdGFyZ2V0IHdpbGwgYmUgcmV0dXJuLCBhbmQgdGhlIG9yaWdpbmFsIHRhcmdldCB3aWxsIGJlIG5vdCBiZSBtb2RpZmllZC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24odGFyZ2V0LCBrZXlzTWFwLCByZXR1cm5OZXcpIHtcbiAgaWYgKCFjaGVjayh0YXJnZXQsIGtleXNNYXApKSByZXR1cm4gdGFyZ2V0O1xuXG4gIGNvbnN0IG5ld1RhcmdldCA9IHJldHVybk5ldyA/IGNsb25lKHRhcmdldCkgOiB0YXJnZXQ7XG5cbiAgaGFuZGxlKG5ld1RhcmdldCwga2V5c01hcCk7XG5cbiAgcmV0dXJuIG5ld1RhcmdldDtcbn1cbiJdfQ==

  function set (options) {
      if (!options || typeof options !== 'object') 
          { return; }
      Object.keys(options).forEach(function (key) {
          marker[key] = options[key];
      });
  }



  //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNldC5qcyhvcmlnaW5hbCkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxZQUFZO0FBT25CLGVBQWUsVUFBUyxTQUFTO0lBQy9CLElBQUksQ0FBQyxPQUFELENBQUEsRUFBQSxDQUFZLE1BQUEsQ0FBTyxPQUFQLENBQUEsR0FBQSxDQUFtQjtRQUFVO0lBRTdDLE1BQUEsQ0FBTyxJQUFQLENBQVksUUFBWixDQUFxQixPQUFyQixDQUE2QixHQUFBLElBQU87UUFDbEMsTUFBQSxDQUFPLElBQVAsQ0FBQSxDQUFBLENBQWMsT0FBQSxDQUFRO0lBQzFCO0FBQ0E7O0FBYkEiLCJmaWxlIjoic2V0LmpzKG9yaWdpbmFsKSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtYXJrZXIgZnJvbSAnLi9tYXJrZXInO1xuXG4vKipcbiAqIFNldCBjdXN0b20gbWFya2Vycy5cbiAqXG4gKiBAcGFyYW0gb3B0aW9uc1xuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucyB8fCB0eXBlb2Ygb3B0aW9ucyAhPT0gJ29iamVjdCcpIHJldHVybjtcblxuICBPYmplY3Qua2V5cyhvcHRpb25zKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgbWFya2VyW2tleV0gPSBvcHRpb25zW2tleV07XG4gIH0pO1xufVxuIl19

  function register (test, handler) {
      if (!test) 
          { return; }
      if (test && handler) 
          { operations.push({
          test: test,
          handler: handler
      }); }
       else if (typeof test === 'object') {
          if (Array.isArray(test)) 
              { operations.push.apply(operations, test); }
           else 
              { operations.push(test); }
      }
  }



  //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLmpzKG9yaWdpbmFsKSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLGdCQUFnQjtBQVF2QixlQUFlLFVBQVMsSUFBTSxFQUFBLFNBQVM7SUFDckMsSUFBSSxDQUFDO1FBQU07SUFHWCxJQUFJLElBQUEsQ0FBQSxFQUFBLENBQVE7UUFBUyxVQUFBLENBQVcsSUFBWCxDQUFnQjtRQUFFLElBQUYsQ0FBQTtRQUFROztVQUV4QyxJQUFJLE1BQUEsQ0FBTyxJQUFQLENBQUEsR0FBQSxDQUFnQixVQUFVO1FBRWpDLElBQUksS0FBQSxDQUFNLE9BQU4sQ0FBYztZQUFPLFVBQUEsQ0FBVyxJQUFYLENBQWdCLEdBQUc7O1lBRXZDLFVBQUEsQ0FBVyxJQUFYLENBQWdCO0lBQ3pCO0FBQ0E7O0FBcEJBIiwiZmlsZSI6InJlZ2lzdGVyLmpzKG9yaWdpbmFsKSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBvcGVyYXRpb25zIGZyb20gJy4vb3BlcmF0aW9ucyc7XG5cbi8qKlxuICogUmVnaXN0ZXIgYW4gb3BlcmF0b3IuXG4gKlxuICogQHBhcmFtIHRlc3RcbiAqIEBwYXJhbSBoYW5kbGVyXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHRlc3QsIGhhbmRsZXIpIHtcbiAgaWYgKCF0ZXN0KSByZXR1cm47XG5cbiAgLy8gc3RyaW5nL3JlZ0V4cCArIGhhbmRsZXJcbiAgaWYgKHRlc3QgJiYgaGFuZGxlcikgb3BlcmF0aW9ucy5wdXNoKHsgdGVzdCwgaGFuZGxlciB9KTtcbiAgLy8gbWFwIG9yIGFycmF5XG4gIGVsc2UgaWYgKHR5cGVvZiB0ZXN0ID09PSAnb2JqZWN0Jykge1xuICAgIC8vIFt7dGVzdCwgaGFuZGxlcn0sIHsuLi59XVxuICAgIGlmIChBcnJheS5pc0FycmF5KHRlc3QpKSBvcGVyYXRpb25zLnB1c2goLi4udGVzdCk7XG4gICAgLy8ge3Rlc3QsIGhhbmRsZXJ9XG4gICAgZWxzZSBvcGVyYXRpb25zLnB1c2godGVzdCk7XG4gIH1cbn1cbiJdfQ==

  var intOperator = {
      test: 'int',
      handler: function (value) { return parseInt(value, 10); }
  };


  //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImludC5qcyhvcmlnaW5hbCkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZUFBZTtJQUNiLE1BQU0sS0FETyxDQUFBO0lBRWIsU0FBUyxLQUFBLElBQVMsUUFBQSxDQUFTLE9BQU87O0FBRnBDIiwiZmlsZSI6ImludC5qcyhvcmlnaW5hbCkiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG4gIHRlc3Q6ICdpbnQnLFxuICBoYW5kbGVyOiB2YWx1ZSA9PiBwYXJzZUludCh2YWx1ZSwgMTApLFxufTtcbiJdfQ==

  var floatOperator = {
      test: 'float',
      handler: function (value) { return parseFloat(value); }
  };


  //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZsb2F0LmpzKG9yaWdpbmFsKSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxlQUFlO0lBQ2IsTUFBTSxPQURPLENBQUE7SUFFYixTQUFTLEtBQUEsSUFBUyxVQUFBLENBQVc7O0FBRi9CIiwiZmlsZSI6ImZsb2F0LmpzKG9yaWdpbmFsKSIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcbiAgdGVzdDogJ2Zsb2F0JyxcbiAgaGFuZGxlcjogdmFsdWUgPT4gcGFyc2VGbG9hdCh2YWx1ZSksXG59O1xuIl19

  var boolOperator = {
      test: 'bool',
      handler: function (value) { return !(!value); }
  };


  //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb2wuanMob3JpZ2luYWwpIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGVBQWU7SUFDYixNQUFNLE1BRE8sQ0FBQTtJQUViLFNBQVMsS0FBQSxJQUFTLEVBQUMsQ0FBQzs7QUFGdEIiLCJmaWxlIjoiYm9vbC5qcyhvcmlnaW5hbCkiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG4gIHRlc3Q6ICdib29sJyxcbiAgaGFuZGxlcjogdmFsdWUgPT4gISF2YWx1ZSxcbn07XG4iXX0=

  var stringOperator = {
      test: 'string',
      handler: function (value) { return ("" + value); }
  };


  //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmluZy5qcyhvcmlnaW5hbCkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZUFBZTtJQUNiLE1BQU0sUUFETyxDQUFBO0lBRWIsU0FBUyxLQUFBLElBQVMsR0FBRyxNQUFIOztBQUZwQiIsImZpbGUiOiJzdHJpbmcuanMob3JpZ2luYWwpIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xuICB0ZXN0OiAnc3RyaW5nJyxcbiAgaGFuZGxlcjogdmFsdWUgPT4gYCR7dmFsdWV9YCxcbn07XG4iXX0=

  var sumOperator = {
      test: /^sum!/,
      handler: function (value, operator) {
          var field = operator.split('!')[1];
          var sum = 0;
          if (!field) {
              error(("'" + operator + "' is not a valid operator."));
              return sum;
          }
          if (!value || !Array.isArray(value)) {
              error(("original value should be an array for operator '" + operator + "'."), value);
              return sum;
          }
          value.forEach(function (item) {
              sum += item[field];
          });
          return sum;
      }
  };


  //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1bS5qcyhvcmlnaW5hbCkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsUUFBUyxZQUFhO0FBRXRCLGVBQWU7SUFDYixNQUFNLE9BRE8sQ0FBQTtJQUViLFVBQVUsS0FBTyxFQUFBLFVBQVIsR0FBcUI7UUFDNUIsS0FBQSxDQUFNLFFBQVEsUUFBQSxDQUFTLEtBQVQsQ0FBZSxJQUFmLENBQW9CO1FBQ2xDLEdBQUEsQ0FBSSxNQUFNO1FBRVYsSUFBSSxDQUFDLE9BQU87WUFDVixLQUFBLENBQU0sSUFBSSxtQ0FBSjtZQUNOLE9BQU87UUFDYjtRQUVJLElBQUksQ0FBQyxLQUFELENBQUEsRUFBQSxDQUFVLENBQUMsS0FBQSxDQUFNLE9BQU4sQ0FBYyxRQUFRO1lBQ25DLEtBQUEsQ0FBTSxtREFBbUQsV0FBbkQsR0FBaUU7WUFDdkUsT0FBTztRQUNiO1FBRUksS0FBQSxDQUFNLE9BQU4sQ0FBYyxJQUFBLElBQVE7WUFDcEIsR0FBQSxDQUFBLEVBQUEsQ0FBTyxJQUFBLENBQUs7UUFDbEI7UUFFSSxPQUFPO0lBQ1g7O0FBdkJBIiwiZmlsZSI6InN1bS5qcyhvcmlnaW5hbCkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBlcnJvciB9IGZyb20gJy4uL3V0aWwvbG9nZ2VyJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICB0ZXN0OiAvXnN1bSEvLFxuICBoYW5kbGVyOiAodmFsdWUsIG9wZXJhdG9yKSA9PiB7XG4gICAgY29uc3QgZmllbGQgPSBvcGVyYXRvci5zcGxpdCgnIScpWzFdO1xuICAgIGxldCBzdW0gPSAwO1xuXG4gICAgaWYgKCFmaWVsZCkge1xuICAgICAgZXJyb3IoYCcke29wZXJhdG9yfScgaXMgbm90IGEgdmFsaWQgb3BlcmF0b3IuYCk7XG4gICAgICByZXR1cm4gc3VtO1xuICAgIH1cblxuICAgIGlmICghdmFsdWUgfHwgIUFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICBlcnJvcihgb3JpZ2luYWwgdmFsdWUgc2hvdWxkIGJlIGFuIGFycmF5IGZvciBvcGVyYXRvciAnJHtvcGVyYXRvcn0nLmAsIHZhbHVlKTtcbiAgICAgIHJldHVybiBzdW07XG4gICAgfVxuXG4gICAgdmFsdWUuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgIHN1bSArPSBpdGVtW2ZpZWxkXTtcbiAgICB9KTtcblxuICAgIHJldHVybiBzdW07XG4gIH0sXG59O1xuIl19

  var averageOperator = {
      test: /^average!/,
      handler: function (value, operator) {
          var field = operator.split('!')[1];
          var sum = 0;
          var count = 0;
          if (!field) {
              error(("'" + operator + "' is not a valid operator."));
              return sum;
          }
          if (!value || !Array.isArray(value)) {
              error(("original value should be an array for operator '" + operator + "'."), value);
              return sum;
          }
          value.forEach(function (item) {
              sum += item[field];
              count += 1;
          });
          return sum / count;
      }
  };


  //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF2ZXJhZ2UuanMob3JpZ2luYWwpIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFFBQVMsWUFBYTtBQUV0QixlQUFlO0lBQ2IsTUFBTSxXQURPLENBQUE7SUFFYixVQUFVLEtBQU8sRUFBQSxVQUFSLEdBQXFCO1FBQzVCLEtBQUEsQ0FBTSxRQUFRLFFBQUEsQ0FBUyxLQUFULENBQWUsSUFBZixDQUFvQjtRQUNsQyxHQUFBLENBQUksTUFBTTtRQUNWLEdBQUEsQ0FBSSxRQUFRO1FBRVosSUFBSSxDQUFDLE9BQU87WUFDVixLQUFBLENBQU0sSUFBSSxtQ0FBSjtZQUNOLE9BQU87UUFDYjtRQUVJLElBQUksQ0FBQyxLQUFELENBQUEsRUFBQSxDQUFVLENBQUMsS0FBQSxDQUFNLE9BQU4sQ0FBYyxRQUFRO1lBQ25DLEtBQUEsQ0FBTSxtREFBbUQsV0FBbkQsR0FBaUU7WUFDdkUsT0FBTztRQUNiO1FBRUksS0FBQSxDQUFNLE9BQU4sQ0FBYyxJQUFBLElBQVE7WUFDcEIsR0FBQSxDQUFBLEVBQUEsQ0FBTyxJQUFBLENBQUs7WUFDWixLQUFBLENBQUEsRUFBQSxDQUFTO1FBQ2Y7UUFFSSxPQUFPLEdBQUEsQ0FBQSxDQUFBLENBQU07SUFDakI7O0FBekJBIiwiZmlsZSI6ImF2ZXJhZ2UuanMob3JpZ2luYWwpIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZXJyb3IgfSBmcm9tICcuLi91dGlsL2xvZ2dlcic7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgdGVzdDogL15hdmVyYWdlIS8sXG4gIGhhbmRsZXI6ICh2YWx1ZSwgb3BlcmF0b3IpID0+IHtcbiAgICBjb25zdCBmaWVsZCA9IG9wZXJhdG9yLnNwbGl0KCchJylbMV07XG4gICAgbGV0IHN1bSA9IDA7XG4gICAgbGV0IGNvdW50ID0gMDtcblxuICAgIGlmICghZmllbGQpIHtcbiAgICAgIGVycm9yKGAnJHtvcGVyYXRvcn0nIGlzIG5vdCBhIHZhbGlkIG9wZXJhdG9yLmApO1xuICAgICAgcmV0dXJuIHN1bTtcbiAgICB9XG5cbiAgICBpZiAoIXZhbHVlIHx8ICFBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgZXJyb3IoYG9yaWdpbmFsIHZhbHVlIHNob3VsZCBiZSBhbiBhcnJheSBmb3Igb3BlcmF0b3IgJyR7b3BlcmF0b3J9Jy5gLCB2YWx1ZSk7XG4gICAgICByZXR1cm4gc3VtO1xuICAgIH1cblxuICAgIHZhbHVlLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICBzdW0gKz0gaXRlbVtmaWVsZF07XG4gICAgICBjb3VudCArPSAxO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHN1bSAvIGNvdW50O1xuICB9LFxufTtcbiJdfQ==

  register(intOperator);
  register(floatOperator);
  register(boolOperator);
  register(stringOperator);
  register(sumOperator);
  register(averageOperator);
  refactor.set = set;
  refactor.register = register;


  //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzKG9yaWdpbmFsKSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLGNBQWM7QUFDckIsT0FBTyxTQUFTO0FBQ2hCLE9BQU8sY0FBYztBQUNyQixPQUFPLGlCQUFpQjtBQUN4QixPQUFPLG1CQUFtQjtBQUMxQixPQUFPLGtCQUFrQjtBQUN6QixPQUFPLG9CQUFvQjtBQUMzQixPQUFPLGlCQUFpQjtBQUN4QixPQUFPLHFCQUFxQjtBQUc1QixRQUFBLENBQVM7QUFDVCxRQUFBLENBQVM7QUFDVCxRQUFBLENBQVM7QUFDVCxRQUFBLENBQVM7QUFDVCxRQUFBLENBQVM7QUFDVCxRQUFBLENBQVM7QUFFVCxRQUFBLENBQVMsR0FBVCxDQUFBLENBQUEsQ0FBZTtBQUNmLFFBQUEsQ0FBUyxRQUFULENBQUEsQ0FBQSxDQUFvQjtBQUVwQixlQUFlO0FBckJmIiwiZmlsZSI6ImluZGV4LmpzKG9yaWdpbmFsKSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCByZWZhY3RvciBmcm9tICcuL3JlZmFjdG9yJztcbmltcG9ydCBzZXQgZnJvbSAnLi9zZXQnO1xuaW1wb3J0IHJlZ2lzdGVyIGZyb20gJy4vcmVnaXN0ZXInO1xuaW1wb3J0IGludE9wZXJhdG9yIGZyb20gJy4vb3BlcmF0b3IvaW50JztcbmltcG9ydCBmbG9hdE9wZXJhdG9yIGZyb20gJy4vb3BlcmF0b3IvZmxvYXQnO1xuaW1wb3J0IGJvb2xPcGVyYXRvciBmcm9tICcuL29wZXJhdG9yL2Jvb2wnO1xuaW1wb3J0IHN0cmluZ09wZXJhdG9yIGZyb20gJy4vb3BlcmF0b3Ivc3RyaW5nJztcbmltcG9ydCBzdW1PcGVyYXRvciBmcm9tICcuL29wZXJhdG9yL3N1bSc7XG5pbXBvcnQgYXZlcmFnZU9wZXJhdG9yIGZyb20gJy4vb3BlcmF0b3IvYXZlcmFnZSc7XG5cbi8vIGJ1aWx0LWluIG9wZXJhdG9yc1xucmVnaXN0ZXIoaW50T3BlcmF0b3IpO1xucmVnaXN0ZXIoZmxvYXRPcGVyYXRvcik7XG5yZWdpc3Rlcihib29sT3BlcmF0b3IpO1xucmVnaXN0ZXIoc3RyaW5nT3BlcmF0b3IpO1xucmVnaXN0ZXIoc3VtT3BlcmF0b3IpO1xucmVnaXN0ZXIoYXZlcmFnZU9wZXJhdG9yKTtcblxucmVmYWN0b3Iuc2V0ID0gc2V0O1xucmVmYWN0b3IucmVnaXN0ZXIgPSByZWdpc3RlcjtcblxuZXhwb3J0IGRlZmF1bHQgcmVmYWN0b3I7XG4iXX0=

  return refactor;

})));
//# sourceMappingURL=json-refactor.umd.js.map
