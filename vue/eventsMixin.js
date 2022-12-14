function eventsMixin(Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
      var vm = this;
      if (isArray(event)) {
          for (var i = 0, l = event.length; i < l; i++) {
              vm.$on(event[i], fn);
          }
      }
      else {
          (vm._events[event] || (vm._events[event] = [])).push(fn);
          // optimize hook:event cost by using a boolean flag marked at registration
          // instead of a hash lookup
          if (hookRE.test(event)) {
              vm._hasHookEvent = true;
          }
      }
      return vm;
  };
  Vue.prototype.$once = function (event, fn) {
      var vm = this;
      function on() {
          vm.$off(event, on);
          fn.apply(vm, arguments);
      }
      on.fn = fn;
      vm.$on(event, on);
      return vm;
  };
  Vue.prototype.$off = function (event, fn) {
      var vm = this;
      // all
      if (!arguments.length) {
          vm._events = Object.create(null);
          return vm;
      }
      // array of events
      if (isArray(event)) {
          for (var i_1 = 0, l = event.length; i_1 < l; i_1++) {
              vm.$off(event[i_1], fn);
          }
          return vm;
      }
      // specific event
      var cbs = vm._events[event];
      if (!cbs) {
          return vm;
      }
      if (!fn) {
          vm._events[event] = null;
          return vm;
      }
      // specific handler
      var cb;
      var i = cbs.length;
      while (i--) {
          cb = cbs[i];
          if (cb === fn || cb.fn === fn) {
              cbs.splice(i, 1);
              break;
          }
      }
      return vm;
  };
  Vue.prototype.$emit = function (event) {
      var vm = this;
      {
          var lowerCaseEvent = event.toLowerCase();
          if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
              tip("Event \"".concat(lowerCaseEvent, "\" is emitted in component ") +
                  "".concat(formatComponentName(vm), " but the handler is registered for \"").concat(event, "\". ") +
                  "Note that HTML attributes are case-insensitive and you cannot use " +
                  "v-on to listen to camelCase events when using in-DOM templates. " +
                  "You should probably use \"".concat(hyphenate(event), "\" instead of \"").concat(event, "\"."));
          }
      }
      var cbs = vm._events[event];
      if (cbs) {
          cbs = cbs.length > 1 ? toArray(cbs) : cbs;
          var args = toArray(arguments, 1);
          var info = "event handler for \"".concat(event, "\"");
          for (var i = 0, l = cbs.length; i < l; i++) {
              invokeWithErrorHandling(cbs[i], vm, args, vm, info);
          }
      }
      return vm;
  };
}
