# queryHash

use a script source of: 

```
<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
<script src="https://rhildred.github.io/queryHash/queryhash.js"></script>
```

Then in another script tag you can do something like this:

```
 oQueryParams = getQueryHash()

 $("#Name").append(oQueryParams.Name);

 ```
 
 You will of course need some .html code:
 
 ```
 <p>Thanks for your inquiry <span id="Name"></span>!</p>
 ```
