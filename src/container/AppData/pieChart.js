// Build data for a classic pie chart
const data = {}

// Labels are displayed in component, quantities are calculated to define size of each slice
data.dataSet = [
	 { label : 'c++', quantity: 140},
	 { label : 'java', quantity: 91},
	 { label : 'Scala', quantity: 88},
	 { label : 'C#', quantity: 74},
	 { label : 'perl', quantity: 63},
	 { label : 'html', quantity: 50},
	 { label : 'css', quantity: 65}
]

// Colors for each slice
data.colors = ["blue", "orange", "purple", 'green', 'red', "yellow", 'lemonChiffon'];

//Define the width of the svg element on the page
data.width = 460;

//Define the actual height(diameter) of the pie chart, this should not be larger than the width
data.height = 250;

//Define a class for the svg element for styling
data.arcClass = 'arc';

/* EXAMPLE CSS

.arc text {
  font: 14px sans-serif;
  text-anchor: middle;
}
.arc path {
  stroke: #fff;
}

*/

export default data;
