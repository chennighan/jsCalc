(function(global) {
   var jsCalc = function(options) {
      return new jsCalc.init(options);
   };

   var tempExpression = '';
   var displayExpression = '';
   var expression = {
      'x': '',
      'y': '',
      'operator': ''
   };

   jsCalc.prototype = {
      add: function(x,y) {
         console.log('adding: ' + x + ' to ' + y);
         return x+y;
      },
      subtract: function(x,y) {
         console.log('subtracting: ' + y + ' from ' + x);
         return x-y;
      },
      multiply: function(x,y) {
         console.log('multiplying: ' + x + ' by ' + y);
         return x*y;
      },
      divide: function(x,y) {
         console.log('dividing: ' + x + ' by ' + y);
         return x/y;
      },
      equals: function(expression) {
         var result = 0;
         if(expression.operator == '+') {
            result = this.add(expression.x,expression.y);
         } else if (expression.operator == '-') {
            result = this.subtract(expression.x,expression.y);
         } else if(expression.operator == '*'){
            result = this.multiply(expression.x,expression.y);
         } else if(expression.operator == '/') {
            result = this.divide(expression.x,expression.y);
         }

         return result;
      },
      numberButtonClick: function(event) {
         console.log('number button clicked...');
         var numberAppendage = event.target.numberAppendage;
         tempExpression += numberAppendage;
         displayExpression += numberAppendage;
         this.updateDisplay(displayExpression);
         console.log('tempExpression: ' + tempExpression);
      },
      /*
         what i could do is on the check if x and y are set and the button is not the equals button,
         place the "result" into expression.x and clear expression.y and replace the operator with 
         the currently clicked one
      */
      operatorButtonClick: function(event) {
         console.log('operator button clicked...');
         var operatorAppendage = event.target.operatorAppendage;

         // if x is already set you need to set y
         if(expression.x == '') {
            console.log('setting expression.x to: ' + tempExpression);
            expression.x = parseFloat(tempExpression);
            this.updateDisplay(displayExpression);
            tempExpression = '';
         } else if(expression.y == '') {
            console.log('setting expression.y to: ' + tempExpression);
            expression.y = parseFloat(tempExpression);
            this.updateDisplay(displayExpression);
            tempExpression = '';
         } else {
            console.log('x and y are set, you should call equals. There is nothing more to set.');
         }

         // if the operator has not been set, then set it
         if(expression.operator == '' && expression.y == '') {
            console.log('setting operator to: ' + operatorAppendage);
            expression.operator = operatorAppendage;
            displayExpression += operatorAppendage;
            this.updateDisplay(displayExpression);
         } else {
            console.log('operator not empty and expression.y not empty returned false...');
            var resultEquals = this.equals(expression);
            var result = displayExpression+' = ' + resultEquals;
            console.log('result: ' + result);
            this.updateDisplay(result);
            this.soft_clear();
         }
      },
      updateDisplay: function(display) {
         document.getElementById('calc_data').innerHTML = display;
      },
      soft_clear: function() {
         tempExpression = '';
         expression = {
            'x': '',
            'y': '',
            'operator': ''
         };
         displayExpression = '';
      },
      hard_clear: function() {
         tempExpression = '';
         expression = {
            'x': '',
            'y': '',
            'operator': ''
         };
         displayExpression = '';
         this.updateDisplay(0);
      }
   }

   jsCalc.init = function(options) {
      // Add event listeners to all the number buttons
      var numberButtons = document.querySelectorAll('.jsc_calculator_button .jsc_number_button');
      for(var i = 0; i < numberButtons.length; i++) {
         numberButtons[i].numberAppendage = numberButtons[i].textContent;
         numberButtons[i].addEventListener('click', function(event) {
            jsCalc.prototype.numberButtonClick(event);
         });
      }

      // Add event listeners to all the operator buttons
      var operatorButtons = document.querySelectorAll('.jsc_calculator_button .jsc_operator_button');
      for(var i = 0; i < operatorButtons.length; i++) {
         operatorButtons[i].operatorAppendage = operatorButtons[i].textContent;
         operatorButtons[i].addEventListener('click', function(event) {
            jsCalc.prototype.operatorButtonClick(event);
         });
      }

      var clearButton = document.getElementById('jsc_clear_button');
      clearButton.addEventListener('click', function() {
         jsCalc.prototype.hard_clear();
      });

      var equalsButton = document.getElementById('jsc_equals_button');
      equalsButton.addEventListener('click', function(event) {
         jsCalc.prototype.operatorButtonClick(event);
      });
   };    
   jsCalc.init.prototype = jsCalc.prototype;  
   global.jsCalc = jsCalc;
}(window));