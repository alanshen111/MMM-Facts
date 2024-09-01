# MMM-Facts: A MagicMirror Module

Displays some facts. Makes your mirror look like an RPG loading screen. No APIs needed.

![Example](example.png "Example")

## Installing the module

Clone this repository in your `~/MagicMirror/modules/` folder:

```bash
git clone https://github.com/alanshen111/MMM-Facts
```

## Using the module

Add the module to the `~/MagicMirror/config/config.js` file:

```javascript
modules: [
		{
			module: 'MMM-Facts',
			position: 'bottom_bar',
		}
]
```

You may also add configurations:

```javascript
modules: [
		{
			module: 'MMM-Facts',
			position: 'bottom_bar',
			config: {
					updateInterval: 5,
					fadeSpeed: 4,
					category: 'random',
			}
		}
]
```

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
			<td>Time it takes for the fact to change in seconds</td>
		</tr>
		<tr>
			<td><code>fadeSpeed</code></td>
			<td>Time it takes for the fact to fade out in seconds.</td>
		</tr>
		<tr>
			<td><code>category</code></td>
			<td>Default is <code>random</code>, but you can choose specific categories such as <code>art</code>, <code>food</code>, <code>health</code>, <code>history</code>, <code>language</code>, <code>nature</code>, <code>nerd</code>, <code>space</code> or <code>tips</code>. Feel free to add your own as well! </td>
		</tr>
	</tbody>
</table>

## How to add your own facts

You can edit the `MMM-Facts.js` file, if you are comfortable merging them with any remote changes.
Alternatively, you may fork this repository to have an exclusive copy you can edit without conflicts.
