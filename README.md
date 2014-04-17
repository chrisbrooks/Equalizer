Equalizer
=========

<h2>About</h2>

A jQuery plugin to handle the height of floated divs layed out as columns.   

Equalizer will work out which div or tag with the selector class on it has largest height and makes all the other floated selected elements the same height. 

Equalizer will also use the width of the container to divide the number of columns with or without margins to fit exactly inside the container. This makes the columns fully fluidly responsive on page resize.

<h3>Getting Started</h3>

Include jQuery and the plugin, then select the containing elements you want to Equalize

```html
<div class="container">
		<div class="equalize">
			<p>Column One</p>
		</div>

		<div class="equalize">
			<p>Column Two</p>
		</div>

		<div class="equalize">
			<p>Column Three</p>
		</div>
</div>

<script type="text/javascript">
	$(document).ready(function() {
		$( ".equalize" ).equalizer();	
	});
	//if you want fluid on window resize
	$(window).resize(function() {
		$( ".equalize" ).equalizer({      
		});	
	});
</script>
```

<h3>Css</h3>

There is only a couple of styles required for this plugin which are listed below. Change .container to the name of your containing div for content your are equalizing.

```html
	.container div{
			float:left;
			background:#eaeaea;
			-webkit-box-sizing: border-box;
			-moz-box-sizing: border-box;
			box-sizing: border-box;		
		}

		.container{
			display: inline-block;
		}
```

<h3>Options</h3>

The options for this plugin are listed below. Bare in mind all the numbers in the options are represented as percentages.

```javascript
$(document).ready(function() {

	$( ".equalize" ).equalizer({
        padding: 2,
        margin: 2,
        columns: 3,
        container: ".container",
        containerPadding: true
	});
			
});
```
`padding`<br/>
Default: 2<br/>
Description: padding for each column/selected class, this is represented as a percentage. Box model used for padding.

`margin`<br/>
Default: 2<br/>
Description: margin of each column/selected class, this is represented as a percentage.

`columns`<br/>
Default: 3<br/>
Description: number of columns you would like, so the number of div's or tags with the seletor class attached to it. You could have 4 tags with the selector class on it but only 2 columns, this would mean you get two rows of two columns.

`container`<br/>
Default: ".container"<br/>
Description: the class for the container of the columized selectors.

`containerPadding`<br/>
Default: true<br/>
Description: padding for the container of the columns. If 'true' the padding will equal the margin for the columns.