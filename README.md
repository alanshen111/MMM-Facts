# Facts: A Magic Mirror Module

Displays some facts. No APIs needed. 

## Installing the module
Clone this repository in your `~/MagicMirror/modules/` folder
````javascript
git clone https://github.com/alanshen111/MMM-facts.git
````

## Using the module
Add the module to the `config/config.js` file:
````javascript
modules: [
		{
			module: 'random_quotes',
			position: 'lower_third',
			/**
			config: {
					updateInterval: 5,	
					fadeSpeed: 4,			
					category: 'random',	
			}
			**/
		}
]
````

## Configuration options

<table>
	<thead>
		<tr>
			<th>Options</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><code>updateInterval</code></td>
			<td>Time the fact is changed in seconds</td>
		</tr>
		<tr>
			<td><code>fadeSpeed</code></td>
			<td>Fact text fadeout in seconds.</td>
		</tr>
		<tr>
			<td><code>category</code></td>
			<td>What category to pick from. default is <code>random</code>, but you can choose specific categories such as <code>art</code>, <code>history</code>, <code>nature</code>, or <code>nerd</code>. </td>
		</tr>
	</tbody>
</table>

## Adding facts
You can edit the `facts.js` file.

## Extra Credits
Heavily inspired by the [random_quotes](https://github.com/KirAsh4/random_quotes) module.
