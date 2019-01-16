this is a very simple plugin to help you add a filter component on your website , and it's completely build by vanilla javascript , so
JQuery is not required .

HOW IT WORKS :

1 - import the script to youe webpage : 
```html
<script src = " src/beFilter.js " > </script>
```
2 - Just call the filter function 
```html
filter( [ ] , ' ' , ' ') : the filter function take 4 parameters : 
```
the first :

is an array containing the id of the filter buttons you have , it is a MUST .

**note the id of the filter button MUST be the same as the class of the elements you want to be filtered 

the second : 

is the id of the filter all button which will show everything when it's clicked .

the third : 

is the animation you want to have on showing the elements , it is OPTIONAL , and to add this parameter you will need to import animate.css to your website

the forth : 

is the animation you want to have on hiding the elements , it is OPTIONAL , and to add this parameter you will need to import animate.css to your website

animate.css cdn: 
```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css">
```
ex : 
```html
<button id ="filterAll"> filterAll</button>
<button id ="filter1"> filter one </button>
<button id ="filter2"> filter two </button> 
<button id ="filter3"> filter three </button>

<div class="filter1"> show this div when filter one is clicked </div>
<div class="filter1"> show this div when filter one is clicked </div>
<div class="filter2"> show this div when filter tow is clicked </div>
<div class="filter3"> show this div when filter three is clicked </div>

<script>

beFilter( ['filter1','filter2','filter3'] , 'filterAll' , 'fadeIn' , 'fadeOut'  );

</script>
```


-- this works perfectly with bootstrap 4 and 3                                                                                           
--works with the case when you have different position styles to you elements

