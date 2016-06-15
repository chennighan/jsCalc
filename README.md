# jsCalc

jsCalc is a simple, completely vanilla JavaScript calculator library that allows you to stylistically implement it however you want. Included is an example implementation using Bootstrap3. 

Initialization is simple:  
<code>var calc = jsCalc();</code>   
     
The library relies on a few selectors.  
  
For your number buttons:  
```
<div class="calculator_button">  
  <button class="number_button">1</button>
</div>
```  
  
Similarly, for operator buttons:  
```
<div class="calculator_button">
   <button class="operator_button">*</button>
</div>
```  
  
For the 'clear' button:    
```
<a id="clear_button">clear</a>  
```  
  
The 'equals' button is a little different because it is checked as an operator right now, so it relies on 'calculator_button':  
```
<div class="calculator_button">
  <a id="equals_button">=</a>
</div>
```  
 
This is a work in progress and any feedback and contributions are welcome, or if you'd just like to see a feature and don't want to contribute feel free to drop an issue in the issues section. Thanks!
